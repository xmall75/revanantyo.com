import { Box, Text } from "@chakra-ui/react";

import { getExperiences } from "@/sanity/services/experience.service";

import ExperienceGeneralInformation from "./ExperienceDetail/ExperienceGeneralInformation";
import ExperienceJobdesk from "./ExperienceDetail/ExperienceJobdesk";

const ExperienceWork = async () => {
  const experiences = await getExperiences();

  return (
    <Box
      id="experience"
      mt={{
        base: 44,
        sm: 40,
      }}
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      position="relative"
      width="full"
      gap={{
        base: 3,
        sm: 5,
        md: 7,
      }}
    >
      <Box
        position="relative"
        mb={{
          base: 3,
          sm: 4,
          md: 5,
          lg: 6,
        }}
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
      {experiences.map((item, key) => {
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
