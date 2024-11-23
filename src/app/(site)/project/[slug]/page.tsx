import { Box } from "@chakra-ui/react";

import { getProjectBySlug } from "@/sanity/utils/project.utils";

const ProjectDetailPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const project = await getProjectBySlug(params.slug);
  console.log(project);

  return <Box></Box>;
};

export default ProjectDetailPage;
