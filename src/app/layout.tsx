import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Guilherme Gonzalez | Software Engineer',
  description:
    'Software Engineer crafting responsive, intuitive, and visually compelling digital experiences with a passion for web technologies.',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
