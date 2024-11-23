import { Box } from "@chakra-ui/react";

import { getProjects } from "@/sanity/utils/project.utils";

const ProjectPage = async () => {
  const projects = await getProjects();

  return (
    <Box>
      {projects.map((project, index) => {
        return <span key={index}>{project.name}</span>;
      })}
    </Box>
  );
};

export default ProjectPage;
