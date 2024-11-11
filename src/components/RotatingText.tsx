"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { gradientBrown, gradientMagenta } from "@/constants/gradient_color";

const RotatingText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const bgGradient = useColorModeValue(gradientBrown, gradientMagenta);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <Box
      fontSize={{ base: "6xl", sm: "5xl", md: "6xl" }}
      textAlign="center"
      fontWeight="bold"
      letterSpacing="tighter"
      lineHeight={{ md: "4rem" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mx="auto"
      gap={5}
    >
      <AnimatePresence mode="wait">
        <Box
          as={motion.p}
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          px={1}
          bgGradient={bgGradient}
          backgroundClip="text"
        >
          {words[index]}
        </Box>
      </AnimatePresence>
    </Box>
  );
};

export default RotatingText;
