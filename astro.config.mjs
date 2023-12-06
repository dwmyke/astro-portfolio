import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config

export default defineConfig({
    site: 'https://poetic-blancmange-8263cf.netlify.app',
    integrations: [
        AstroPWA({
            mode: 'development',
            base: '/',
            scope: '/',
            includeAssets: ['favicon.svg'],
            registerType: 'autoUpdate',
            manifest: {
                name: "Mikel-Jon (Mike) West",
                short_name: "Mike West",
                description: "Mike West is a writer, director, video editor, graphic designer, and tech guy -- A modern renaissance man.",
                display: "minimal-ui",
                id: "/",
                start_url: "/",
                dir: "auto",
                lang: "en",
                theme_color: "#1d73f3",
                orientation: "any",
                background_color: "#17326b",
                related_applications: [],
                prefer_related_applications: false,
                display_override: [
                    "window-controls-overlay"
                  ],
                icons: [
                    {
                      src: "/icons/android-chrome-192x192.png",
                      sizes: "192x192",
                      type: "image/png",
                      purpose: "any"
                    },
                    {
                      src: "/icons/maskable-icon-192.png",
                      sizes: "192x192",
                      type: "image/png",
                      purpose: "maskable"
                    },
                    {
                      src: "/icons/android-chrome-512x512.png",
                      sizes: "512x512",
                      type: "image/png",
                      purpose: "any"
                    },
                    {
                      src: "/icons/maskable-icon-512.png",
                      sizes: "512x512",
                      type: "image/png",
                      purpose: "maskable"
                    }
                  ],
                  categories: [
                    "business",
                    "entertainment"
                  ]
            },
            workbox: {
              navigateFallback: '/404',
              globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
            },
            devOptions: {
              enabled: true,
              navigateFallbackAllowlist: [/^\//],
            },
            experimental: {
              directoryAndTrailingSlashHandler: true,
            }
          }),
    ],
});
