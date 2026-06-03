import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://affiliate-site.michaelhardi97.workers.dev',
  integrations: [sitemap()],
  output: 'static',
});
