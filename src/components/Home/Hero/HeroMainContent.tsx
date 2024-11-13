import { Box } from "@chakra-ui/react";

import HeroMainSocialMedia from "./HeroMainSocialMedia";
import HeroMainText from "./HeroMainText";

const HeroMainContent = () => {
  return (
    <Box
      position="relative"
      width="full"
      height="full"
      display="flex"
      flexDirection="column"
      justifyItems="center"
      justifyContent="center"
      gap={10}
    >
      <HeroMainText />
      <HeroMainSocialMedia />
    </Box>
  );
};

export default HeroMainContent;
