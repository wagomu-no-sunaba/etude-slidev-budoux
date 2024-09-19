import { defineConfig } from 'vite'
import '@slidev/cli'
import markdownItWordBreakStyle from './tools/markdown-it-word-break-style'

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
