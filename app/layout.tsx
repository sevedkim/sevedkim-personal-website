import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/footer';
import Head from 'next/head';
import ExternalLinks from './components/ExternalLinks';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Seve Kim",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <ExternalLinks />
        <Analytics />
      </body>
    </html>
  )
}