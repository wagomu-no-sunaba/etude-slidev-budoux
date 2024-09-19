import { defineConfig } from 'vite'
import '@slidev/cli'
import markdownItWordBreakStyle from './tools/markdown-it-budoux'

export default defineConfig({
  slidev: {
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(markdownItWordBreakStyle)
      },
    },
  },
})
