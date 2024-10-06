import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "MANIAC",
  description: "A Genaral Purpose Banking App For Everyone",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
