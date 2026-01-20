import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            // Nuxt now looks in /content/blog/ automatically
            source: 'blog/**'
        })
    }
})