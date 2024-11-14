import { Box, Text } from "@chakra-ui/react";

import { TechStack } from "@/constants/tech_stack";

const ExperienceTechStack = () => {
  return (
    <Box
      display="flex"
      position="relative"
      width="full"
      height={250}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        width="full"
        height="full"
        fontSize={{
          base: "8xl",
          md: "9xl",
        }}
        fontWeight="semibold"
        lineHeight={{
          base: "100%",
          sm: "normal",
          md: "90%",
          lg: "95%",
        }}
        opacity={0.1}
        zIndex={-1}
      >
        <Text>TECH</Text>
        <Text>STACK</Text>
      </Box>
      <Box
        width="full"
        height="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        columnGap={{
          base: 2,
          sm: 6,
          md: 5,
          lg: 5,
          xl: 8,
        }}
        position="relative"
        zIndex={0}
      >
        {TechStack.map((item, key) => {
          return (
            <Box
              key={key}
              boxSize={{
                base: 42,
                sm: 70,
                lg: 82,
              }}
              overflow="hidden"
            >
              <item.icon className="w-full h-full object-cover" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ExperienceTechStack;
