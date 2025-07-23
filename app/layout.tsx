import '@/app/ui/global.css';
import Header from './component/header';
import Footer from './component/footer';

export const metadata = {
  title: 'Alega Transmissions | Industrial Couplings & Precision Engineering',
  description: 'Alega Transmissions specializes in high-performance industrial couplings, serving sectors like Automotive, Aerospace, Oil & Gas, Energy, and Industrial Automation.',
  keywords: 'Alega Transmissions, industrial couplings, gear couplings, precision engineering, Bangalore, manufacturing, automotive, aerospace, oil and gas, energy solutions',
  openGraph: {
    title: 'Alega Transmissions | Industrial Couplings & Precision Engineering',
    description:
      'Innovative and durable coupling solutions for automotive, aerospace, oil & gas, and industrial automation.',
    url: 'https://alegatransmissions.com', // replace with actual domain
    siteName: 'Alega Transmissions',
    images: [
      {
        url: '/alega-og-image.png', // place an Open Graph image in /public
        width: 1200,
        height: 630,
        alt: 'Alega Transmissions Industrial Couplings',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};
  
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-gray-300 via-white to-gray-100">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
