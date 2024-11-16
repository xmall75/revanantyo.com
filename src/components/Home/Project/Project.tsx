import { Box } from "@chakra-ui/react";

import ProjectContent from "./ProjectContent";

const Project = () => {
  return (
    <Box width="100%" minHeight="100vh">
      <Box
        mt={{
          base: 20,
          lg: 36,
        }}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        position="relative"
        width="full"
        height="100vh"
      >
        <ProjectContent />
      </Box>
    </Box>
  );
};

export default Project;
