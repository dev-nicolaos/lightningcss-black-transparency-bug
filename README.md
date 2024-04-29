# LightningCSS Black Transparency Minification Bug

## Environment

Operating Systems Tested On: Windows 10 Enterprise 22H2, Fedora Linux 40

Node Version: 20.10.0

LightningCSS Version: 1.24.1

## Steps to Reproduce

- Clone this repo
- Run `npm ci` to install lightningcss
- Run `npm run bundle-css`

## Expected Outcome

All the custom properties in _bundled.css_ will have valid color values as specified in _main.css_

## Actual Outcome

Only the white transparency and red color are output correctly. All the black transparencies have the `0 0 0` before the `/` in the `color` function removed (e.g. `--Black-60:color(display-p3/.6);`) in _bundled.css_ making them impossible for the browser to render.

## Notes

I feel confident the issue is with the minifiying step. If you set `minify` to `false` in the call to `bundle` in _bundle.js_, the output values are valid.
