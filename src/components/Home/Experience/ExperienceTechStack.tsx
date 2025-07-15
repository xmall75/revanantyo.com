import { Box, Text, Tooltip } from "@chakra-ui/react";

import { getTechStacks } from "@/sanity/services/techStack.service";
import { getIconComponent } from "@/utils/getIconComponent";

const ExperienceTechStack = async () => {
  const techStacks = await getTechStacks();

  return (
    <Box
      display="flex"
      position="relative"
      width="full"
      minHeight={{
        base: "40vh",
        md: 300,
        xl: "100vh",
      }}
      justifyContent={{ base: "start", xl: "center" }}
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
        {techStacks.map((item, key) => {
          const RenderIconComponent = getIconComponent(
            item.icon.name,
            item.icon.provider,
          );

          if (!RenderIconComponent) {
            return null;
          }

          return (
            <Tooltip key={key} label={item.name}>
              <Box
                key={key}
                boxSize={{
                  base: 42,
                  sm: 70,
                  lg: 82,
                }}
                overflow="hidden"
              >
                <RenderIconComponent className="w-full h-full object-cover" />
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
};

export default ExperienceTechStack;
