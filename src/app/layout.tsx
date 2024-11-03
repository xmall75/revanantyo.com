import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import useGetColorMode from "@/hooks/useGetColorMode";

import Navbar from "@/components/Navbar/Navbar";

import { Providers } from "./providers";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revanantyo Dwigantara",
  description:
    "A Frontend Engineer with a year of experience specializing in React and Next.js.",
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
        className={`${plusJakarta.className} overflow-x-hidden chakra-ui-${colorMode}`}
      >
        <Providers colorMode={colorMode}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
