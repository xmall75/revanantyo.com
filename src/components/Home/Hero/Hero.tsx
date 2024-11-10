import { Box } from "@chakra-ui/react";

import HeroBackground from "./HeroBackground";
import HeroMainContent from "./HeroMainContent";

const Hero = () => {
  return (
    <Box position="relative" width="100%" height="200vh">
      <HeroBackground />
      <HeroMainContent />
    </Box>
  );
};

export default Hero;
