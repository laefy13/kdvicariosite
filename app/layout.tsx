import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/static/kdvicario.ico" />
      <title>Karlos Profile</title>
      <body>{children}</body>
    </html>
  );
}
