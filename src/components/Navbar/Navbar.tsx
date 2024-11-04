"use client";

import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import { gradientBlue, gradientBrown } from "@/constants/gradient_color";

import NavbarAvatar from "./NavbarAvatar";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuMobile from "./NavbarMenuMobile";
import ToggleThemeButton from "../Button/ToggleThemeButton";

const Navbar = () => {
  return (
    <Box
      height={{
        base: 75,
        lg: 85,
      }}
      width="100%"
      position="fixed"
      zIndex={100}
      backgroundColor="background"
      backgroundImage={useColorModeValue(gradientBrown, gradientBlue)}
      backgroundSize="100% 6px"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
    >
      <Flex
        mx="auto"
        height="100%"
        width={{
          base: "92%",
          sm: "90%",
          md: "80%",
          lg: "70%",
        }}
        justifyContent="space-between"
        justifyItems="center"
      >
        <NavbarAvatar />
        <NavbarMenu
          gap={{
            md: 5,
            lg: 7,
          }}
          display={{
            base: "none",
            md: "flex",
          }}
        />
        <Box
          my="auto"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <ToggleThemeButton />
        </Box>

        <NavbarMenuMobile />
      </Flex>
    </Box>
  );
};

export default Navbar;
