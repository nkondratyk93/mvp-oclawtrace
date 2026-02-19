import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — OpenClaw Trace',
  description: 'Terms of service for OpenClaw Trace.',
};

export default function TermsPage() {
  return (
    <div style={{ background: '#09090B', color: '#FAFAFA', minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#10B981', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-jetbrains-mono)' }}>
          &larr; Back to home
        </Link>

        <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '2rem', marginTop: '32px', marginBottom: '32px' }}>
          Terms of Service
        </h1>

        <div style={{ color: '#A1A1AA', lineHeight: 1.8, fontSize: '15px' }}>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: '#FAFAFA' }}>Last updated:</strong> February 2026
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            License
          </h2>
          <p style={{ marginBottom: '24px' }}>
            OpenClaw Trace is open-source software released under the MIT License. You are free to use, modify, and distribute it subject to the terms of that license.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Disclaimer of Warranties
          </h2>
          <p style={{ marginBottom: '24px' }}>
            OpenClaw Trace is provided &ldquo;as is&rdquo; without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. The authors and maintainers make no guarantees about the accuracy of cost calculations, trace completeness, or system compatibility.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Limitation of Liability
          </h2>
          <p style={{ marginBottom: '24px' }}>
            In no event shall the authors or maintainers be liable for any claim, damages, or other liability arising from the use of the software. You use OpenClaw Trace at your own risk.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Use at Your Own Risk
          </h2>
          <p style={{ marginBottom: '24px' }}>
            OpenClaw Trace monitors AI agent activity on your local machine. You are responsible for ensuring that your use of the tool complies with the terms of service of any AI providers you interact with.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Changes
          </h2>
          <p style={{ marginBottom: '24px' }}>
            We may update these terms from time to time. Changes will be posted on this page with an updated date.
          </p>

          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.1rem', color: '#FAFAFA', marginBottom: '12px', marginTop: '32px' }}>
            Contact
          </h2>
          <p style={{ marginBottom: '24px' }}>
            For questions about these terms, open an issue on our{' '}
            <a href="https://github.com/Tell-Me-Mo/openclaw-trace" target="_blank" rel="noopener noreferrer" style={{ color: '#10B981', textDecoration: 'none' }}>
              GitHub repository
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
