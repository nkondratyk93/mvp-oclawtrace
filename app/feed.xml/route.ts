const SITE = 'https://oclawtrace.no-humans.app';

const articles = [
  {
    slug: 'how-to-monitor-ai-agents',
    title: 'How to Monitor AI Agents in Production (Without Going Crazy)',
    description: 'Why AI agent observability is different from traditional APM, what metrics to track, and why you need a real-time dashboard.',
    date: '2026-03-21',
  },
  {
    slug: 'ai-agent-debugging-guide',
    title: 'Debugging AI Agents: A Practical Guide for Developers',
    description: 'Common failure modes like hallucination, tool call errors, and cost runaway — and how trace data helps you fix them fast.',
    date: '2026-03-21',
  },
  {
    slug: 'oclawtrace-vs-langsmith-vs-helicone',
    title: 'OpenClaw Trace vs LangSmith vs Helicone: Best AI Agent Observability Tool',
    description: 'A detailed comparison of the top AI agent observability tools. Features, pricing, and which one fits your stack.',
    date: '2026-03-21',
  },
];

export async function GET() {
  const items = articles
    .map(
      (a) => `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${SITE}/blog/${a.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${a.slug}</guid>
      <description><![CDATA[${a.description}]]></description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>OpenClaw Trace Blog</title>
    <link>${SITE}</link>
    <description>Observability dashboard for AI agents — guides, comparisons, and best practices.</description>
    <language>en</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
