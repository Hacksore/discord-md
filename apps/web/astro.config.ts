import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

// https://docs.astro.build/en/guides/markdown-content/#extending-markdown-config-from-mdx
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://discord-md.vercel.app",
  trailingSlash: "never",
  output: "static",
  markdown: {
    syntaxHighlight: "prism",
    rehypePlugins: [],
    gfm: true
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind()]
});