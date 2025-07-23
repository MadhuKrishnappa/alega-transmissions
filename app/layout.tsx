import '@/app/ui/global.css';
import Header from './component/header';
import Footer from './component/footer';


export const metadata = { title: 'Alega Transmissions', description: 'Industrial Solutions' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-gray-300 via-white to-gray-100'>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
