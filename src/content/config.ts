import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    role: z.string(),
    company: z.string().optional(),
    featured: z.boolean().default(false),
    duration: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects, experience };
