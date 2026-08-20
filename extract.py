import fitz
import os

pdf_path = "piviro landing page .pdf"
output_dir = "assets"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images()
    
    print(f"Page {page_index + 1}: Found {len(image_list)} images")
    
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        image_name = f"page{page_index + 1}_img{image_index}.{image_ext}"
        image_path = os.path.join(output_dir, image_name)
        
        with open(image_path, "wb") as f:
            f.write(image_bytes)
            
        print(f"Saved: {image_path}")

print("Extraction complete.")
