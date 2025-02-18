import { Box } from "@chakra-ui/react";

import ProjectMain from "@/components/Project/ProjectMain";

const ProjectPage = () => {
  return (
    <Box
      mt={{
        base: 36,
        md: 36,
        lg: 52,
      }}
      width={{
        base: "92%",
        sm: "90%",
        md: "80%",
        lg: "70%",
      }}
      mx="auto"
    >
      <ProjectMain />
    </Box>
  );
};

export default ProjectPage;
