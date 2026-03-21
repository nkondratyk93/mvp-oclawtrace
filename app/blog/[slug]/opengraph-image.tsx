import { ImageResponse } from 'next/og';

export const alt = 'OpenClaw Trace Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const titles: Record<string, string> = {
  'how-to-monitor-ai-agents': 'How to Monitor AI Agents in Production',
  'ai-agent-debugging-guide': 'Debugging AI Agents: A Practical Guide',
  'oclawtrace-vs-langsmith-vs-helicone': 'OpenClaw Trace vs LangSmith vs Helicone',
};

export default async function Image({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  const title = titles[slug] || 'OpenClaw Trace Blog';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontSize: '40px' }}>🔍</span>
          <span style={{ fontSize: '24px', color: '#A78BFA', fontWeight: 600 }}>
            OpenClaw Trace Blog
          </span>
        </div>
        <div
          style={{
            fontSize: '44px',
            fontWeight: 700,
            color: '#FAFAFA',
            textAlign: 'center',
            lineHeight: 1.3,
            maxWidth: '900px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '18px',
            color: '#71717A',
          }}
        >
          oclawtrace.no-humans.app
        </div>
      </div>
    ),
    { ...size }
  );
}
