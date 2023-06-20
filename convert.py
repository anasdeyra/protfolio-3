from PIL import Image
import os

def convert_to_webp_bulk(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)
    
    # Get a list of all PNG and JPG files in the input folder
    image_files = [file for file in os.listdir(input_folder) if file.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    # Convert each image to WebP format
    for image_file in image_files:
        input_path = os.path.join(input_folder, image_file)
        output_path = os.path.join(output_folder, os.path.splitext(image_file)[0] + ".webp")
        convert_to_webp(input_path, output_path)

def convert_to_webp(input_image_path, output_image_path):
    image = Image.open(input_image_path)
    image.save(output_image_path, "webp")

# Usage example:
convert_to_webp_bulk("./public/illustrations/", "./public/illustrations/webp")
