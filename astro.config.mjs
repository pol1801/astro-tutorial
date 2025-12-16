// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial-lemon.vercel.app/",

  vite: {
  server: {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    }
  }
},

  integrations: [preact()]
});