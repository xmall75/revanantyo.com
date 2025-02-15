import { Box } from "@chakra-ui/react";

import HeroMainContent from "./HeroMainContent";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      width="full"
      minHeight={{
        base: "50vh",
        md: 600,
        lg: "100vh",
      }}
      justifyContent={{ base: "end", lg: "center" }}
      alignItems="center"
    >
      <HeroMainContent />
    </Box>
  );
};

export default Hero;
