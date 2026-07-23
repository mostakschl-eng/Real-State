from PIL import Image
import numpy as np

# Load original logo image
input_path = r"c:\Users\freef\Downloads\j&s web\sites document\site logo.jpeg"
output_png = r"c:\Users\freef\Downloads\j&s web\public\images\site_logo.png"
output_jpg = r"c:\Users\freef\Downloads\j&s web\public\images\site_logo.jpeg"

img = Image.open(input_path).convert("RGB")
arr = np.array(img, dtype=np.float32)

r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

# Target palette colors
GOLD = np.array([194.0, 159.0, 120.0])       # #C29F78 (Champagne Gold Accent)
CHARCOAL = np.array([28.0, 27.0, 24.0])     # #1C1B18 (Deep Charcoal Text/Pillar)
GOLD_LIGHT = np.array([215.0, 185.0, 148.0]) # Lighter Gold

# 1. Red Mask for "AVENUE" text (Red hue)
red_mask = (r > 110) & (r > g + 30) & (r > b + 30)
# Red ratio strength
red_factor = np.clip((r - np.maximum(g, b)) / 200.0, 0, 1)

# 2. Cyan Mask for 3D "A" Emblem (Blue-Green hue)
cyan_mask = (g > 70) & (b > 70) & (b > r + 15) & (g > r + 10)
cyan_factor = np.clip((np.minimum(g, b) - r) / 200.0, 0, 1)

# Split cyan emblem into left facet (darker) and right facet (lighter)
is_light_facet = (g + b) / 2.0 > 165.0

new_arr = np.copy(arr)

# Apply Red -> Gold
for i in range(3):
    new_arr[:, :, i] = np.where(red_mask, (1 - red_factor) * new_arr[:, :, i] + red_factor * GOLD[i], new_arr[:, :, i])

# Apply Cyan -> Charcoal (Left) / Gold (Right)
for i in range(3):
    target_c = np.where(is_light_facet, GOLD[i], CHARCOAL[i])
    new_arr[:, :, i] = np.where(cyan_mask, (1 - cyan_factor) * new_arr[:, :, i] + cyan_factor * target_c, new_arr[:, :, i])

# Apply Dark Text ("CONSTRUCTIONS LIMITED") -> Charcoal
dark_mask = (r < 90) & (g < 90) & (b < 90) & ~cyan_mask & ~red_mask
dark_factor = np.clip((255.0 - (r + g + b)/3.0) / 255.0, 0, 1)

for i in range(3):
    new_arr[:, :, i] = np.where(dark_mask, (1 - dark_factor) * new_arr[:, :, i] + dark_factor * CHARCOAL[i], new_arr[:, :, i])

# Save JPG
res_img = Image.fromarray(np.uint8(np.clip(new_arr, 0, 255)), "RGB")
res_img.save(output_jpg, "JPEG", quality=98)

# Transparent PNG (white background transparent)
rgba_arr = np.dstack([new_arr, np.full(r.shape, 255, dtype=np.float32)])
white_bg = (new_arr[:, :, 0] > 240) & (new_arr[:, :, 1] > 240) & (new_arr[:, :, 2] > 240)
rgba_arr[white_bg, 3] = 0

rgba_img = Image.fromarray(np.uint8(np.clip(rgba_arr, 0, 255)), "RGBA")
rgba_img.save(output_png, "PNG")

print("Recoloring complete!")
