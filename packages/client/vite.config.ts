import { visualizer } from 'rollup-plugin-visualizer'

import react from '@vitejs/plugin-react'
import * as path from 'path'
import { UserConfig } from 'vite'
import Checker from 'vite-plugin-checker'

const shouldAnalyze = process.env.ANALYZE

const config: UserConfig = {
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      context: path.resolve(__dirname, './src/context'),
      global: path.resolve(__dirname, './src/global'),
      hooks: path.resolve(__dirname, './src/hooks'),
      locales: path.resolve(__dirname, './src/locales'),
      pages: path.resolve(__dirname, './src/pages'),
      providers: path.resolve(__dirname, './src/providers'),
      routes: path.resolve(__dirname, './src/routes'),
      store: path.resolve(__dirname, './src/store'),
      service: path.resolve(__dirname, './src/service'),
      templates: path.resolve(__dirname, './src/templates'),
      types: path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, '../utils'),
      '@types': path.resolve(__dirname, '../types')
    }
  },
  build: {
    rollupOptions: {
      plugins: !!shouldAnalyze ? [visualizer({ open: true, filename: './bundle-size/bundle.html' })] : []
    },
    sourcemap: !!shouldAnalyze
  },
  plugins: [
    react(),
    Checker({
      typescript: true,
      overlay: true,
      eslint: {
        files: 'src',
        extensions: ['.ts', '.tsx']
      }
    })
  ]
}

const getConfig = () => config

export default getConfig
