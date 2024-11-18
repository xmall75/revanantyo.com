import { Box, Text } from "@chakra-ui/react";

import { WorkingExperiences } from "@/constants/working_experiences";

import ExperienceGeneralInformation from "./ExperienceDetail/ExperienceGeneralInformation";
import ExperienceJobdesk from "./ExperienceDetail/ExperienceJobdesk";

const ExperienceWork = () => {
  return (
    <Box
      id="experience"
      mt={{
        base: 44,
        sm: 40,
        lg: 56,
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      width="full"
      height={{
        base: "85vh",
        lg: "90vh",
      }}
    >
      <Box position="relative">
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
            sm: "5xl",
            md: "6xl",
          }}
          _after={{
            content: '"EXPERIENCE"',
            zIndex: 0,
            fontSize: {
              base: "6xl",
              sm: "7xl",
              md: "8xl",
              lg: "9xl",
            },
            opacity: 0.1,
            position: "absolute",
          }}
        >
          EXPERIENCE
        </Text>
      </Box>
      {WorkingExperiences.map((item, key) => {
        return (
          <Box
            key={key}
            display="flex"
            flexDirection="column"
            width="full"
            px={{
              lg: 8,
              xl: 16,
            }}
            position="relative"
          >
            <ExperienceGeneralInformation experience={item} />
            <ExperienceJobdesk jobdesk={item.jobdesk} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ExperienceWork;
