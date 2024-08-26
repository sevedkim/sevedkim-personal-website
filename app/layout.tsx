import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google';
import Footer from './components/footer'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Seve Kim",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          @layer utilities {
            .external-link::after {
              content: " \\2197";
              @apply inline-block ml-0.5 text-[0.8em];
            }
          }
        `}} />
      </head>
      <body className="font-mono bg-background text-gray-900 flex flex-col min-h-screen">
        <div className="[&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-turquoise flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}