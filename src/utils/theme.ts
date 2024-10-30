import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const theme = (colorMode: "light" | "dark") => {
  const config: ThemeConfig = {
    initialColorMode: colorMode,
    useSystemColorMode: false,
  };

  const theme = extendTheme({
    config,
  });

  return theme;
};

export default theme;
