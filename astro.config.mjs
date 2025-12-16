// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
    server: {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      }
    }
  }
});
