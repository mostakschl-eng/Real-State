import os
import glob
import shutil

brain_dir = r"C:\Users\freef\.gemini\antigravity-ide\brain\e11949f4-fab5-4ce8-adb1-90f6d1eca661"
dest_public_dir = r"c:\Users\freef\Downloads\j&s web\public"
dest_services_dir = r"c:\Users\freef\Downloads\j&s web\public\images\services"

# Find files
hero_files = glob.glob(os.path.join(brain_dir, "hero_dhaka_*.png"))
arch_files = glob.glob(os.path.join(brain_dir, "service_architecture_dhaka_*.png"))
dev_files = glob.glob(os.path.join(brain_dir, "service_development_dhaka_*.png"))
adv_files = glob.glob(os.path.join(brain_dir, "service_advisory_dhaka_*.png"))
inv_files = glob.glob(os.path.join(brain_dir, "service_investment_dhaka_*.png"))

if hero_files:
    shutil.copy2(hero_files[0], os.path.join(dest_public_dir, "hero_villa.png"))
    print("Updated public/hero_villa.png with Dhaka version.")

if arch_files:
    shutil.copy2(arch_files[0], os.path.join(dest_services_dir, "service_architecture.png"))
    print("Updated service_architecture.png with Dhaka version.")

if dev_files:
    shutil.copy2(dev_files[0], os.path.join(dest_services_dir, "service_development.png"))
    print("Updated service_development.png with Dhaka version.")

if adv_files:
    shutil.copy2(adv_files[0], os.path.join(dest_services_dir, "service_advisory.png"))
    print("Updated service_advisory.png with Dhaka version.")

if inv_files:
    shutil.copy2(inv_files[0], os.path.join(dest_services_dir, "service_investment.png"))
    print("Updated service_investment.png with Dhaka version.")

print("Copy completed successfully.")
