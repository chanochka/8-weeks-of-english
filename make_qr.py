from pathlib import Path
import sys
try:
    import qrcode
except ImportError:
    raise SystemExit('Install once with: py -m pip install qrcode[pil]')

if len(sys.argv) < 2:
    print('Usage: py make_qr.py https://YOUR-SITE-URL/')
    raise SystemExit(2)
url=sys.argv[1].strip()
out=Path(__file__).with_name('workbook-qr.png')
qr=qrcode.QRCode(version=None,error_correction=qrcode.constants.ERROR_CORRECT_Q,box_size=12,border=4)
qr.add_data(url);qr.make(fit=True)
img=qr.make_image(fill_color='black',back_color='white')
img.save(out)
print(f'QR saved to: {out}')
print(f'QR target: {url}')
