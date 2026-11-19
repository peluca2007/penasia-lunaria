import { defineConfig } from 'astro/config';

// Site estático: cada capítulo é uma página leve, sem JavaScript por padrão.
export default defineConfig({
  build: { format: 'directory' },
});
