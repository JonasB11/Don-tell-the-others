import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Dont tell the others - Offizielle Website',
  description: 'Die offizielle Website der Band "Dont tell the others". Entdecke Tourtermine, die Bandmitglieder und Konzertfotos.',
  keywords: ['Band', 'Musik', 'Rock', 'Konzerte', 'Dont tell the others'],
  authors: [{ name: 'Dont tell the others' }],
  openGraph: {
    title: 'Dont tell the others - Offizielle Website',
    description: 'Die offizielle Website der Band "Dont tell the others"',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
