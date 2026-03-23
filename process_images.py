"""
Process professor images using Gemini API.
- Makes images clear and high quality
- Sets white background
- Professional posture/framing
- Preserves the exact face (no changes to facial features)

Usage:
    python process_images.py <GEMINI_API_KEY>
"""

import sys
import os
import time
import base64
from pathlib import Path
from typing import Optional

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Installing google-genai package...")
    os.system(f"{sys.executable} -m pip install google-genai Pillow")
    from google import genai
    from google.genai import types

from PIL import Image
import io

PUBLIC_DIR = Path(__file__).parent / "public"
OUTPUT_DIR = PUBLIC_DIR  # overwrite in place

PROFESSOR_IMAGES = [
    "suryawanshi.jpg",
    "chauhan.jpg",
    "ramnaresh.jpg",
    "chandel.jpg",
    "ravinder.jpg",
    "veena.jpg",
    "jarial.jpg",
    "bharatbhushan.jpg",
    "rahi.jpg",
    "amitkaul.jpg",
    "handa.jpg",
    "rajeshkumar.jpg",
    "bhartibakshi.jpg",
    "ramniwash.jpg",
    "chand.jpg",
    "vivek.jpg",
    "jiwanjot.jpg",
    "supriya.jpg",
    "pankajmishra.jpg",
    "sreeram.jpeg",
    "nishanth.jpg",
    "upasana.jpg",
]

EDIT_PROMPT = (
    "Edit this photo of a person. "
    "Do NOT change the person's face, facial features, skin tone, or identity in any way — "
    "the face must remain exactly as it is. "
    "Make the following changes only: "
    "1. Replace the background with a clean, plain white background. "
    "2. Enhance the image clarity and sharpness. "
    "3. Adjust the framing to a professional corporate headshot style (head and shoulders, centered). "
    "4. Apply professional studio-quality lighting. "
    "Keep the same person, same face, same expression. Only change background, lighting, and framing."
)


def load_image_bytes(path: Path) -> bytes:
    with open(path, "rb") as f:
        return f.read()


def save_result(image_data: bytes, output_path: Path):
    img = Image.open(io.BytesIO(image_data))
    img = img.convert("RGB")
    img.save(output_path, "JPEG", quality=95)
    print(f"  Saved: {output_path.name} ({img.size[0]}x{img.size[1]})")


def process_image(client: genai.Client, image_path: Path) -> Optional[bytes]:
    image_bytes = load_image_bytes(image_path)

    mime = "image/jpeg"
    if image_path.suffix.lower() == ".png":
        mime = "image/png"

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=[
                types.Part.from_bytes(data=image_bytes, mime_type=mime),
                EDIT_PROMPT,
            ],
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            ),
        )

        # Extract the generated image from the response
        if response.candidates:
            for part in response.candidates[0].content.parts:
                if part.inline_data and part.inline_data.mime_type.startswith("image/"):
                    return part.inline_data.data

        print(f"  Warning: No image returned for {image_path.name}")
        # Print any text response for debugging
        if response.text:
            print(f"  Response text: {response.text[:200]}")
        return None

    except Exception as e:
        print(f"  Error processing {image_path.name}: {e}")
        return None


def main():
    if len(sys.argv) < 2:
        print("Usage: python process_images.py <GEMINI_API_KEY>")
        sys.exit(1)

    api_key = sys.argv[1]
    client = genai.Client(api_key=api_key)

    print(f"Processing {len(PROFESSOR_IMAGES)} professor images...\n")

    success = 0
    failed = 0

    for filename in PROFESSOR_IMAGES:
        image_path = PUBLIC_DIR / filename
        if not image_path.exists():
            print(f"  Skipping {filename} (not found)")
            failed += 1
            continue

        print(f"Processing: {filename}")
        result = process_image(client, image_path)

        if result:
            output_path = OUTPUT_DIR / image_path.with_suffix(".jpg").name
            save_result(result, output_path)
            success += 1
        else:
            failed += 1

        # Rate limiting — Gemini has per-minute limits for image generation
        time.sleep(5)

    print(f"\nDone! {success} succeeded, {failed} failed.")


if __name__ == "__main__":
    main()
