import type { Metadata } from 'next';
import '@/app/ui/global.css';
import Header from './component/header';
import Footer from './component/footer';

const siteUrl = 'https://alegatransmissions.com';

const siteTitle =
  'Industrial Coupling Manufacturer in India | Alega Transmissions';

const siteDescription =
  'Alega Transmissions designs and manufactures precision-engineered industrial coupling solutions for reliable power transmission across diverse industrial applications.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: '%s | Alega Transmissions',
  },

  description: siteDescription,

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/favicon-alega.ico',
  },

  openGraph: {
    type: 'website',
    url: 'https://alegatransmissions.com/',
    siteName: 'Alega Transmissions',
    title: 'DRIVING INDUSTRIAL MOTION WITH CONFIDENCE',
    description:
      'Alega Transmissions designs and manufactures precision-engineered industrial coupling solutions for reliable power transmission across diverse industrial applications.',
    images: [
      {
        url: 'https://alegatransmissions.com/alega-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alega Transmissions industrial coupling solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/alega-og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}