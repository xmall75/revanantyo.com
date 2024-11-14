import { Box } from "@chakra-ui/react";

import ExperienceTechStack from "./ExperienceTechStack";
import ExperienceWork from "./ExperienceWork";

const Experience = () => {
  return (
    <Box width="100%" minHeight="100vh">
      <ExperienceTechStack />
      <ExperienceWork />
    </Box>
  );
};

export default Experience;
