'use client';

import { useState } from 'react';
import {
  Activity, DollarSign, Shield, GitCompare, AlertTriangle, Code2,
  Github, Copy, Check, Terminal,
} from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: "Live agent overview",
    description: "See every agent's status, last heartbeat, and total cost at a glance. Auto-refreshes so you never miss a spike.",
  },
  {
    icon: DollarSign,
    title: "Cost per heartbeat",
    description: "Drill into any heartbeat to see exactly which tool calls ate your budget. Token counts, cache hit rates, step-by-step breakdown.",
  },
  {
    icon: Shield,
    title: "Budget guardrails",
    description: "Set daily and monthly limits. Get visual warnings before your agents drain your wallet overnight.",
  },
  {
    icon: GitCompare,
    title: "Compare heartbeats",
    description: "Pick two heartbeats, see what changed. Context growth, cost delta, tool usage diff — side by side.",
  },
  {
    icon: AlertTriangle,
    title: "Waste detection",
    description: "Automatic hints when agents are re-reading files, making redundant API calls, or growing context unnecessarily.",
  },
  {
    icon: Code2,
    title: "Full REST API",
    description: "Every metric available programmatically. Build your own alerts, dashboards, or integrations on top.",
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const copyToClipboard = (text: string, setter: (v: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  };

  return (
    <div style={{ background: '#09090B', color: '#FAFAFA', minHeight: '100vh' }}>
      {/* NAV */}
      <nav style={{
        borderBottom: '1px solid #27272A',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        background: 'rgba(9, 9, 11, 0.9)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={20} color="#10B981" />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '16px' }}>
            OpenClaw Trace
          </span>
        </div>
        <a
          href="https://github.com/Tell-Me-Mo/openclaw-trace"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#10B981',
            color: '#09090B',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
          }}
        >
          <Github size={16} />
          View on GitHub
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        position: 'relative',
        padding: '120px 24px 100px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Grid pattern bg */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }} />
        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '100px',
            padding: '4px 12px',
            fontSize: '13px',
            color: '#10B981',
            fontFamily: 'var(--font-jetbrains-mono)',
            marginBottom: '32px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            Open source · MIT License
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            whiteSpace: 'pre-line',
          }}>
            {'Your agents are burning tokens.\nDo you know where?'}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#71717A',
            maxWidth: '560px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
            fontFamily: 'var(--font-instrument-sans)',
          }}>
            End-to-end tracing for OpenClaw. Track costs, debug heartbeats, catch waste — one command to start.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Primary CTA */}
            <a
              href="https://github.com/Tell-Me-Mo/openclaw-trace"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#10B981',
                color: '#09090B',
                padding: '14px 28px',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-space-grotesk)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.5)';
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              <Github size={18} />
              View on GitHub
            </a>

            {/* Secondary CTA — click to copy */}
            <button
              onClick={() => copyToClipboard('npx openclaw-trace', setCopied)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#18181B',
                border: '1px solid #27272A',
                color: '#10B981',
                padding: '14px 24px',
                borderRadius: '10px',
                fontSize: '15px',
                fontFamily: 'var(--font-jetbrains-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#10B981';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#27272A';
              }}
            >
              <span style={{ color: '#71717A' }}>$</span>
              npx openclaw-trace
              {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} color="#71717A" />}
            </button>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 700,
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          textAlign: 'center',
          marginBottom: '48px',
        }}>
          What it looks like
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          <div style={{
            background: '#18181B',
            border: '1px solid #27272A',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <img
              src="https://github.com/user-attachments/assets/3ccb1a4c-66a4-4ac3-af5a-651a3561f5ec"
              alt="OpenClaw Trace main dashboard showing agent overview and cost charts"
              style={{ width: '100%', display: 'block' }}
            />
            <div style={{ padding: '12px 16px', borderTop: '1px solid #27272A' }}>
              <p style={{ fontSize: '13px', color: '#71717A', fontFamily: 'var(--font-jetbrains-mono)' }}>
                Agent overview
              </p>
            </div>
          </div>
          <div style={{
            background: '#18181B',
            border: '1px solid #27272A',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <img
              src="https://github.com/user-attachments/assets/f0ee25ec-27d5-428f-b698-b9d1efd79104"
              alt="OpenClaw Trace heartbeat detail view with step-by-step breakdown"
              style={{ width: '100%', display: 'block' }}
            />
            <div style={{ padding: '12px 16px', borderTop: '1px solid #27272A' }}>
              <p style={{ fontSize: '13px', color: '#71717A', fontFamily: 'var(--font-jetbrains-mono)' }}>
                Heartbeat detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 700,
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          textAlign: 'center',
          marginBottom: '12px',
        }}>
          What you get
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#71717A',
          marginBottom: '48px',
          fontSize: '16px',
        }}>
          Everything you need to understand your agents.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className={`animate-fade-in-up animate-delay-${(i + 1) * 100}`}
                style={{
                  background: '#18181B',
                  border: '1px solid #27272A',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                  el.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                  el.style.borderColor = '#27272A';
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <Icon size={18} color="#10B981" />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 600,
                  fontSize: '15px',
                  marginBottom: '8px',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#71717A',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  fontFamily: 'var(--font-instrument-sans)',
                }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* INSTALL SECTION */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        borderTop: '1px solid #27272A',
        borderBottom: '1px solid #27272A',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            marginBottom: '12px',
          }}>
            One command. Everything visible.
          </h2>
          <p style={{ color: '#71717A', marginBottom: '40px', fontSize: '16px' }}>
            No config files. No sign-up. No cloud. Runs locally.
          </p>

          {/* Code block */}
          <div
            onClick={() => copyToClipboard('npx openclaw-trace', setCodeCopied)}
            style={{
              background: '#18181B',
              border: '1px solid #27272A',
              borderRadius: '12px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.2s',
              marginBottom: '48px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '#10B981';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '#27272A';
            }}
          >
            <span style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '16px' }}>
              <span style={{ color: '#71717A' }}>$ </span>
              <span style={{ color: '#10B981' }}>npx openclaw-trace</span>
            </span>
            <span style={{ color: '#71717A', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {codeCopied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
              {codeCopied ? 'Copied!' : 'Click to copy'}
            </span>
          </div>

          {/* Steps */}
          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {[
              { n: '1', title: 'Run the command', desc: 'Starts the trace collector' },
              { n: '2', title: 'Open localhost:3141', desc: 'Your observability dashboard' },
              { n: '3', title: 'See everything', desc: 'Costs, traces, heartbeats live' },
            ].map((step) => (
              <div key={step.n} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'left', maxWidth: '160px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#10B981',
                  fontFamily: 'var(--font-jetbrains-mono)',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  {step.n}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px', fontFamily: 'var(--font-space-grotesk)' }}>
                    {step.title}
                  </div>
                  <div style={{ color: '#71717A', fontSize: '13px' }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{
            borderLeft: '3px solid #10B981',
            paddingLeft: '24px',
            textAlign: 'left',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: '#A1A1AA',
            marginBottom: '16px',
          }}>
            &ldquo;I had no idea one of my agents was spending $8 per heartbeat until I ran openclaw-trace. Fixed it in ten minutes.&rdquo;
          </blockquote>
          <p style={{ color: '#52525B', fontSize: '14px', fontFamily: 'var(--font-jetbrains-mono)' }}>
            — OpenClaw user
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid #27272A',
        padding: '24px',
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
          <span style={{ color: '#3F3F46', marginLeft: '8px', fontSize: '13px' }}>
            Built by{' '}
            <a href="https://visieasy.com" style={{ color: '#71717A', textDecoration: 'none' }}>visieasy.com</a>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px', color: '#71717A' }}>
          <a
            href="https://github.com/Tell-Me-Mo/openclaw-trace"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#71717A', textDecoration: 'none' }}
          >
            <Github size={14} />
            GitHub
          </a>
          <span style={{ color: '#3F3F46' }}>&middot;</span>
          <span style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            color: '#10B981',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            fontFamily: 'var(--font-jetbrains-mono)',
          }}>MIT License</span>
          <span style={{ color: '#3F3F46' }}>&middot;</span>
          <a href="/privacy" style={{ color: '#71717A', textDecoration: 'none' }}>Privacy</a>
          <span style={{ color: '#3F3F46' }}>&middot;</span>
          <a href="/terms" style={{ color: '#71717A', textDecoration: 'none' }}>Terms</a>
        </div>
      </footer>
    </div>
  );
}
