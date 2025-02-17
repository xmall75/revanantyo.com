"use client";

import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";

interface GradientTextProps extends TextProps {
  text: string;
  lightModeColor: string;
  darkModeColor: string;
}

const GradientText = ({
  text,
  lightModeColor,
  darkModeColor,
  ...props
}: GradientTextProps) => {
  const color = useColorModeValue(lightModeColor, darkModeColor);

  return (
    <Text
      bgGradient={color}
      backgroundClip="text"
      width="fit-content"
      {...props}
    >
      {text}
    </Text>
  );
};

export default GradientText;
