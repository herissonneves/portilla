import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import '../css/theme/light.css';
import '../css/theme/light-mc.css';
import '../css/theme/light-hc.css';
import '../css/theme/dark.css';
import '../css/theme/dark-mc.css';
import '../css/theme/dark-hc.css';
import '../css/index.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://herissonneves.github.io/portilla';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'portilla - Professional Portfolio',
    template: '%s | portilla',
  },
  description:
    'Herisson Neves - Professional IT Developer Portfolio. Material Design 3, BEM CSS, and multi-language support.',
  keywords: [
    'portfolio',
    'web developer',
    'IT',
    'Next.js',
    'React',
    'Material Design 3',
    'BEM CSS',
  ],
  authors: [{ name: 'Herisson Neves' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Portilla - Herisson Neves Portfolio',
    description:
      'Professional IT Developer Portfolio with Material Design 3 and multi-language support',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portilla - Herisson Neves Portfolio',
    description:
      'Professional IT Developer Portfolio with Material Design 3 and multi-language support',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} light`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
