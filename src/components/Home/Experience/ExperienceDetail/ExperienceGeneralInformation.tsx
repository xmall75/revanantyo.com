import { Box, Show, Text } from "@chakra-ui/react";
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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="full"
        mb={1}
      >
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
        <Text
          display={{
            base: "none",
            md: "inline",
          }}
        >
          {start_date} - {end_date}
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        justifyContent={{ md: "start" }}
        alignItems={{ md: "center" }}
        gap={{
          base: 1,
          md: 2,
        }}
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
        <Box>
          <Text as="span">{experience.type}, </Text>
          <Text as="span">{experience.role}</Text>
        </Box>
        <Show above="md">
          <GoDotFill size={10} />
        </Show>
        <Text>{experience.location}</Text>
        <Text
          display={{
            base: "inline",
            md: "none",
          }}
        >
          {start_date} - {end_date}
        </Text>
      </Box>
    </>
  );
};

export default ExperienceGeneralInformation;
