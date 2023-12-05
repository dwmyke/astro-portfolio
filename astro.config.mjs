import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://mikewest.site',
    integrations: [AstroPWA()]
});
