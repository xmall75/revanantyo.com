import { Box, Text } from "@chakra-ui/react";

import { ListProject } from "@/constants/project";

import ProjectDescription from "./ProjectDescription";
import ProjectGeneralInformation from "./ProjectGeneralInformation";

const ProjectContent = () => {
  return (
    <Box
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
      minHeight={{
        base: "160vh",
        sm: "180vh",
        md: "100vh",
      }}
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
      {ListProject.map((item, key) => {
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
            <ProjectGeneralInformation project={item} />
            <ProjectDescription
              images={item.images}
              description={item.description}
              links={item.links}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ProjectContent;
