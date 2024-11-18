import { Box, Text } from "@chakra-ui/react";

import GradientText from "@/components/GradientText";

import { gradientBrown, gradientMagenta } from "@/constants/gradient_color";

const HeroMainText = () => {
  return (
    <>
      <Box zIndex={1}>
        <GradientText
          as="span"
          lineHeight="80%"
          fontWeight="bold"
          fontSize={{
            base: "5xl",
            sm: "6xl",
            md: "8xl",
            xl: "9xl",
          }}
          ml={{
            base: -1,
            lg: -2,
          }}
          text="SOFTWARE"
          lightModeColor={gradientBrown}
          darkModeColor={gradientMagenta}
        />
      </Box>
      <Box
        display="inline-flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex={1}
      >
        <Box
          fontSize={{
            base: "sm",
            sm: "lg",
            md: "xl",
            lg: "2xl",
            xl: "4xl",
          }}
          fontWeight="semibold"
          display="flex"
          flexDirection="column"
        >
          <Text>REVANANTYO</Text>
          <Text>DWIGANTARA</Text>
        </Box>
        <Text
          lineHeight="80%"
          textAlign="right"
          fontWeight="bold"
          fontSize={{
            base: "5xl",
            sm: "6xl",
            md: "8xl",
            xl: "9xl",
          }}
        >
          ENGINEER
        </Text>
      </Box>
    </>
  );
};

export default HeroMainText;
