import { Box } from "@chakra-ui/react";

import ProjectDetailContent from "@/components/Project/ProjectDetail/ProjectDetailContent";
import ProjectDetailHeader from "@/components/Project/ProjectDetail/ProjectDetailHeader";

import { getProjectBySlug } from "@/sanity/services/project.service";

const ProjectDetailPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const project = await getProjectBySlug(params.slug);

  return (
    <Box
      mt={{
        base: 36,
        md: 36,
        lg: 48,
      }}
      width={{
        base: "92%",
        sm: "90%",
        md: "80%",
        lg: "70%",
      }}
      mx="auto"
    >
      <ProjectDetailHeader
        title={project.name}
        thumbnail={project.thumbnail}
        shortDescription={project.shortDescription}
      />
      <ProjectDetailContent
        content={project.content}
        github={project.github}
        url={project.url}
      />
    </Box>
  );
};

export default ProjectDetailPage;
