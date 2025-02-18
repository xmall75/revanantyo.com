"use client";

import type { ButtonProps, LinkProps, TextProps } from "@chakra-ui/react";
import { Button, Text, useColorModeValue } from "@chakra-ui/react";

interface NavigationButtonProps {
  url: string;
  text: string;
  icon?: React.ReactNode;
  buttonProps?: ButtonProps & LinkProps;
  buttonHoverProps?: ButtonProps & LinkProps;
  textProps?: TextProps;
}

const NavigationButton = ({
  url,
  text,
  icon,
  buttonProps,
  buttonHoverProps,
  textProps,
}: NavigationButtonProps) => {
  const buttonTextColor = useColorModeValue(
    "brownPrimary.700",
    "blueAccent.500",
  );
  const buttonBackgroundColor = useColorModeValue("light.200", "dark.500");

  return (
    <Button
      as="a"
      href={url}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      _hover={{
        color: buttonTextColor,
        background: buttonBackgroundColor,
        ...buttonHoverProps,
      }}
      {...buttonProps}
    >
      {icon}
      <Text {...textProps}>{text}</Text>
    </Button>
  );
};

export default NavigationButton;
