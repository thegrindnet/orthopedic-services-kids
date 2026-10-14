# Orthopedic Services / Kids LLC

A responsive single-page website for personalized orthotic care in Las Cruces and Deming, New Mexico.

Tagline: **Personalized support. For every step.**

Built with React, Vite, JavaScript/JSX, and plain CSS. Custom class names follow classic BEM. Normalize.css 8.0.1 is included locally and imported first.

## Run locally

Install Node.js 24 LTS, then open a terminal in this project folder:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. To create the production website:

```bash
npm run lint
npm run build
npm run preview
```

Vite outputs the production build to `dist`, not `build`. `node_modules` is intentionally excluded from the download and will be created by `npm install`. The lockfile is included for reproducible `npm ci` installs.

## Edit content and images

- `src/utils/constants.js`: contact information, tagline, navigation, services, gallery, FAQs, and the reserved Facebook URL field.
- `src/components/`: one folder per component, with a JSX file and matching CSS file.
- `src/index.css`: shared colors, typography, button styles, focus states, and reduced-motion handling.
- `src/assets/images/`: local WebP assets from the supplied business card and location brochures.
- `public/favicon.png`: icon derived from the original hand logo.
- `index.html`: page title, description, language, favicon, and Open Graph metadata.

To activate the Facebook link, set `business.facebookUrl` to the exact Facebook page URL. Until then, it is omitted from the footer. No fake page or inactive link is shown.

The `Testimonials` component is ready for genuine reviews and renders nothing while `reviews` is empty. No patient reviews were supplied.

## GitHub Pages

Suggested repository name: `orthopedic-services-kids`.

Expected URL after you publish: https://thegrindnet.github.io/orthopedic-services-kids/

1. Create a new GitHub repository named `orthopedic-services-kids` under `thegrindnet`.
2. Put the **contents** of this project folder at the repository root. Include `.github/workflows/deploy.yml`, `package.json`, and `package-lock.json`. Do not upload `node_modules`.
3. Commit and push the files to the `main` branch using GitHub Desktop or your normal Git workflow.
4. Open the repository’s **Settings → Pages**. Under **Build and deployment**, select **GitHub Actions** as the source.
5. In **Actions**, run **Deploy website to GitHub Pages**, or push another commit to `main`.
6. Wait for both build and deploy jobs to finish. Open the published URL shown by GitHub.

The included workflow uses Node.js 24 LTS, runs `npm ci`, lint, and build, and publishes `dist` using GitHub Pages Actions. `base: "./"` keeps assets portable under the repository subdirectory. Do not upload `dist` manually or use a second `gh-pages` deployment process.

No repository was created, committed, pushed, or deployed as part of this delivery.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Assets and content notes

- The original hand logo was cropped from `business_card_front.jpg`; the same recognizable symbol is used for the favicon.
- Office, pediatric, and back-support photographs were cropped from `location_in_las_cruces_nm.jpg`.
- Leg- and knee-brace photographs were cropped from `location_in_deming_nm.jpg`.
- These sources were found in your existing `images(1).zip` business asset bundle. Images retain the original content; only cropping and WebP encoding were applied. They are brochure-resolution photographs, so fresh original photos would improve clarity.
- The bundle also contained an unrelated Tax Right Services flyer; it is not used.
- Current written instructions take priority over older flyer claims, turnaround estimates, alternate contacts, and insurer logos. Only the supplied Las Cruces address is presented as the office address; Deming is described as a service area.
- A portrait of Joe was not supplied. The About section introduces him using text and the existing logo.
- No additional images are required to run the project. Optional future improvements: a high-resolution logo, Joe’s portrait, newer office and product photographs, and the exact Facebook URL.
- No contact form or patient-data collection is included. Calls, email, and directions use real links.

## Structural reference

The current `main` branch of https://github.com/thegrindnet/mesilla_view_builders_website was inspected before implementation: commit `ef0a8dfb41a90e6ee070099a3ef4e15d3d8ea24e`.

The site follows its component-folder organization and centralized constants while using this business’s content, images, colors, and design direction. Added components support FAQs, insurance, footer, icons, and future genuine reviews.

## Verification and screenshots

See `docs/verification.md` for the checks performed. Desktop and mobile screenshots are included in `docs/`.

## Complete directory tree

```text
orthopedic-services-kids/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── verification.md
│   ├── website-desktop.png
│   └── website-mobile.png
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── brand-hands.webp
│   │       ├── custom-back-support.webp
│   │       ├── custom-leg-brace.webp
│   │       ├── knee-brace.webp
│   │       ├── las-cruces-office.webp
│   │       └── pediatric-brace.webp
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── App/
│   │   │   ├── App.css
│   │   │   └── App.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── Faq/
│   │   │   ├── Faq.css
│   │   │   └── Faq.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Gallery/
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   ├── Icon/
│   │   │   ├── Icon.css
│   │   │   └── Icon.jsx
│   │   ├── Insurance/
│   │   │   ├── Insurance.css
│   │   │   └── Insurance.jsx
│   │   ├── Navigation/
│   │   │   ├── Navigation.css
│   │   │   └── Navigation.jsx
│   │   ├── Services/
│   │   │   ├── Services.css
│   │   │   └── Services.jsx
│   │   └── Testimonials/
│   │       ├── Testimonials.css
│   │       └── Testimonials.jsx
│   ├── utils/
│   │   └── constants.js
│   ├── vendor/
│   │   └── normalize.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .nvmrc
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

`dist/` is generated by the production build; `node_modules/` is generated by installation.
