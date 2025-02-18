import type { StyleFunctionProps } from "@chakra-ui/react";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = (colorMode: StyleFunctionProps["colorMode"]) => {
  const config: ThemeConfig = {
    initialColorMode: colorMode,
    useSystemColorMode: false,
  };

  const colors = {
    dark: {
      50: "#e6e6e6",
      100: "#bfbfbf",
      200: "#999999",
      300: "#737373",
      400: "#4d4d4d",
      500: "#262626",
      600: "#1f1f1f",
      700: "#191919",
      800: "#0d0d0d",
      900: "#000000",
    },
    light: {
      50: "#ffffff",
      100: "#f2f2f2",
      200: "#e6e6e6",
      300: "#d9d9d9",
      400: "#cccccc",
      500: "#bfbfbf",
      600: "#a3a3a3",
      700: "#8c8c8c",
      800: "#737373",
      900: "#595959",
    },
    brownPrimary: {
      50: "#ffe8e0",
      100: "#ffceb8",
      200: "#ffb390",
      300: "#ff9970",
      400: "#ff7e50",
      500: "#FF8660",
      600: "#cc6b50",
      700: "#995040",
      800: "#663630",
      900: "#331b18",
    },
    brownSecondary: {
      50: "#ffe6de",
      100: "#ffccbb",
      200: "#ffb398",
      300: "#ff9975",
      400: "#ff8052",
      500: "#D5491D",
      600: "#b2391b",
      700: "#8f2a16",
      800: "#6b1e10",
      900: "#47110a",
    },
    bluePrimary: {
      50: "#e0f3ff",
      100: "#b3e1ff",
      200: "#85cfff",
      300: "#58bdff",
      400: "#2aaaff",
      500: "#5BADFF",
      600: "#1c87cc",
      700: "#146199",
      800: "#0d3c66",
      900: "#051733",
    },
    blueSecondary: {
      50: "#e0f1ff",
      100: "#b3daff",
      200: "#85c4ff",
      300: "#58adff",
      400: "#2a96ff",
      500: "#1373D1",
      600: "#105ba3",
      700: "#0c4475",
      800: "#082c47",
      900: "#04141a",
    },
    blueAccent: {
      50: "#e5d9ff",
      100: "#c5aaff",
      200: "#9e77ff",
      300: "#7b55ff",
      400: "#5a36ff",
      500: "#4833FF",
      600: "#3a2ecc",
      700: "#2e2499",
      800: "#231966",
      900: "#170f33",
    },
    pinkPrimary: {
      50: "#ffd3e8",
      100: "#ffaccf",
      200: "#ff7eb3",
      300: "#ff57a0",
      400: "#ff3495",
      500: "#FF6EB3",
      600: "#cc5b91",
      700: "#99476f",
      800: "#66334d",
      900: "#331a26",
    },
  };

  const styles = {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("light.50", "dark.600")(props),
        color: mode("dark.700", "light.200")(props),
      },
      "html *": {
        transition: "color, background-color 0.2s ease-out!important",
      },
    }),
  };

  const theme = extendTheme({
    config,
    colors,
    styles,
  });

  return theme;
};

export default theme;
