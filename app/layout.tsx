import type { Metadata, Viewport } from 'next';
import './globals.css';

const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProductionHost
    ? `https://${vercelProductionHost}`
    : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'The Growing Edit — Coming Soon',
  description: 'The Growing Edit is coming soon.',
  applicationName: 'The Growing Edit',
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'The Growing Edit — Coming Soon',
    description: 'The Growing Edit is coming soon.',
    type: 'website',
    siteName: 'The Growing Edit',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'The Growing Edit — Coming Soon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Growing Edit — Coming Soon',
    description: 'The Growing Edit is coming soon.',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f4f0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
