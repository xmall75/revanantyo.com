"use client";

import { Text, TextProps } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { FC, useEffect, useState } from "react";

interface Props extends TextProps {
  text: string;
  delay?: number;
  duration?: number;
  delayToHidden?: number;
  delayToVisible?: number;
}

const AnimatedText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  delayToHidden = 7000,
  delayToVisible = 1500,
  ...props
}: Props) => {
  const [loop, setLoop] = useState(true);
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: -18,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    if (loop) {
      setTimeout(() => setLoop(false), delayToHidden);
    } else {
      setTimeout(() => setLoop(true), delayToVisible);
    }
  }, [loop, delayToHidden, delayToVisible]);

  return (
    <Text
      as={motion.h1}
      display="flex"
      overflow="hidden"
      variants={container}
      initial="hidden"
      animate={loop ? "visible" : "hidden"}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Text>
  );
};

export default AnimatedText;
