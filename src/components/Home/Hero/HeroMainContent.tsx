import { Box } from "@chakra-ui/react";

import RotatingText from "@/components/RotatingText";

import HeroMainSocial from "./HeroMainSocial";
import HeroMainText from "./HeroMainText";

const HeroMainContent = () => {
  return (
    <Box
      mx="auto"
      my="auto"
      width={{
        base: "92%",
        sm: "90%",
        md: "80%",
        lg: "70%",
      }}
      height="full"
      display="flex"
      flexDirection="column"
      justifyItems="center"
      justifyContent="center"
      gap={16}
    >
      <RotatingText words={["Develop", "Code", "Build"]} />
      <HeroMainText />
      <HeroMainSocial />
    </Box>
  );
};

export default HeroMainContent;
