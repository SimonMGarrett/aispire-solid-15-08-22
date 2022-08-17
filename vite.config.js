import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';

export default defineConfig({
  plugins: [
    solidPlugin(),
    solidSvg({
      // Default behavior when importing `.svg` files, possible options are: 'url' and `component`
      defaultExport: 'component',
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});

