import { Box, Text } from "@chakra-ui/react";

import ViewMore from "@/components/ViewMore";

import { AppRoute } from "@/constants/app_route";
import { getProjects } from "@/sanity/services/project.service";

import ProjectDescription from "./ProjectDetail/ProjectDescription";

const ProjectContent = async () => {
  const projects = await getProjects(3);

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
          base: 5,
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
      {projects.map((project, index) => {
        return (
          <Box
            key={index}
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
            <ProjectDescription
              project={project}
              position={index % 2 === 0 ? "left" : "right"}
            />
          </Box>
        );
      })}
      <ViewMore url={AppRoute.projectPage} text="View More Projects" />
    </Box>
  );
};

export default ProjectContent;
