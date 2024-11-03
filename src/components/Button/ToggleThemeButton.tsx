"use client";

import { Button, useColorMode } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? <IoMoon /> : <IoSunny />}
    </Button>
  );
};

export default ToggleThemeButton;
