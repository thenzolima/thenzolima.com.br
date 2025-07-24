import { defineCollection, z } from "astro:content";

const artigos = defineCollection({
    schema: ({image}) => z.object({
        title: z.string(),
        pubDate: z.string(),
        description: z.string(),
        heroImage: image(),
        draft: z.boolean().optional().default(false),
    })
});

export const collections = {
    artigos
};