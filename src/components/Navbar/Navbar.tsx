"use client";

import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

import { gradientBrown, gradientMagenta } from "@/constants/gradient_color";

import NavbarAvatar from "./NavbarAvatar";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuMobile from "./NavbarMenuMobile";
import ToggleThemeButton from "../Button/ToggleThemeButton";

const Navbar = () => {
  const { scrollY } = useScroll();

  const backgroundSize = useTransform(
    scrollY,
    [0, 150],
    ["100% 0px", "100% 8px"],
  );

  const backgroundColor = useTransform(
    scrollY,
    [0, 150],
    ["rgba(0, 0, 0, 0)", useColorModeValue("#FFFFFF", "#161513")],
  );

  const backgroundImage = useColorModeValue(gradientBrown, gradientMagenta);

  return (
    <Box
      as={motion.div}
      height={{
        base: 75,
        lg: 85,
      }}
      width="100%"
      position="fixed"
      zIndex={100}
      backgroundColor="transparent"
      backgroundImage={backgroundImage}
      style={{
        backgroundSize: backgroundSize,
        backgroundColor: backgroundColor,
      }}
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      transition="all 0.2s ease-out!important"
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
