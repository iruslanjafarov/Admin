import {defineConfig} from 'vite'

import react from '@vitejs/plugin-react'

import autoprefixer from 'autoprefixer'

export default defineConfig({
    base: './',
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    },
    build: {
        minify: true,
        sourcemap: true
    },
    server: {
        host: '0.0.0.0',
        port: '8888',
        hmr: true
    },
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        },
    }
});