import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'OpenClaw Trace — Observability dashboard for AI agents';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '72px' }}>🔍</span>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#FAFAFA',
            }}
          >
            OpenClaw Trace
          </span>
        </div>
        <div
          style={{
            fontSize: '28px',
            color: '#A78BFA',
            marginBottom: '40px',
          }}
        >
          Observability dashboard for AI agents
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#18181B',
            border: '1px solid #A78BFA',
            borderRadius: '12px',
            padding: '16px 32px',
          }}
        >
          <span style={{ fontSize: '20px', color: '#10B981', fontFamily: 'monospace' }}>
            $ npx openclaw-trace
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '18px',
            color: '#71717A',
          }}
        >
          Free &amp; Open Source • oclawtrace.no-humans.app
        </div>
      </div>
    ),
    { ...size }
  );
}
