# Paul Manaay

A personal portfolio of ten websites, with a studio portrait, animated name, multilingual opening, image galleries and silent hover previews of each website.

Built with HTML, CSS and JavaScript. No dependencies or build step.

## Run locally

```sh
python3 -m http.server 8879
```

Open http://127.0.0.1:8879.

## Publish

GitHub Pages serves the root of the `main` branch. `.nojekyll` keeps this a plain static site. All project assets use relative paths, so the site works at a repository subpath or domain root.

## Content

Alródia Café, Triple Down, Moonshine, Super Seamoss, Nutrients93, Venture House, Ventura Tours 360, From Paul, Ventura Solutions and Alródia Jewellery.

The galleries use captures and recordings of the actual websites. The hero uses an AI-edited version of Paul’s supplied portrait. Videos have play/pause controls; reduced motion and touch/keyboard controls are supported.

Design references: [Dennis Snellenberg](https://dennissnellenberg.com/) for the spacious portrait and name treatment, and [eessoo](https://eessoo.co/) for the image-led work index. The implementation is original.

## Website offer

Share https://frompaulxam-gif.github.io/paul-manaay/offer/ to open this portfolio directly at the offer below the contact invitation. The offer describes a free website build and a £20 monthly service: £10 hosting and £10 maintenance/management.

After editing `index.html`, run `node scripts/build-offer.mjs .` to regenerate the matching nested route. Assets remain shared with the homepage. Both normal visits and direct offer visits play the greeting animation. Offer visits reveal the portrait homepage, pause briefly, then smoothly scroll to the offer. Choosing a link or scrolling manually cancels the automatic journey; reduced-motion visitors open directly at the offer.
