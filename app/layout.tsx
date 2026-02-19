import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "OpenClaw Trace — See what your agents are actually doing",
  description:
    "Free observability dashboard for OpenClaw AI agents. Track costs, debug heartbeats, detect waste. One command: npx openclaw-trace.",
  alternates: { canonical: "https://oclawtrace.visieasy.com" },
  openGraph: {
    title: "OpenClaw Trace",
    description:
      "Free observability dashboard for OpenClaw AI agents. Track costs, debug heartbeats, detect waste. One command: npx openclaw-trace.",
    url: "https://oclawtrace.visieasy.com",
    siteName: "OpenClaw Trace",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Trace",
    description:
      "Free observability dashboard for OpenClaw AI agents. Track costs, debug heartbeats, detect waste.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "OpenClaw Trace",
    description:
      "Free observability dashboard for OpenClaw AI agents. Track costs, debug heartbeats, detect waste.",
    url: "https://oclawtrace.visieasy.com",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <GoogleAnalytics gaId="G-XHZ6T0YRK0" />
      </body>
    </html>
  );
}
