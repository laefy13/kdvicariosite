import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Karlos Profile',
  description: 'Karlos Daniel C. Vicario profile',
  keywords: ['karlos', 'kdcv', 'daniel', 'vicario', 'karlos daniel', 'karlos daniel vicario'],
  authors: [{ name: 'Karlos Daniel C. Vicario' }],
  openGraph: {
    title: 'Karlos Profile',
    description: 'Karlos Daniel C. Vicario profile',
    siteName: 'Karlos Daniel C. Vicario profile',
    url: 'https://kdvicario.online/',
    images: [
      {
        url: 'https://kdvicario.blob.core.windows.net/img/grad.jpg',
        alt: 'Karlos Daniel C. Vicario',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karlos Profile',
    description: 'Karlos Daniel C. Vicario profile',
    images: ['https://kdvicario.blob.core.windows.net/img/grad.jpg'],
  },
  icons: {
    icon: '/static/kdvicario.ico',
    shortcut: '/static/kdvicario.ico',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
  },
  other: {
    bingbot: 'nocache',
  },
  metadataBase: new URL('https://kdvicario.online'),
};

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
