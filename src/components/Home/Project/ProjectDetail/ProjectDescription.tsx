import { Box } from "@chakra-ui/react";

import ProjectDescriptionContent from "./ProjectDescriptionContent";
import ProjectThumbnail from "./ProjectThumbnail";

import type { IProjectSchema } from "@/types/project";

interface ProjectDescriptionProps {
  project: IProjectSchema;
  position: "left" | "right";
}

const ProjectDescription = ({ project, position }: ProjectDescriptionProps) => {
  return (
    <Box
      display="flex"
      flexDirection={{
        base: "column",
        md: position === "left" ? "row" : "row-reverse",
      }}
      justifyContent={{
        base: "center",
        md: "space-between",
      }}
      gap={{
        base: 2,
        sm: 3,
        md: 4,
        lg: 5,
      }}
    >
      <ProjectThumbnail thumbnail={project.thumbnail} />
      <ProjectDescriptionContent project={project} />
    </Box>
  );
};

export default ProjectDescription;
