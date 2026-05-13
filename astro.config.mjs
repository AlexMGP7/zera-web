// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://AlexMGP7.github.io',
  base: '/zera-web',
  integrations: [react()]
});