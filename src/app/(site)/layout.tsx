import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import useGetColorMode from "@/hooks/useGetColorMode";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revanantyo Dwigantara",
  description: "A Software Engineer specializing in React and Next.js.",
  keywords: ["revanantyo", "dwigantara", "revanantyo dwigantara"],
  authors: [{ name: "Revanantyo Dwigantara" }],
  metadataBase: new URL("https://revanantyo.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revanantyo.com",
    title: "Revanantyo Dwigantara",
    description: "A Software Engineer specializing in React and Next.js.",
    siteName: "Revanantyo Dwigantara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revanantyo Dwigantara",
    description: "A Software Engineer specializing in React and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorMode = useGetColorMode();

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <body
        className={`${inter.className} overflow-x-hidden chakra-ui-${colorMode}`}
      >
        <ScrollToTop />
        <Providers colorMode={colorMode}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
