import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        isDraft: z.boolean(),
        title: z.string(),
        author: z.string().default("Анонимен"),
        publishDate: z.string().transform((str) => new Date(str)).default(new Date().toISOString())
    })
})

export const collections = {
    "blog": blogCollection
}
