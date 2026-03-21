import type { Metadata } from 'next';
import { translations, languages, type Lang } from './translations';

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Lang];
  if (!t) return {};

  const alternates: Record<string, string> = {
    'x-default': 'https://oclawtrace.no-humans.app',
    en: 'https://oclawtrace.no-humans.app',
  };
  for (const l of languages) {
    alternates[l] = `https://oclawtrace.no-humans.app/${l}`;
  }

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `https://oclawtrace.no-humans.app/${lang}`,
      languages: alternates,
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `https://oclawtrace.no-humans.app/${lang}`,
      siteName: 'OpenClaw Trace',
      type: 'website',
    },
  };
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return children;
}
