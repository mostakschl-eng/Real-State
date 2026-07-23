import os
import shutil
import glob

brain_dir = r"C:\Users\freef\.gemini\antigravity-ide\brain\ad5f76d5-fac2-41fb-b3cf-15f10356bf80"
dest_dir = r"c:\Users\freef\Downloads\j&s web\public\images\properties"

mapping = {
    "upcoming_avenue_dream": "upcoming_avenue_dream.png",
    "upcoming_avenue_castle": "upcoming_avenue_castle.png",
    "upcoming_avenue_crest": "upcoming_avenue_crest.png",
    "upcoming_avenue_serenade": "upcoming_avenue_serenade.png",
}

for prefix, target in mapping.items():
    matches = glob.glob(os.path.join(brain_dir, f"{prefix}_*.png"))
    if matches:
        src = matches[0]
        dst = os.path.join(dest_dir, target)
        shutil.copy2(src, dst)
        print(f"Copied {src} -> {dst}")
    else:
        print(f"No match for {prefix}")

print("Done copying generated images!")
