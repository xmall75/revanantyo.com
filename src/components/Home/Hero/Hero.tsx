import { Box } from "@chakra-ui/react";

import AnimatedText from "@/components/AnimatedText";

import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <Box position="relative" width="100%" height="200vh">
      <HeroBackground />
      <Box
        mx="auto"
        my="auto"
        width={{
          base: "92%",
          sm: "90%",
          md: "80%",
          lg: "70%",
        }}
        height="50%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        justifyItems="center"
        border="1px solid red"
      >
        <AnimatedText
          text="Revanantyo Dwigantara"
          fontSize={{
            base: "3xl",
            lg: "5xl",
          }}
          fontWeight="bold"
          textAlign="center"
          mx="auto"
        />
      </Box>
    </Box>
  );
};

export default Hero;
