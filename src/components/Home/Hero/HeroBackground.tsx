"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroBackground = () => {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 400],
    ["rgba(0, 0, 0, 0)", useColorModeValue("#FFFFFF", "#161513")],
  );

  const heroBackground = useColorModeValue(
    "/background/hero/light-hero.webm",
    "/background/hero/dark-hero.webm",
  );

  return (
    <>
      <Box
        as={motion.div}
        style={{
          backgroundColor,
        }}
        width="100%"
        height="200vh"
        position="absolute"
        zIndex={0}
      />
      <Box
        as="video"
        src={heroBackground}
        autoPlay
        loop
        muted
        playsInline
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height="100vh"
        objectFit="cover"
        zIndex={-1}
        transition="all 0.2s ease-out!important"
      />
    </>
  );
};

export default HeroBackground;
