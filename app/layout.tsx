import { Providers } from '@/redux/provider';
import { GeistSans } from 'geist/font/sans'
import "@/styles/globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <html lang="en">
        <body className={GeistSans.className}>
          {children}
          </body>
      </html>
    </Providers>
  );
}