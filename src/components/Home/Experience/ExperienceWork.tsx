import { Box, Text } from "@chakra-ui/react";

import { WorkingExperiences } from "@/constants/working_experiences";

import ExperienceGeneralInformation from "./ExperienceDetail/ExperienceGeneralInformation";
import ExperienceJobdesk from "./ExperienceDetail/ExperienceJobdesk";

const ExperienceWork = () => {
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
          base: "200%",
          sm: 0,
          lg: "10%",
        }}
        zIndex={-1}
      >
        <Text transform="rotate(-90deg)">EXPERIENCES</Text>
      </Box>
      {WorkingExperiences.map((item, key) => {
        return (
          <Box
            key={key}
            display="flex"
            flexDirection="column"
            width="full"
            height={`${100 / WorkingExperiences.length}%`}
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
