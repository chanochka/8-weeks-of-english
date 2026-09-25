"""Build both editions of 8 Weeks of English from the base PDFs and the word bank.

    py source/build.py

  print edition  base/print-87.pdf + one essentials page per week
                 -> print/8-weeks-of-english-print.pdf
  full edition   base/full-106.pdf + two pages per week + answer key
                 -> 8-weeks-of-english-full.pdf (the file the site serves)

The word bank itself lives in words-data.js at the repo root, shared with words.html.
Needs: Chrome, py -m pip install qrcode pypdf
"""
import subprocess
from pathlib import Path

import qrcode
import qrcode.image.svg
from pypdf import PdfReader, PdfWriter

SRC = Path(__file__).resolve().parent
ROOT = SRC.parent
BUILD = SRC / "build"
SITE = "https://chanochka.github.io/8-weeks-of-english"
CHROME = Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe")

PRINT_BASE = SRC / "base" / "print-87.pdf"
FULL_BASE = SRC / "base" / "full-106.pdf"
PRINT_OUT = ROOT / "print" / "8-weeks-of-english-print.pdf"
FULL_OUT = ROOT / "8-weeks-of-english-full.pdf"

# 0-based index of each week's grammar cheat sheet; the week's pages go straight after it.
PRINT_CHEAT = [4 + 10 * (n - 1) for n in range(1, 9)]    # print pages 5, 15 ... 75
FULL_CHEAT = [6 + 12 * (n - 1) for n in range(1, 9)]     # full pages 7, 19 ... 91
FULL_KEY_AFTER = 102                                      # after "Day 1 vs Day 56" (page 103)


def make_qr():
    out = SRC / "qr"
    out.mkdir(exist_ok=True)
    for n in range(1, 9):
        qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_Q, border=1,
                           image_factory=qrcode.image.svg.SvgPathImage)
        qr.add_data(f"{SITE}/words.html?week={n}")
        qr.make(fit=True)
        qr.make_image().save(out / f"qr-w{n}.svg")
    # The hub QR for the start page / cover of the print edition.
    hub = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_Q, border=2, box_size=12)
    hub.add_data(f"{SITE}/")
    hub.make(fit=True)
    hub.make_image(fill_color="black", back_color="white").save(out / "qr-hub.png")


def chrome_pdf(query, out):
    url = (SRC / "inserts.html").as_uri() + query
    subprocess.run([str(CHROME), "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                    "--allow-file-access-from-files", "--virtual-time-budget=15000",
                    f"--print-to-pdf={out}", url], check=True, capture_output=True)
    return PdfReader(out)


def merge(base, inserts_after, out, title):
    book = PdfReader(base)
    writer = PdfWriter()
    for i, page in enumerate(book.pages):
        writer.add_page(page)
        for extra in inserts_after.get(i, []):
            writer.add_page(extra)
    writer.add_metadata({"/Title": title})
    out.parent.mkdir(exist_ok=True)
    with open(out, "wb") as f:
        writer.write(f)
    return len(writer.pages)


def main():
    BUILD.mkdir(exist_ok=True)
    make_qr()

    ins = chrome_pdf("?mode=print", BUILD / "inserts-print.pdf").pages
    assert len(ins) == 8, len(ins)
    total = merge(PRINT_BASE, {c: [ins[n]] for n, c in enumerate(PRINT_CHEAT)}, PRINT_OUT,
                  "8 Weeks of English — print edition")
    print(f"print: {total} pages -> {PRINT_OUT.relative_to(ROOT)}")

    key_page = FULL_KEY_AFTER + 1 + 2 * 8 + 1          # 1-based page of the answer key
    ins = chrome_pdf(f"?mode=full&key={key_page}", BUILD / "inserts-full.pdf").pages
    assert len(ins) == 17, len(ins)
    after = {c: [ins[2 * n], ins[2 * n + 1]] for n, c in enumerate(FULL_CHEAT)}
    after[FULL_KEY_AFTER] = [ins[16]]
    total = merge(FULL_BASE, after, FULL_OUT, "8 Weeks of English — full edition")
    print(f"full: {total} pages -> {FULL_OUT.relative_to(ROOT)}, answer key on page {key_page}")
    for n in range(1, 9):
        opener = 6 + 14 * (n - 1)
        print(f"  week {n}: opener {opener}, word bank {opener + 2}, writing {opener + 11}")


if __name__ == "__main__":
    main()
