# Kristina Fotógrafa — Design System

Extracted from `style.css` and all HTML pages in this repository.

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--main` | `#FFEFE9` | Page background, header bg (95% opacity), mobile menu bg |
| `--blush` | `#F5D9CE` | Image placeholders, gallery card thumbs, popup background |
| `--dark` | `#1A1210` | Primary text, borders on interactive elements, footer background |
| `--muted` | `#9B8275` | Secondary text, nav links (default), labels, metadata |
| `--border` | `#EDD8CF` | Dividers, input borders, card borders, header border-bottom |
| `--white` | `#FFFFFF` | Pure white (rarely used directly) |

### Derived / Computed Colors

| Token | Value | Usage |
|-------|-------|-------|
| `color/text/body-warm` | `#3a2e2a` | Blog post body text |
| `color/text/about-body` | `#4a3833` | About page paragraph text |
| `color/state/error` | `#c0614a` | Password error, gallery load error |
| `color/overlay/dark-heavy` | `rgba(26,18,16,0.96)` | Lightbox backdrop |
| `color/overlay/dark-medium` | `rgba(26,18,16,0.55)` | Password modal backdrop |
| `color/overlay/dark-soft` | `rgba(26,18,16,0.28)` | Gallery card hover gradient |
| `color/overlay/dark-faint` | `rgba(26,18,16,0.08)` | Dropdown menu shadow |
| `color/overlay/header-bg` | `rgba(255,239,233,0.95)` | Fixed header (--main at 95%) |
| `color/overlay/contact-bg` | `rgba(255,255,255,0.5)` | Contact link row background |
| `color/overlay/contact-bg-hover` | `rgba(255,255,255,0.9)` | Contact link row hover |
| `color/footer/copy` | `rgba(255,255,255,0.3)` | Footer copyright text |
| `color/footer/link` | `rgba(255,255,255,0.5)` | Footer navigation links |
| `color/footer/link-hover` | `rgba(255,255,255,0.9)` | Footer link hover |

---

## Typography

### Font Families

| Token | Stack |
|-------|-------|
| `--font-serif` | `'Didot', 'GFS Didot', 'Bodoni MT', 'Playfair Display', Georgia, serif` |
| `--font-sans` | `'Raleway', sans-serif` |

> Both Raleway (300, 400, 500) and GFS Didot (400) are loaded from Google Fonts.

### Type Styles (complete list)

| Token | Family | Size | Weight | Line-height | Letter-spacing | Transform |
|-------|--------|------|--------|-------------|----------------|-----------|
| `type/heading/page-xl` | serif | clamp(30–52px, 4vw) | 400 | 1.12 | — | — |
| `type/heading/page-lg` | serif | clamp(30–50px, 3vw) | 400 | 1.12 | — | — |
| `type/heading/page-md` | serif | clamp(28–44px, 3vw) | 400 | 1.15 | — | — |
| `type/heading/blog-card` | serif | clamp(20–26px, 2vw) | 400 | 1.2 | — | — |
| `type/heading/post-title` | serif | clamp(32–52px, 4vw) | 400 | 1.1 | — | — |
| `type/heading/section` | serif | 22px | 400 | — | — | — |
| `type/heading/gallery-card` | serif | 18px | 400 | — | — | — |
| `type/heading/popup` | serif | 16px | 400 | — | — | — |
| `type/body/base` | sans | 16px | 300 | 1.7 | — | — |
| `type/body/post` | sans | 16px | 300 | 1.9 | — | — |
| `type/body/subtitle` | sans | 16px | 300 | 1.75 | — | — |
| `type/body/medium` | sans | 15px | 300 | 1.8–1.85 | — | — |
| `type/body/small` | sans | 14px | 300 | 1.7 | — | — |
| `type/body/xsmall` | sans | 13px | 300 | — | — | — |
| `type/body/xxsmall` | sans | 12px | 300 | — | 0.1em | — |
| `type/label/nav` | sans | 11px | 400 | — | 0.22em | uppercase |
| `type/label/section` | sans | 11px | 400 | — | 0.28em | uppercase |
| `type/label/meta` | sans | 11px | 400 | — | 0.18em | uppercase |
| `type/label/btn` | sans | 11px | 400 | — | 0.22em | uppercase |
| `type/label/micro` | sans | 10px | 400 | — | 0.2–0.28em | uppercase |
| `type/label/footnote` | sans | 12px | 400 | — | 0.1em | — |
| `type/interactive/contact-value` | serif | 20px | 400 | — | — | — |
| `type/interactive/password-input` | sans | 20px | 300 | — | 0.3em | — |
| `type/interactive/comment-name` | sans | 13px | 500 | — | 0.04em | uppercase |

---

## Spacing Scale

Extracted from layout values used across the site:

| Token | Value | Usage |
|-------|-------|-------|
| `spacing/1` | `1px` | Contact list gap |
| `spacing/2` | `2px` | card-info padding |
| `spacing/4` | `4px` | board-gap, hamburger gap, button padding |
| `spacing/5` | `5px` | hamburger span, post-gallery gap |
| `spacing/6` | `6px` | reshuffle-btn padding, back-btn gap |
| `spacing/7` | `7px` | session-tag padding-top |
| `spacing/8` | `8px` | gap in various flex rows, contact link gap |
| `spacing/10` | `10px` | input padding, card meta margin |
| `spacing/12` | `12px` | comment input padding, lightbox arrow padding |
| `spacing/13` | `13px` | lang-toggle padding |
| `spacing/14` | `14px` | gallery toolbar padding-y, session-tag padding-x |
| `spacing/16` | `16px` | comments item padding-left, footer gap |
| `spacing/18` | `18px` | section-label margin, post title margin |
| `spacing/20` | `20px` | comments-submit padding-x, contact link gap |
| `spacing/22` | `22px` | contact link padding-y, popup padding |
| `spacing/24` | `24px` | mobile menu item gap, credits list column gap |
| `spacing/28` | `28px` | pw-input margin, pw-info margin |
| `spacing/32` | `32px` | blog card gap, galleries grid gap (desktop) |
| `spacing/34` | `34px` | btn padding-x |
| `spacing/36` | `36px` | about grid gap (mobile) |
| `spacing/40` | `40px` | nav padding, nav-links gap, post-header padding-bottom |
| `spacing/44` | `44px` | pw-modal mobile padding |
| `spacing/48` | `48px` | footer padding, page horizontal padding |
| `spacing/52` | `52px` | pw-modal padding-top, logo height, lightbox controls |
| `spacing/56` | `56px` | page section margins, post-back margin |
| `spacing/64` | `64px` | blog-intro margin, galleries-intro margin |
| `spacing/72` | `72px` | page top padding |
| `spacing/76` | `76px` | nav-height (desktop, `--nav-h`) |
| `spacing/80` | `80px` | about/book page top padding |
| `spacing/100` | `100px` | page bottom padding |

---

## Breakpoints

| Token | Value | Behavior |
|-------|-------|----------|
| `breakpoint/tablet` | `900px` | Nav collapses to hamburger; gallery goes 2-col; `--nav-h` → 64px |
| `breakpoint/small` | `600px` | Comments row stacks to 1-col |
| `breakpoint/mobile` | `480px` | Gallery → 1-col; contact links stack; galleries → 1-col |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius/pill` | `100px` | Session/category tags |
| `radius/sm` | `3px` | Instagram/contact popup (`.kf-popup`) |
| `radius/none` | `0` | All other elements (buttons, modals, cards, inputs) |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow/dropdown` | `0 4px 20px rgba(26,18,16,0.08)` | Action dropdown menu |
| `shadow/popup` | `0 6px 36px rgba(26,18,16,0.13)` | Instagram/contact popup |

---

## Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `transition/fast` | `0.2s` | Color, background, border-color on hover states |
| `transition/btn` | `0.25s` | Button background/color fill |
| `transition/image-opacity` | `0.4s ease` | Image load fade-in |
| `transition/image-zoom` | `0.6s ease` | Image hover scale |
| `transition/gallery-reveal` | `0.5s ease` | Gallery board opacity on load |
| `transition/modal-slide` | `0.45s cubic-bezier(0.22, 1, 0.36, 1)` | Popup slide-in from bottom |

---

## Layout Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `layout/nav-height-desktop` | `76px` | `--nav-h` at ≥ 900px |
| `layout/nav-height-mobile` | `64px` | `--nav-h` at < 900px |
| `layout/board-gap` | `4px` | Gallery grid gap (`--board-gap`) |
| `layout/content-max-width` | `1100px` | About grid, galleries grid |
| `layout/post-max-width` | `780px` | Blog post content |
| `layout/book-max-width` | `580px` | Reservar page inner |
| `layout/blog-max-width` | `860px` | Blog list |
| `layout/modal-max-width` | `380px` | Password modal |
| `layout/gallery-columns-desktop` | `3` | Main gallery board |
| `layout/gallery-columns-tablet` | `2` | At < 900px |
| `layout/gallery-columns-mobile` | `1` | At < 480px |
| `layout/galleries-grid-desktop` | `3` | Client galleries page |
| `layout/galleries-grid-tablet` | `2` | At < 900px |
| `layout/galleries-grid-mobile` | `1` | At < 480px |

---

## JSON Tokens Block

```json
{
  "color": {
    "brand": {
      "main":   { "value": "#FFEFE9", "comment": "Page background, warm off-white blush" },
      "blush":  { "value": "#F5D9CE", "comment": "Image placeholders, popup background" },
      "dark":   { "value": "#1A1210", "comment": "Primary text, footer bg, interactive borders" },
      "muted":  { "value": "#9B8275", "comment": "Secondary text, nav links default, metadata" },
      "border": { "value": "#EDD8CF", "comment": "Dividers, card/input borders" },
      "white":  { "value": "#FFFFFF", "comment": "Pure white" }
    },
    "text": {
      "primary":      { "value": "#1A1210" },
      "secondary":    { "value": "#9B8275" },
      "body-warm":    { "value": "#3a2e2a", "comment": "Blog post body" },
      "about-body":   { "value": "#4a3833", "comment": "About page paragraphs" }
    },
    "state": {
      "error": { "value": "#c0614a" }
    },
    "overlay": {
      "dark-heavy":  { "value": "rgba(26,18,16,0.96)",  "comment": "Lightbox backdrop" },
      "dark-medium": { "value": "rgba(26,18,16,0.55)",  "comment": "Modal backdrop" },
      "dark-soft":   { "value": "rgba(26,18,16,0.28)",  "comment": "Gallery card gradient" },
      "dark-faint":  { "value": "rgba(26,18,16,0.08)",  "comment": "Dropdown shadow" },
      "header-bg":   { "value": "rgba(255,239,233,0.95)" },
      "contact-bg":  { "value": "rgba(255,255,255,0.50)" },
      "contact-bg-hover": { "value": "rgba(255,255,255,0.90)" }
    },
    "footer": {
      "copy":       { "value": "rgba(255,255,255,0.30)" },
      "link":       { "value": "rgba(255,255,255,0.50)" },
      "link-hover": { "value": "rgba(255,255,255,0.90)" }
    }
  },
  "typography": {
    "fontFamily": {
      "serif": { "value": "'Didot', 'GFS Didot', 'Bodoni MT', 'Playfair Display', Georgia, serif" },
      "sans":  { "value": "'Raleway', sans-serif" }
    },
    "fontSize": {
      "xxs":  { "value": "10px" },
      "xs":   { "value": "11px" },
      "sm":   { "value": "12px" },
      "sm2":  { "value": "12.5px" },
      "md-":  { "value": "13px" },
      "md":   { "value": "14px" },
      "md+":  { "value": "15px" },
      "base": { "value": "16px" },
      "lg":   { "value": "18px" },
      "xl":   { "value": "20px" },
      "2xl":  { "value": "22px" },
      "3xl":  { "value": "clamp(20px, 2vw, 26px)" },
      "4xl":  { "value": "clamp(28px, 3vw, 44px)" },
      "5xl":  { "value": "clamp(30px, 3vw, 50px)" },
      "6xl":  { "value": "clamp(30px, 4vw, 52px)" },
      "7xl":  { "value": "clamp(32px, 4vw, 52px)" }
    },
    "fontWeight": {
      "light":   { "value": "300" },
      "regular": { "value": "400" },
      "medium":  { "value": "500" }
    },
    "lineHeight": {
      "tight":   { "value": "1.1" },
      "tight2":  { "value": "1.12" },
      "snug":    { "value": "1.15" },
      "snug2":   { "value": "1.2" },
      "normal":  { "value": "1.6" },
      "relaxed": { "value": "1.7" },
      "loose":   { "value": "1.75" },
      "loose2":  { "value": "1.8" },
      "loose3":  { "value": "1.85" },
      "airy":    { "value": "1.9" }
    },
    "letterSpacing": {
      "tight":  { "value": "0.04em" },
      "normal": { "value": "0.08em" },
      "wide":   { "value": "0.1em" },
      "wider":  { "value": "0.12em" },
      "widest": { "value": "0.14em" },
      "nav":    { "value": "0.18em" },
      "label":  { "value": "0.22em" },
      "caps":   { "value": "0.28em" },
      "pw":     { "value": "0.3em" }
    }
  },
  "spacing": {
    "1":   { "value": "1px" },
    "2":   { "value": "2px" },
    "4":   { "value": "4px" },
    "5":   { "value": "5px" },
    "6":   { "value": "6px" },
    "7":   { "value": "7px" },
    "8":   { "value": "8px" },
    "10":  { "value": "10px" },
    "12":  { "value": "12px" },
    "13":  { "value": "13px" },
    "14":  { "value": "14px" },
    "16":  { "value": "16px" },
    "18":  { "value": "18px" },
    "20":  { "value": "20px" },
    "22":  { "value": "22px" },
    "24":  { "value": "24px" },
    "28":  { "value": "28px" },
    "32":  { "value": "32px" },
    "34":  { "value": "34px" },
    "36":  { "value": "36px" },
    "40":  { "value": "40px" },
    "44":  { "value": "44px" },
    "48":  { "value": "48px" },
    "52":  { "value": "52px" },
    "56":  { "value": "56px" },
    "64":  { "value": "64px" },
    "72":  { "value": "72px" },
    "76":  { "value": "76px" },
    "80":  { "value": "80px" },
    "100": { "value": "100px" }
  },
  "borderRadius": {
    "none": { "value": "0px" },
    "sm":   { "value": "3px",   "comment": "kf-popup" },
    "pill": { "value": "100px", "comment": "session tags" }
  },
  "shadow": {
    "dropdown": { "value": "0 4px 20px rgba(26,18,16,0.08)" },
    "popup":    { "value": "0 6px 36px rgba(26,18,16,0.13)" }
  },
  "transition": {
    "fast":          { "value": "0.2s" },
    "btn":           { "value": "0.25s" },
    "image-opacity": { "value": "0.4s ease" },
    "image-zoom":    { "value": "0.6s ease" },
    "gallery":       { "value": "0.5s ease" },
    "modal-slide":   { "value": "0.45s cubic-bezier(0.22, 1, 0.36, 1)" }
  },
  "breakpoint": {
    "tablet": { "value": "900px" },
    "small":  { "value": "600px" },
    "mobile": { "value": "480px" }
  },
  "layout": {
    "nav-height-desktop":     { "value": "76px" },
    "nav-height-mobile":      { "value": "64px" },
    "board-gap":              { "value": "4px" },
    "content-max-width":      { "value": "1100px" },
    "post-max-width":         { "value": "780px" },
    "book-max-width":         { "value": "580px" },
    "blog-max-width":         { "value": "860px" },
    "modal-max-width":        { "value": "380px" }
  }
}
```
