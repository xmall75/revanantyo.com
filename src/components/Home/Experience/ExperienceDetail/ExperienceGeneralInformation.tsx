import { Box, Text } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";

import { MonthNames } from "@/constants/common";

import type { IExperienceSchema } from "@/types/experience";

interface ExperienceGeneralInformationProps {
  experience: IExperienceSchema;
}

const ExperienceGeneralInformation = ({
  experience,
}: ExperienceGeneralInformationProps) => {
  const splittedStartDate = experience.startDate.split("-");
  const splittedEndDate =
    experience.endDate != null ? experience.endDate.split("-") : "";

  const start_date =
    MonthNames[Number(splittedStartDate[1]) - 1] + " " + splittedStartDate[0];
  const end_date = experience.stillWorking
    ? "Present"
    : MonthNames[Number(splittedEndDate[1]) - 1] + " " + splittedEndDate[0];

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
        <Text>
          {start_date} - {end_date}
        </Text>
      </Box>
    </>
  );
};

export default ExperienceGeneralInformation;
