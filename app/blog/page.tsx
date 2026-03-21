import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — OpenClaw Trace',
  description: 'Guides, tutorials, and insights on AI agent observability, debugging, and monitoring. Learn how to keep your agents running smoothly.',
  alternates: { canonical: 'https://oclawtrace.no-humans.app/blog' },
};

const articles = [
  {
    slug: 'how-to-monitor-ai-agents',
    title: 'How to Monitor AI Agents in Production (Without Going Crazy)',
    description: 'Why AI agent observability is different from traditional APM, what metrics to track, and why you need a real-time dashboard.',
    date: '2026-03-21',
    readTime: '5 min read',
  },
  {
    slug: 'ai-agent-debugging-guide',
    title: 'Debugging AI Agents: A Practical Guide for Developers',
    description: 'Common failure modes like hallucination, tool call errors, and cost runaway — and how trace data helps you fix them fast.',
    date: '2026-03-21',
    readTime: '5 min read',
  },
  {
    slug: 'oclawtrace-vs-langsmith-vs-helicone',
    title: 'OpenClaw Trace vs LangSmith vs Helicone: Best AI Agent Observability Tool',
    description: 'A detailed comparison of the top AI agent observability tools. Features, pricing, and which one fits your stack.',
    date: '2026-03-21',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <div style={{ background: '#09090B', color: '#FAFAFA', minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#10B981', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-jetbrains-mono)' }}>
          &larr; Back to home
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px', marginBottom: '16px' }}>
          <BookOpen size={28} color="#10B981" />
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '2rem' }}>
            Blog
          </h1>
        </div>
        <p style={{ color: '#A1A1AA', fontSize: '16px', marginBottom: '48px', lineHeight: 1.6 }}>
          Guides on AI agent observability, debugging, and monitoring. Everything you need to keep your agents running smoothly.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article style={{
                border: '1px solid #27272A',
                borderRadius: '12px',
                padding: '24px',
                transition: 'border-color 0.2s',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '13px', color: '#71717A', fontFamily: 'var(--font-jetbrains-mono)' }}>
                  <time>{article.date}</time>
                  <span>&middot;</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '8px', color: '#FAFAFA' }}>
                  {article.title}
                </h2>
                <p style={{ color: '#A1A1AA', fontSize: '15px', lineHeight: 1.6, marginBottom: '16px' }}>
                  {article.description}
                </p>
                <span style={{ color: '#10B981', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Read article <ArrowRight size={14} />
                </span>
              </article>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer style={{
          borderTop: '1px solid #27272A',
          marginTop: '64px',
          padding: '24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={16} color="#10B981" />
            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '14px' }}>
              OpenClaw Trace
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#71717A' }}>
            <a href="/" style={{ color: '#71717A', textDecoration: 'none' }}>Home</a>
            <span style={{ color: '#3F3F46' }}>&middot;</span>
            <a href="/blog" style={{ color: '#10B981', textDecoration: 'none' }}>Blog</a>
            <span style={{ color: '#3F3F46' }}>&middot;</span>
            <a href="/privacy" style={{ color: '#71717A', textDecoration: 'none' }}>Privacy</a>
            <span style={{ color: '#3F3F46' }}>&middot;</span>
            <a href="/terms" style={{ color: '#71717A', textDecoration: 'none' }}>Terms</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
