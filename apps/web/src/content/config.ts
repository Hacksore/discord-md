
import { z, defineCollection } from "astro:content";

const feature = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { feature };
