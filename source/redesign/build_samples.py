"""Print the redesign sample pages to PDF and PNG.

    py source/redesign/build_samples.py
    py source/redesign/build_samples.py samples-hand.html   (into out/<name>/; a name in SETS gets the cover too)

  her cover (source/cover/8 Weeks of English - Cover 215x301mm.pdf, used as is) + samples.html
  -> out/redesign-samples.pdf, and out/N-name.png (150 dpi) for the pages made here
Needs: Chrome or Chromium (or its path in the CHROME variable), pip install pypdfium2 pypdf pillow;
sprites from make_sprites.py (committed in sprites/).
"""
import os
import shutil
import subprocess
import sys
from pathlib import Path

import pypdfium2 as pdfium
from pypdf import PdfReader, PdfWriter

HERE = Path(__file__).resolve().parent
OUT = HERE / "out"
CHROME = (os.environ.get("CHROME") or shutil.which("google-chrome") or shutil.which("chromium")
          or shutil.which("chromium-browser") or r"C:\Program Files\Google\Chrome\Application\chrome.exe")
COVER = HERE.parent / "cover" / "8 Weeks of English - Cover 215x301mm.pdf"
NAMES = ["cheat-sheet", "words-that-work", "day-1", "week-review"]
SETS = {"samples.html": NAMES, "samples-round.html": NAMES}


def navy_qr():
    """The week-1 QR from source/qr, drawn in the palette's ink navy."""
    svg = (HERE.parent / "qr" / "qr-w1.svg").read_text(encoding="utf-8")
    svg = svg.replace('fill="#000000"', 'fill="#26323D"')
    (HERE / "sprites" / "qr-w1.svg").write_text(svg, encoding="utf-8")


def main():
    html = HERE / (sys.argv[1] if len(sys.argv) > 1 else "samples.html")
    names = SETS.get(html.name)          # a full sample set: her cover first, named pages
    out = OUT if html.name == "samples.html" else OUT / html.stem
    out.mkdir(parents=True, exist_ok=True)
    navy_qr()
    pages = out / "pages.pdf"
    subprocess.run([str(CHROME), "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                    "--allow-file-access-from-files", "--virtual-time-budget=20000",
                    f"--print-to-pdf={pages}", html.as_uri()],
                   check=True, capture_output=True)
    doc = pdfium.PdfDocument(pages)
    for old in out.glob("*.png"):
        old.unlink()
    for i, page in enumerate(doc):
        name = names[i] if names and i < len(names) else html.stem
        png = out / f"{i + 1}-{name}.png"
        page.render(scale=150 / 72).to_pil().save(png)
        print(" ", png.name)
    doc.close()

    pdf = out / ("redesign-samples.pdf" if html.name == "samples.html" else f"{html.stem}.pdf")
    if not names:
        pages.replace(pdf)
        print(f"{pdf.name}: {len(list(out.glob('*.png')))} pages")
        return
    writer = PdfWriter()
    writer.append(PdfReader(COVER))
    writer.append(PdfReader(pages))
    with open(pdf, "wb") as f:
        writer.write(f)
    pages.unlink()
    print(f"{pdf.name}: cover + {len(writer.pages) - 1} pages")


if __name__ == "__main__":
    main()
