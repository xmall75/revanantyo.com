"use client";

import {
  ChakraProvider,
  cookieStorageManager,
  StyleFunctionProps,
} from "@chakra-ui/react";

import theme from "@/utils/theme";

export function Providers({
  children,
  colorMode,
}: Readonly<{
  children: React.ReactNode;
  colorMode: StyleFunctionProps["colorMode"];
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
