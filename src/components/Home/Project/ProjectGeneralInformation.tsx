import { Box, Text } from "@chakra-ui/react";

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
          fontSize={{
            base: 20,
            sm: 22,
            xl: 24,
          }}
          fontWeight="semibold"
          textAlign="left"
        >
          {project.title}
        </Text>
      </Box>
      <Text
        fontSize="sm"
        fontStyle="italic"
        textAlign="left"
        mb={{
          base: 3,
          lg: 5,
        }}
      >
        {project.role}
      </Text>
    </>
  );
};

export default ProjectGeneralInformation;
