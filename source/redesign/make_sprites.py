"""Cut the style-sheet ornaments and the cat into transparent PNG sprites.

    py source/redesign/make_sprites.py

Sources (D:/workbook): style_sheet.png (cloud, stars, botanicals), cat.png (the cat),
Transparent central illustration asset.png (title page art, copied as is).
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

HERE = Path(__file__).resolve().parent
OUT = HERE / "sprites"
WB = HERE.parents[2]          # D:/workbook
SHEET = WB / "style_sheet.png"


def key_out(img, box, scale=3, tol=34, largest=False):
    """Crop box from img, upscale, drop the paper background that touches the edge."""
    im = img.crop(box).resize(((box[2] - box[0]) * scale, (box[3] - box[1]) * scale), Image.LANCZOS)
    a = np.asarray(im.convert("RGB")).astype(float)
    h, w, _ = a.shape
    border = np.concatenate([a[0], a[-1], a[:, 0], a[:, -1]])
    bg = np.median(border, axis=0)
    dist = np.sqrt(((a - bg) ** 2).sum(axis=2))
    near = Image.fromarray(np.where(dist < tol, 255, 0).astype(np.uint8))
    # flood the background from every edge pixel that is background-like
    near = near.copy()
    for x in range(0, w, 4):
        for y in (0, h - 1):
            if near.getpixel((x, y)) == 255:
                ImageDraw.floodfill(near, (x, y), 128, thresh=0)
    for y in range(0, h, 4):
        for x in (0, w - 1):
            if near.getpixel((x, y)) == 255:
                ImageDraw.floodfill(near, (x, y), 128, thresh=0)
    outside = np.asarray(near) == 128
    band = np.asarray(Image.fromarray((outside * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(5))) > 0
    alpha = np.full((h, w), 255.0)
    alpha[outside] = 0
    edge = band & ~outside
    alpha[edge] = np.clip((dist[edge] - tol * 0.4) / (tol * 1.6) * 255, 0, 255)
    if largest:
        alpha[~largest_part(alpha > 0)] = 0
    solid = alpha > 128
    cut = [side for side, edge in (("top", solid[0]), ("bottom", solid[-1]), ("left", solid[:, 0]), ("right", solid[:, -1]))
           if edge.any()]
    if cut:
        print(f"  ! {box} touches the {', '.join(cut)} edge")
    rgba = np.dstack([a, alpha]).astype(np.uint8)
    out = Image.fromarray(rgba, "RGBA")
    return out.crop(out.getbbox())


def largest_part(mask):
    """Keep only the biggest connected blob (drops scraps of neighbouring tiles)."""
    lab = Image.fromarray((mask * 255).astype(np.uint8)).copy()
    best, best_n, n = None, 0, 0
    while True:
        left = np.argwhere(np.asarray(lab) == 255)
        if not len(left) or n > 200:
            break
        y, x = left[0]
        ImageDraw.floodfill(lab, (int(x), int(y)), 100, thresh=0)
        part = np.asarray(lab) == 100
        if part.sum() > best_n:
            best, best_n = part.copy(), part.sum()
        lab.paste(0, mask=Image.fromarray((part * 255).astype(np.uint8)))
        n += 1
    return best


def cat_peek():
    """The white cat from cat.png, head and shoulders, on transparent."""
    im = Image.open(WB / "cat.png").convert("RGB")
    a = np.asarray(im).astype(float)
    light = a.mean(axis=2)
    body = light > 150
    m = Image.fromarray((body * 255).astype(np.uint8))
    # fill eyes, nose and cheeks: everything not reachable from the border is part of the cat
    inv = Image.fromarray(((~body) * 255).astype(np.uint8)).copy()   # fromarray images are read-only for floodfill
    ImageDraw.floodfill(inv, (0, 0), 128, thresh=0)
    holes = np.asarray(inv) == 255
    mask = body | holes
    mask[:, :300] = False
    mask[:245] = False
    mask[600:] = False
    mask = largest_part(mask)                  # drop the star and the grass flecks
    # smooth the ragged crayon edge a little, then give the cat a thin paper-coloured sticker rim
    # so writing lines stop at her outline instead of showing through the flecks
    m = Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2.5))
    m = m.point(lambda v: 255 if v > 110 else 0).filter(ImageFilter.GaussianBlur(1))
    rim = m.filter(ImageFilter.MaxFilter(13)).filter(ImageFilter.GaussianBlur(1.5))
    rgb = a.copy()
    # warm the minty white towards the palette cream, keep the painted texture
    w = body & ~holes
    lum = rgb[w].mean(axis=1, keepdims=True) / 235.0
    rgb[w] = lum * np.array([252, 245, 232])  # palette cream, same brush texture
    cat = Image.fromarray(np.dstack([np.clip(rgb, 0, 255), np.asarray(m)]).astype(np.uint8), "RGBA")
    out = Image.new("RGBA", cat.size, (251, 246, 236, 0))
    out.putalpha(rim)
    out.alpha_composite(cat)
    return out.crop(out.getbbox())


def cat_panel():
    """cat.png with the green grass turned to the palette's slate and navy."""
    im = Image.open(WB / "cat.png").convert("RGB")
    hsv = np.asarray(im.convert("HSV")).astype(float)
    rgb = np.asarray(im).astype(float)
    h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]
    green = (h > 55) & (h < 120) & (s > 40)
    slate = np.array([103, 127, 148])          # #677F94
    shade = (v[green] / 255.0)[:, None]
    rgb[green] = slate * (0.55 + 0.75 * shade)
    body = (rgb.mean(axis=2) > 150) & ~green & (hsv[..., 0] > 100)   # the minty white cat, not the star
    rgb[body] = rgb[body].mean(axis=1, keepdims=True) / 235.0 * np.array([252, 245, 232])
    return Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8))


def main():
    OUT.mkdir(exist_ok=True)
    sheet = Image.open(SHEET).convert("RGB")
    sprites = {                 # box, background tolerance, keep only the biggest blob
        "cloud-swirl": ((1126, 38, 1486, 202), 34, True),
        "star-cream": ((1582, 37, 1682, 122), 14, True),
        "flower-star": ((1684, 34, 1788, 126), 34, True),
        "star-yellow": ((1582, 118, 1668, 194), 34, True),
        "sparkle": ((1700, 124, 1764, 194), 34, True),
        "botanical-a": ((1838, 42, 1994, 196), 34, True),   # the right bud ends at x 1987
        "botanical-b": ((1970, 44, 2084, 196), 34, True),
        "botanical-c": ((2078, 58, 2192, 196), 34, True),
        "botanicals": ((1838, 42, 2192, 196), 34, False),
    }
    for name, (box, tol, largest) in sprites.items():
        key_out(sheet, box, tol=tol, largest=largest).save(OUT / f"{name}.png")
    cat_peek().save(OUT / "cat-peek.png")
    cat_panel().save(OUT / "cat-panel.png")
    Image.open(WB / "Transparent central illustration asset.png").save(OUT / "hero.png")
    for p in sorted(OUT.glob("*.png")):
        print(p.name, Image.open(p).size)


if __name__ == "__main__":
    main()
