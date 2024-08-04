import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import mdx from '@astrojs/mdx';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { RehypePlugins } from "astro";

// https://docs.astro.build/en/guides/markdown-content/#extending-markdown-config-from-mdx
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://discord-md.vercel.app",
  trailingSlash: "never",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed"
    },
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: "wrap",
      content: {
        type: "element",
        tagName: "div",
        properties: {
          class: "anchor-link"
        }
      }
    }]] as RehypePlugins
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind(), mdx(), react()]
});