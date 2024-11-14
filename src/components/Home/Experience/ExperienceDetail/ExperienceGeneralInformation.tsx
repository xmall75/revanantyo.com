import { Box, Divider, Text } from "@chakra-ui/react";

import { IWorkingExperience } from "@/types/experience";

interface ExperienceGeneralInformationProps {
  experience: IWorkingExperience;
}

const ExperienceGeneralInformation = ({
  experience,
}: ExperienceGeneralInformationProps) => {
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
        <Divider
          borderWidth={2}
          opacity={1}
          borderColor="dark.100"
          width="30%"
        />
        <Text
          width="40%"
          fontSize={{
            lg: 20,
          }}
          fontWeight="semibold"
          textAlign="center"
        >
          {experience.company}
        </Text>
        <Divider
          borderWidth={2}
          opacity={1}
          borderColor="dark.100"
          width="30%"
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
        fontSize={{
          lg: "xs",
        }}
        mb={{
          lg: 5,
        }}
      >
        <Text width="30%" textAlign="left">
          {experience.role}
        </Text>
        <Text width="40%" textAlign="center">
          {experience.type}
        </Text>
        <Text width="30%" textAlign="right">
          {experience.date}
        </Text>
      </Box>
    </>
  );
};

export default ExperienceGeneralInformation;
