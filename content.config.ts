import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    data: defineCollection({
      type: 'data',
      source: 'data.yaml',
      schema: z.any()
    }),
    blog: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file inside the `content` directory
      source: 'blog/**',
    }),
    works: defineCollection({
      type: 'page',
      source: 'works/**',
    }),
    personal: defineCollection({
      type: 'page',
      source: 'personal/**',
    }),
  }
})
