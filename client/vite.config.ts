import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '../dist/client'),
    emptyOutDir: true
  },
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const file = path.basename(filename).split('.')[0]
        const index = css.indexOf(`.${name}`)
        const line = css.substr(0, index).split(/[\r\n]/).length

        return `${file}_${name}_${line}`
      }
    }
  },
  plugins: [react(), tsconfigPaths()]
})
