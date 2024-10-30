import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import "./globals.css";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

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
  const cookieStore = cookies();
  const defaultTheme = "dark";
  const uiColorMode =
    (cookieStore.get("chakra-ui-color-mode")?.value as "light" | "dark") ||
    defaultTheme;

  return (
    <html
      lang="en"
      data-theme={uiColorMode}
      style={{ colorScheme: uiColorMode }}
    >
      <body
        className={`${inter.className} overflow-x-hidden chakra-ui-${uiColorMode}`}
      >
        <Providers colorMode={uiColorMode}>{children}</Providers>
      </body>
    </html>
  );
}
