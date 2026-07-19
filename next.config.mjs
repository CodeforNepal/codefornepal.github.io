import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export (parity with Jekyll's _site output) — deploys to GitHub Pages / Netlify.
  output: 'export',
  // Match Jekyll's directory-style URLs (e.g. /about/, /2017/04/slug/).
  trailingSlash: true,
  // The site uses raw <img> tags with onError fallbacks; skip the Image Optimization server.
  images: {
    unoptimized: true,
  },
  sassOptions: {
    // Reproduce Jekyll's sass_dir: _sass so agency.scss's bare imports
    // ("base/variables.scss", "bootstrap/scss/bootstrap.scss") resolve.
    includePaths: [path.join(process.cwd(), 'styles', '_sass')],
    // The vendored Bootstrap 4.5.2 SCSS uses legacy @import and math that Dart Sass warns about.
    quietDeps: true,
  },
};

export default nextConfig;
