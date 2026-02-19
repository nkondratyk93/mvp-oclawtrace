import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — OpenClaw Trace',
  description: 'Privacy policy for OpenClaw Trace.',
};

export default function PrivacyPage() {
  return (
    <div style={{ background: '#09090B', color: '#FAFAFA', minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#10B981', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-jetbrains-mono)' }}>
          &larr; Back to home
        </Link>

        <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '2rem', marginTop: '32px', marginBottom: '32px' }}>
          Privacy Policy
        </h1>

        <div style={{ color: '#A1A1AA', lineHeight: 1.8, fontSize: '15px' }}>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: '#FAFAFA' }}>Last updated:</strong> February 2026
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Data Collection
          </h2>
          <p style={{ marginBottom: '24px' }}>
            OpenClaw Trace runs entirely on your local machine. No agent data, traces, heartbeats, or cost information is sent to any external server. All data stays in your local environment.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Local Storage
          </h2>
          <p style={{ marginBottom: '24px' }}>
            The dashboard may use your browser&apos;s localStorage to persist UI preferences (such as theme settings or dashboard layout). This data never leaves your browser.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Analytics
          </h2>
          <p style={{ marginBottom: '24px' }}>
            This landing page (oclawtrace.visieasy.com) uses Google Analytics to collect anonymous usage statistics such as page views, referral sources, and general geographic region. No personally identifiable information is collected. The OpenClaw Trace tool itself does not include any analytics.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Third-Party Services
          </h2>
          <p style={{ marginBottom: '24px' }}>
            This landing page is hosted on Vercel. Vercel may collect standard web server logs (IP addresses, request timestamps). See{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#10B981', textDecoration: 'none' }}>
              Vercel&apos;s Privacy Policy
            </a>{' '}
            for details.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Contact
          </h2>
          <p style={{ marginBottom: '24px' }}>
            For privacy questions, open an issue on our{' '}
            <a href="https://github.com/Tell-Me-Mo/openclaw-trace" target="_blank" rel="noopener noreferrer" style={{ color: '#10B981', textDecoration: 'none' }}>
              GitHub repository
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
