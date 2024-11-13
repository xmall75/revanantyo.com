"use client";

import { Box, Text, useColorModeValue } from "@chakra-ui/react";

import { gradientBrown, gradientMagenta } from "@/constants/gradient_color";

const HeroMainText = () => {
  const textColor = useColorModeValue(gradientBrown, gradientMagenta);

  return (
    <>
      <Box zIndex={1}>
        <Text
          as="span"
          lineHeight="80%"
          p={0}
          fontWeight="bold"
          fontSize={{
            base: "2xl",
            lg: "9xl",
          }}
          bgGradient={textColor}
          backgroundClip="text"
          ml={-2}
        >
          FULLSTACK
        </Text>
      </Box>
      <Box
        display="inline-flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex={1}
      >
        <Box
          fontSize="4xl"
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
            base: "2xl",
            lg: "9xl",
          }}
        >
          ENGINEER
        </Text>
      </Box>
    </>
  );
};

export default HeroMainText;
