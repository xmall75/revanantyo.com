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
          width={{
            base: "15%",
            sm: "30%",
          }}
        />
        <Text
          width={{
            base: "auto",
            sm: "70%",
            md: "50%",
            lg: "60%",
            xl: "40%",
          }}
          fontSize={{
            base: 16,
            sm: 18,
            md: 18,
            lg: 18,
            xl: 20,
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
          width={{
            base: "15%",
            sm: "30%",
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
        <Text
          width={{
            base: "50%",
            sm: "30%",
          }}
          textAlign="left"
        >
          {experience.role}
        </Text>
        <Text
          display={{
            base: "none",
            sm: "inline",
          }}
          width="40%"
          textAlign="center"
        >
          {experience.type}
        </Text>
        <Text
          width={{
            base: "50%",
            sm: "30%",
          }}
          textAlign="right"
        >
          {experience.date}
        </Text>
      </Box>
    </>
  );
};

export default ExperienceGeneralInformation;
