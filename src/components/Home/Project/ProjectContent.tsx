import { Box, Text } from "@chakra-ui/react";

import { AppRoute } from "@/constants/app_route";
import { getProjects } from "@/sanity/services/project.service";

import ProjectDescription from "./ProjectDetail/ProjectDescription";
import ProjectGeneralInformation from "./ProjectDetail/ProjectGeneralInformation";

const ProjectContent = async () => {
  const projects = await getProjects();

  return (
    <Box
      id="project"
      mt={{
        base: 48,
        sm: 52,
        lg: 56,
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      width="full"
      gap={{
        base: 3,
        sm: 5,
        md: 7,
      }}
      overflow="hidden"
    >
      <Box
        mb={{
          base: 3,
          sm: 4,
          md: 5,
          lg: 6,
        }}
        position="relative"
      >
        <Text
          zIndex={1}
          fontWeight="semibold"
          opacity={1}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize={{
            base: "4xl",
            sm: "6xl",
          }}
          _after={{
            content: '"PROJECT"',
            zIndex: 0,
            fontSize: {
              base: "7xl",
              sm: "8xl",
              lg: "9xl",
            },
            opacity: 0.1,
            position: "absolute",
          }}
        >
          PROJECT
        </Text>
      </Box>
      {projects.slice(0, 3).map((project, key) => {
        return (
          <Box
            key={key}
            display="flex"
            flexDirection="column"
            width="full"
            position="relative"
            mb={{
              base: 5,
              sm: 7,
              md: 6,
              lg: 7,
            }}
          >
            <ProjectGeneralInformation project={project} />
            <ProjectDescription
              slug={project.slug}
              images={project.images}
              description={project.shortDescription}
              github={project.github}
              url={project.url}
            />
          </Box>
        );
      })}
      <Text
        as="a"
        href={AppRoute.projectPage}
        textDecoration="underline"
        textUnderlineOffset={5}
        _hover={{
          opacity: 0.7,
        }}
        transition="0.15s ease!important"
      >
        View More Projects
      </Text>
    </Box>
  );
};

export default ProjectContent;
