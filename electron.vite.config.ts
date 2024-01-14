import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  main: {
    resolve: {
      alias: {
        '@src': resolve('src'),
        '@resources': resolve('resources')
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    resolve: {
      alias: {
        '@src': resolve('src'),
        '@resources': resolve('resources')
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@src': resolve('src'),
        '@resources': resolve('resource')
      }
    },
    plugins: [vue()],
    root: 'src/renderer/src/main'
  }
})
