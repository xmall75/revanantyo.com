import { Box, Text } from "@chakra-ui/react";

import { ListProject } from "@/constants/project";

import ProjectDescription from "./ProjectDescription";
import ProjectGeneralInformation from "./ProjectGeneralInformation";

const ProjectContent = () => {
  return (
    <Box
      mt={{
        base: 20,
        sm: 40,
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
      <Box
        display="flex"
        justifyContent="end"
        position="absolute"
        width="full"
        height="full"
        fontSize={{
          base: "8xl",
          sm: "9xl",
        }}
        fontWeight="semibold"
        opacity={0.1}
        lineHeight={{
          base: "275%",
          sm: "25%",
          lg: "50%",
        }}
        zIndex={-1}
      >
        <Text transform="rotate(90deg)">PROJECTS</Text>
      </Box>
      {ListProject.map((item, key) => {
        return (
          <Box
            key={key}
            display="flex"
            flexDirection="column"
            width="full"
            height={`${100 / ListProject.length}%`}
            px={{
              lg: 8,
              xl: 16,
            }}
            position="relative"
          >
            <ProjectGeneralInformation project={item} />
            <ProjectDescription
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
