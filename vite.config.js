import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()], // Añadir el plugin de React
  resolve: {
    alias: [
      {
        // Resolución para soportar la sintaxis `~` en importaciones de SCSS
        find: /^~.+/,
        replacement: (val) => val.replace(/^~/, ''),
      },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/assets/scss') },
      { find: '@img', replacement: path.resolve(__dirname, 'src/assets/img') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utility/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/utility/hooks') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@context', replacement: path.resolve(__dirname, 'src/utility/context') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/component') }
    ],
  },
  server: {
    port: 8080, // Cambia este número por el puerto que desees
  }
});
