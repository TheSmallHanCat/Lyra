import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
//import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: './',
    build: {
        rollupOptions: {
            input: {
                //main: resolve(__dirname, 'public/index.html'),
                //start: resolve(__dirname, 'public/start.html'),
                main: ('index.html'),
                start: ('start.html'),
            },
        },
    },
    server: {
        port: 2805,
    }
})
