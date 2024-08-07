// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    releaseDate: z.date(),
    categories: z.array(z.string()),
    tags: z.array(z.string())
  })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'projects': projectsCollection,
};