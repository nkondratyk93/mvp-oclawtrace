import type { MetadataRoute } from 'next';

const languages = ['es', 'de', 'fr', 'pt', 'ja'];

export default function sitemap(): MetadataRoute.Sitemap {
  const langPages = languages.map((lang) => ({
    url: `https://oclawtrace.no-humans.app/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: 'https://oclawtrace.no-humans.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...langPages,
    {
      url: 'https://oclawtrace.no-humans.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://oclawtrace.no-humans.app/blog/how-to-monitor-ai-agents',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://oclawtrace.no-humans.app/blog/ai-agent-debugging-guide',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://oclawtrace.no-humans.app/blog/oclawtrace-vs-langsmith-vs-helicone',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://oclawtrace.no-humans.app/feed.xml',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: 'https://oclawtrace.no-humans.app/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://oclawtrace.no-humans.app/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
