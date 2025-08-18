import { defineCollection, z } from "astro:content";

const project = defineCollection({
    type: "content",
    schema: z.object({
        metaContent: z.object({
            title: z.string(),
            description: z.string(),
            keywords: z.string().array(),
            heroImage: z.tuple([z.boolean(), z.string()]),
        }),
        techStack: z.string().array(),
        version: z.string(),
        createdAt: z.coerce.date(),
    }),
});

export const collections = { project };
