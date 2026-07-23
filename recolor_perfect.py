from PIL import Image
import numpy as np

# Load original logo image
input_path = r"c:\Users\freef\Downloads\j&s web\sites document\site logo.jpeg"
output_png = r"c:\Users\freef\Downloads\j&s web\public\images\site_logo.png"
output_jpg = r"c:\Users\freef\Downloads\j&s web\public\images\site_logo.jpeg"
output_v2_png = r"c:\Users\freef\Downloads\j&s web\public\images\site_logo_v2.png"
output_v2_jpg = r"c:\Users\freef\Downloads\j&s web\public\images\site_logo_v2.jpeg"

img = Image.open(input_path).convert("RGB")
arr = np.array(img, dtype=np.float32)

height, width, _ = arr.shape
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

# Exact Site Theme Colors (RGB)
# Accent Gold: #C29F78 -> (194, 159, 120)
# Deep Charcoal: #1C1B18 -> (28, 27, 24)
GOLD = np.array([194.0, 159.0, 120.0])
CHARCOAL = np.array([28.0, 27.0, 24.0])

# Result array initialized to white (255, 255, 255)
res = np.ones_like(arr) * 255.0

# 1. CONSTRUCTIONS LIMITED (Y > 0.83 * height)
bottom_mask = np.zeros((height, width), dtype=bool)
bottom_mask[int(height * 0.83):, :] = True
gray = (r + g + b) / 3.0
darkness = np.clip((255.0 - gray) / 255.0, 0, 1)

for c in range(3):
    res[bottom_mask, c] = (1 - darkness[bottom_mask]) * 255.0 + darkness[bottom_mask] * CHARCOAL[c]

# 2. AVENUE (Red text: Y 0.65..0.83 * height, X > 0.3 * width)
avenue_mask = np.zeros((height, width), dtype=bool)
avenue_mask[int(height * 0.65):int(height * 0.83), int(width * 0.3):] = True
red_strength = np.clip((r - np.maximum(g, b)) / 120.0, 0, 1)
red_strength = np.where(avenue_mask, red_strength, 0)

for c in range(3):
    res[avenue_mask, c] = (1 - red_strength[avenue_mask]) * 255.0 + red_strength[avenue_mask] * GOLD[c]

# 3. 3D Emblem "A" (Top area: Y < 0.80 * height, Cyan pixels)
emblem_mask = np.zeros((height, width), dtype=bool)
emblem_mask[:int(height * 0.80), :] = True
cyan_strength = np.clip((np.minimum(g, b) - r) / 80.0, 0, 1)
cyan_strength = np.where(emblem_mask & (cyan_strength > 0.1), cyan_strength, 0)

# Lighter cyan facet (Right facet) vs darker cyan facet (Left facet)
is_light_facet = ((g + b) / 2.0 > 155.0) & emblem_mask

for c in range(3):
    target_val = np.where(is_light_facet, GOLD[c], CHARCOAL[c])
    active_cyan = cyan_strength > 0
    res[active_cyan, c] = (1 - cyan_strength[active_cyan]) * 255.0 + cyan_strength[active_cyan] * target_val[active_cyan]

# Save JPEG
jpg_img = Image.fromarray(np.uint8(np.clip(res, 0, 255)), "RGB")
jpg_img.save(output_jpg, "JPEG", quality=98)
jpg_img.save(output_v2_jpg, "JPEG", quality=98)

# Save transparent PNG
rgba_arr = np.dstack([res, np.full((height, width), 255, dtype=np.float32)])
darkness_total = np.clip((255.0 - (res[:, :, 0] + res[:, :, 1] + res[:, :, 2]) / 3.0) * 8.0, 0, 255)
rgba_arr[:, :, 3] = darkness_total

png_img = Image.fromarray(np.uint8(np.clip(rgba_arr, 0, 255)), "RGBA")
png_img.save(output_png, "PNG")
png_img.save(output_v2_png, "PNG")

print("Generated site_logo_v2.png successfully!")
