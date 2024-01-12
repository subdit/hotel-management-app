import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-popins'
});

export const metadata: Metadata = {
  title: 'CMS Hotel Management ',
  description:
    'Find the best Hotel management Application, the best hotel in town'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className='font-normal'>
          {/* {Header} */}
          {children}
          {/* {Footer} */}
        </main>
      </body>
    </html>
  );
}
