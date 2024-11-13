import { Box, Text } from "@chakra-ui/react";

import HeroMainSocialMedia from "./HeroMainSocialMedia";
import HeroMainText from "./HeroMainText";

const HeroMainContent = () => {
  return (
    <>
      <Box
        position="relative"
        width="full"
        height="full"
        display="flex"
        flexDirection="column"
        justifyItems="center"
        justifyContent="center"
        gap={{
          base: 6,
          lg: 10,
        }}
      >
        <HeroMainText />
        <HeroMainSocialMedia />
      </Box>
      <Text
        mt={{
          base: 4,
          sm: 0,
        }}
        width="full"
        fontSize={{
          base: "xs",
          lg: "sm",
        }}
        textAlign={{
          base: "center",
          sm: "left",
        }}
      >
        Transforming ideas into realities
      </Text>
    </>
  );
};

export default HeroMainContent;
