import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Redaktion'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Redaktion'),

    // Anbieter
    providerName: z.string(),
    rating: z.number().min(1).max(5),
    bonus: z.string(),
    category: z.enum(['cs2', 'casino', 'reward-apps']),
    affiliateSlug: z.string(),

    // Komponenten-Daten (optional)
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    ratingCategories: z.array(z.object({
      label: z.string(),
      score: z.number().min(1).max(5),
    })).optional(),

    // SEO / GEO
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog, reviews };
