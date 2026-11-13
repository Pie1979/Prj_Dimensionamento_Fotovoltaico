import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SunSize – Simula il tuo investimento nel fotovoltaico',
  description:
    'Stima produzione, autoconsumo, benefici e tempo di rientro del fotovoltaico. Dati e ipotesi modificabili, formule trasparenti, senza registrazione.',
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
