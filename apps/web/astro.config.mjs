import { defineConfig } from "astro/config";

// https://docs.astro.build/en/guides/markdown-content/#extending-markdown-config-from-mdx
export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
    rehypePlugins: [],
    gfm: true,
  },
});
