import { Box } from "@chakra-ui/react";

import HeroMainContent from "./HeroMainContent";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      width="full"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <HeroMainContent />
    </Box>
  );
};

export default Hero;
