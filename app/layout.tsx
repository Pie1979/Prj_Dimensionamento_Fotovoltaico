import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SunSize – Calcola il tempo di rientro del fotovoltaico dalla tua bolletta',
  description:
    'Carica la bolletta e scopri in 60 secondi il tempo di rientro reale del fotovoltaico, con detrazione 50% e ricavo GSE. Gratis, privato, senza registrazione.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
