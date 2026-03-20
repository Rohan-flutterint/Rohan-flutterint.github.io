# Portfolio Website

Static professional portfolio for Rohan Kumar Dubey, designed to deploy directly on GitHub Pages.

## Files

- `index.html` - main one-page portfolio
- `styles.css` - responsive visual design
- `script.js` - small reveal animations and footer date
- `favicon.svg` - monogram favicon for browser tabs
- `.nojekyll` - prevents Jekyll processing on GitHub Pages

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository for this portfolio.
2. Push these files to the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and the `/ (root)` folder.
6. Save and wait for the site to publish.

If you want the site at `username.github.io`, the repository name should be exactly `username.github.io`.

## Content source

The content in this portfolio was structured from the LinkedIn profile PDF provided in `/Users/dubeyroh/Downloads/Profile.pdf`.
