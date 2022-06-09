/*eslint no-unused-vars: ["error", { "vars": "local", "args": "none", "caughtErrors": "none", "caughtErrorsIgnorePattern": "^ignore" }]*/

/* global resolve */
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const glob = require('fast-glob');
const path = require('path');

// Find all HTML files and build an object of names and paths to work from
const files = glob
  .sync(path.resolve(__dirname, '_site') + '/**/*.html')
  .reduce((acc, cur) => {
    let name = cur
      .replace(path.join(__dirname) + '/_site/', '')
      .replace('/index.html', '');
    // If name is blank, make up a name for it, like 'home'
    if (name === '') {
      name = 'home';
    }

    acc[name] = cur;
    return acc;
  }, {});

export default defineConfig({
  root: '_site',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: files,
    },
    emptyOutDir: true,
  },
  plugins: [
    VitePWA({
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: '11st-Starter-Kit',
        short_name: '11st-Starter-Kit',
        description: '11ty, powered by Vite with Tailwind CSS and Alpine.js.',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        theme_color: '#4a5568',
        background_color: '#fff',
        icons: [
          {
            src: 'pwa-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'htl.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'pwa-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'pwa-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'htl@2x.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'htl@4x.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'htl@5x.png',
            sizes: '480x480',
            type: 'image/png',
          },
          {
            src: 'htl@6x.png',
            sizes: '576x576',
            type: 'image/png',
          },
          {
            src: 'maskable_icon.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
