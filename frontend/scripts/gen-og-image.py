"""
Generate the Open Graph share image for StayByRail.

Output: frontend/public/og-image.png (1200x630, sRGB PNG)

Re-run after brand tweaks:
    python frontend/scripts/gen-og-image.py
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# ---- Brand tokens (match frontend/src/styles/variables.css) ----
BG_DARK      = (15, 23, 42)       # #0f172a — bg-primary
BG_PANEL     = (30, 41, 59)       # #1e293b — bg-card
BLUE         = (37, 99, 235)      # #2563eb — brand blue
BLUE_LIGHT   = (14, 165, 233)     # #0ea5e9 — sky accent
AMBER        = (245, 158, 11)     # #f59e0b — rail accent
TEXT_HEADING = (248, 250, 252)    # #f8fafc
TEXT_SECOND  = (148, 163, 184)    # #94a3b8
TEXT_MUTED   = (100, 116, 139)    # #64748b

W, H = 1200, 630

ROOT      = Path(__file__).resolve().parents[2]
OUT_PATH  = ROOT / "frontend" / "public" / "og-image.png"

FONT_REG  = "C:/Windows/Fonts/segoeui.ttf"
FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"


def load(path, size):
    return ImageFont.truetype(path, size)


def draw_gradient(img):
    """Vertical gradient from slightly lifted top to base dark."""
    top    = (20, 30, 55)
    bottom = BG_DARK
    base = Image.new("RGB", (1, H))
    for y in range(H):
        t = y / (H - 1)
        r = int(top[0] * (1 - t) + bottom[0] * t)
        g = int(top[1] * (1 - t) + bottom[1] * t)
        b = int(top[2] * (1 - t) + bottom[2] * t)
        base.putpixel((0, y), (r, g, b))
    img.paste(base.resize((W, H)))


def draw_glow(img, cx, cy, radius, color, alpha=70):
    """Soft radial glow behind the icon."""
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    for i in range(10, 0, -1):
        r = radius * (i / 10)
        a = int(alpha * (1 - i / 10) ** 2)
        d.ellipse(
            [cx - r, cy - r, cx + r, cy + r],
            fill=(color[0], color[1], color[2], a),
        )
    img.alpha_composite(layer)


def draw_logo_icon(draw, x, y, scale=1.0):
    """Bed + rail track icon, scaled up from the SVG in public/logo.svg."""
    s = scale

    def px(v):
        return v * s

    # roof (triangle lines)
    roof_w = 5 * s
    draw.line(
        [(x + px(0), y + px(36)), (x + px(36), y + px(0)), (x + px(72), y + px(36))],
        fill=BLUE, width=int(roof_w), joint="curve",
    )
    # bed base
    draw.rounded_rectangle(
        [x + px(5), y + px(35), x + px(67), y + px(63)],
        radius=int(px(4)), fill=BLUE,
    )
    # pillow
    draw.rounded_rectangle(
        [x + px(12), y + px(40), x + px(28), y + px(52)],
        radius=int(px(3)), fill=BLUE_LIGHT,
    )
    # blanket highlight (semi-transparent on a layer)
    # (solid is fine at this size)
    draw.rounded_rectangle(
        [x + px(34), y + px(44), x + px(62), y + px(58)],
        radius=int(px(3)), fill=(80, 170, 220),
    )
    # bed legs
    draw.rounded_rectangle(
        [x + px(8), y + px(63), x + px(14), y + px(72)],
        radius=int(px(1)), fill=BLUE,
    )
    draw.rounded_rectangle(
        [x + px(58), y + px(63), x + px(64), y + px(72)],
        radius=int(px(1)), fill=BLUE,
    )

    # rail tracks (two parallel)
    y_rail_top = y + px(82)
    y_rail_bot = y + px(94)
    x_rail_l   = x + px(-6)
    x_rail_r   = x + px(78)
    draw.line([(x_rail_l, y_rail_top), (x_rail_r, y_rail_top)], fill=AMBER, width=int(px(3.5)))
    draw.line([(x_rail_l, y_rail_bot), (x_rail_r, y_rail_bot)], fill=AMBER, width=int(px(3.5)))

    # sleepers
    for i in range(7):
        sx = x_rail_l + (i * (x_rail_r - x_rail_l) / 6)
        draw.line(
            [(sx, y_rail_top - px(4)), (sx, y_rail_bot + px(4))],
            fill=AMBER, width=int(px(2.5)),
        )


def draw_rail_footer(draw):
    """A faint rail-track accent along the bottom of the canvas."""
    y1 = H - 54
    y2 = H - 34
    draw.line([(0, y1), (W, y1)], fill=(245, 158, 11, 255), width=3)
    draw.line([(0, y2), (W, y2)], fill=(245, 158, 11, 255), width=3)
    for sx in range(40, W, 60):
        draw.line([(sx, y1 - 8), (sx, y2 + 8)], fill=AMBER, width=2)


def main():
    img = Image.new("RGBA", (W, H), BG_DARK + (255,))
    base = Image.new("RGB", (W, H))
    draw_gradient(base)
    img.paste(base)

    # radial glow behind icon
    draw_glow(img, 200, 260, 260, BLUE, alpha=90)

    draw = ImageDraw.Draw(img, "RGBA")

    # --- Icon top-left ---
    icon_x, icon_y = 120, 180
    draw_logo_icon(draw, icon_x, icon_y, scale=1.9)

    # --- Wordmark ---
    f_title = load(FONT_BOLD, 108)
    f_tag   = load(FONT_REG, 44)
    f_meta  = load(FONT_REG, 32)
    f_url   = load(FONT_BOLD, 30)

    title_x = 300
    title_y = 170

    # "Stay" in white, "By" smaller slate, "Rail" in blue — mirrors the logo.
    stay_txt, by_txt, rail_txt = "Stay", "By", "Rail"
    stay_w = draw.textlength(stay_txt, font=f_title)
    f_by   = load(FONT_REG, 78)
    by_w   = draw.textlength(by_txt, font=f_by)
    rail_w = draw.textlength(rail_txt, font=f_title)

    draw.text((title_x, title_y), stay_txt, font=f_title, fill=TEXT_HEADING)
    draw.text((title_x + stay_w, title_y + 18), by_txt, font=f_by, fill=TEXT_SECOND)
    draw.text((title_x + stay_w + by_w, title_y), rail_txt, font=f_title, fill=BLUE)

    # --- Tagline ---
    tag_y = title_y + 150
    draw.text((title_x, tag_y), "Hotels Near Train Stations", font=f_tag, fill=TEXT_HEADING)

    # --- Meta line ---
    meta_y = tag_y + 70
    draw.text(
        (title_x, meta_y),
        "52 cities  \u00b7  6 countries  \u00b7  live price comparison",
        font=f_meta, fill=TEXT_SECOND,
    )

    # --- Rail footer ---
    draw_rail_footer(draw)

    # --- URL ---
    url_txt = "staybyrail.co.uk"
    url_w = draw.textlength(url_txt, font=f_url)
    draw.text((W - url_w - 60, H - 110), url_txt, font=f_url, fill=AMBER)

    # Flatten and save
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(OUT_PATH, "PNG", optimize=True)
    print(f"Wrote {OUT_PATH}  ({OUT_PATH.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
