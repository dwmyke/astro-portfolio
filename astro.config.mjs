import { defineConfig } from 'astro/config';
import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://poetic-blancmange-8263cf.netlify.app',
  integrations: [db()],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true
  }),
});