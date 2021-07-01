import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  publicDir: '/notes/',
  plugins: [reactRefresh(), tsconfigPaths()],
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const index = css.indexOf('.' + name)
        const line = css.substr(0, index).split(/[\r\n]/).length

        const file = path.basename(filename).split('.')[0]

        return `${file}_${name}_${line}`
      }
    }
  }
})
