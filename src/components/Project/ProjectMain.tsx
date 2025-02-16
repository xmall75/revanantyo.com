import { Box, Grid, Text } from "@chakra-ui/react";

import { getProjects } from "@/sanity/services/project.service";

import ProjectItem from "./ProjectItem";

const ProjectMain = async () => {
  const projects = await getProjects();

  return (
    <>
      <Box
        mb={{
          base: 10,
          sm: 8,
          md: 6,
          lg: 16,
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
      <Grid
        justifyContent="center"
        alignContent="center"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={{
          base: 4,
          sm: 3,
          lg: 5,
        }}
      >
        {projects.map((project, index) => {
          return <ProjectItem key={index} project={project} />;
        })}
      </Grid>
    </>
  );
};

export default ProjectMain;
