import { Box } from "@chakra-ui/react";

import RotatingText from "@/components/RotatingText";

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
      height="50%"
      display="flex"
      flexDirection="column"
      justifyItems="center"
      gap={5}
    >
      <RotatingText words={["Develop", "Code", "Build"]} />
      <HeroMainText />
    </Box>
  );
};

export default HeroMainContent;
