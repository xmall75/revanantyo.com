"use client";

import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react";

import theme from "@/utils/theme";

export function Providers({
  children,
  colorMode,
}: Readonly<{
  children: React.ReactNode;
  colorMode: "light" | "dark";
}>) {
  return (
    <ChakraProvider
      colorModeManager={cookieStorageManager}
      theme={theme(colorMode)}
    >
      {children}
    </ChakraProvider>
  );
}
