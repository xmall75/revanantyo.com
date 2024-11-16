import { Box, Divider, Text } from "@chakra-ui/react";

import { IListProject } from "@/types/project";

interface ProjectGeneralInformationProps {
  project: IListProject;
}

const ProjectGeneralInformation = ({
  project,
}: ProjectGeneralInformationProps) => {
  return (
    <>
      <Box
        width="full"
        height={{
          lg: 25,
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          width="full"
          fontSize={{
            base: 16,
            sm: 18,
            md: 18,
            lg: 18,
            xl: 20,
          }}
          fontWeight="semibold"
          textAlign="left"
        >
          {project.title}
        </Text>
        <Divider
          borderWidth={2}
          opacity={1}
          borderColor="dark.100"
          width={{
            base: "10%",
            sm: "20%",
            md: "40%",
            lg: "30%",
          }}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="start"
        width="full"
        height={{
          lg: 18,
        }}
        fontStyle="italic"
        fontSize="xs"
        mb={{
          base: 7,
          md: 5,
        }}
      >
        <Text textAlign="left">{project.role}</Text>
      </Box>
    </>
  );
};

export default ProjectGeneralInformation;
