"use client";

import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor = useColorModeValue("dark.400", "light.600");
  const buttonColorHover = useColorModeValue(
    "brownPrimary.700",
    "blueAccent.500",
  );

  return (
    <Button
      onClick={toggleColorMode}
      background="transparent"
      borderWidth={1}
      borderColor={buttonColor}
      color={buttonColor}
      borderRadius="md"
      _hover={{
        color: buttonColorHover,
        borderColor: buttonColorHover,
      }}
      transition="all 0.1s ease-in-out!important"
    >
      {colorMode === "light" ? <IoMoon /> : <IoSunny />}
    </Button>
  );
};

export default ToggleThemeButton;
