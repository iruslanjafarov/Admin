import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import autoprefixer from 'autoprefixer'

const config = defineConfig({
    base: './',
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
})

export default config
