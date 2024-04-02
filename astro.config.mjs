import { defineConfig } from 'astro/config';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://poetic-blancmange-8263cf.netlify.app',
  integrations: [db()]
});