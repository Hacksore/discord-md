import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

// https://docs.astro.build/en/guides/markdown-content/#extending-markdown-config-from-mdx
export default defineConfig({
  site: "https://discord-md.vercel.app",
  trailingSlash: "never",
  output: "static",
  markdown: {
    syntaxHighlight: "prism",
    rehypePlugins: [],
    gfm: true,
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
