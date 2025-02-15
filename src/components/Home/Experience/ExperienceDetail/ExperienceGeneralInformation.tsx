import { Box, Text } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";

import { IWorkingExperience } from "@/types/experience";

interface ExperienceGeneralInformationProps {
  experience: IWorkingExperience;
}

const ExperienceGeneralInformation = ({
  experience,
}: ExperienceGeneralInformationProps) => {
  return (
    <>
      <Box width="full" mb={1}>
        <Text
          fontSize={{
            base: 20,
            sm: 18,
            md: 22,
            xl: 24,
          }}
          fontWeight="semibold"
        >
          {experience.company}
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        gap={2}
        width="full"
        height={{
          lg: 18,
        }}
        color="light.700"
        fontSize={{
          base: "xs",
          md: "sm",
        }}
        mb={{
          base: 7,
          md: 8,
        }}
      >
        <Text>{experience.type},</Text>
        <Text>{experience.role}</Text>
        <GoDotFill size={10} />
        <Text>{experience.date}</Text>
      </Box>
    </>
  );
};

export default ExperienceGeneralInformation;
