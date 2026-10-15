# alejojauregui.github.io

Personal portfolio of **Alejandro "Alejo" Jáuregui**: Enterprise Architect in banking, Master's in Video Game Design and Development, and creator of *Gamer's Cuts*. Published with GitHub Pages at <https://alejojauregui.github.io>.

Static site, no build step and no dependencies: HTML, CSS and vanilla JavaScript.

| Path | What |
|---|---|
| `index.html` | The page. Spanish text lives in the HTML; English is in `assets/js/site.js` (`EN`), switched with the ES/EN button |
| `assets/js/links.js` | Public links (YouTube, Twitch, X) and the contact email. A `null` link shows as "coming soon" |
| `assets/js/site.js` | Language switch, protected email (assembled on click so scrapers don't read it), hero aura, scroll reveals |
| `assets/css/site.css` | Styles: brand colors, Tektur titles, responsive layout |
| `assets/video/` | Web encodes (720p) of the Gamer's Cuts intros |
| `404.html` | "Alas, poor Yorick!" |

## Editing

- **Add a channel link:** paste the URL in `assets/js/links.js`.
- **Add a project:** copy an `<article class="project">` block in `index.html` and add its English strings to `EN` in `site.js` (same `data-i18n` keys).
- **Preview locally:** open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit <http://localhost:8000>.

Only verifiable facts go here (LinkedIn profile and credential IDs).

## Credits

Logo and characters © Alejo Jáuregui. Fonts: [Tektur](https://fonts.google.com/specimen/Tektur) and [Inter](https://fonts.google.com/specimen/Inter) (SIL Open Font License). Icons from [Iconify](https://iconify.design): Simple Icons (CC0) and Material Design Icons (Apache 2.0), inlined in the HTML so the site makes no third-party requests.
