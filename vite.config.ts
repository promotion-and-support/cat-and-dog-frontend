import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@lib': '/lib',
      '@app': '/src/components/app',
      '@client': '/src/app/common/client',
      '@server': '/src/app/common/server',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@constants': '/src/constants',
      '@hooks': '/src/hooks',
      '@router': '/src/router',
      '@services': '/src/services',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@views': '/src/views',
    },
  },
});
