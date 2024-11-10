import { Box, Text } from "@chakra-ui/react";

const HeroMainText = () => {
  return (
    <Box textAlign="center" mx="auto" zIndex={1}>
      <Text
        fontWeight="bold"
        fontSize={{
          base: "2xl",
          lg: "4xl",
        }}
      >
        Revanantyo Dwigantara
      </Text>
      <Text
        fontSize={{
          base: "lg",
          lg: "xl",
        }}
      >
        Fullstack Engineer
      </Text>
      <Text
        mt={{
          base: 12,
          lg: 10,
        }}
        fontSize={{
          base: "sm",
          lg: "md",
        }}
        maxWidth={{
          base: "85%",
          lg: "50%",
        }}
        mx="auto"
        opacity={0.7}
      >
        I am a full-stack software engineer with over 1 year of experience,
        specializing in frontend development. My expertise lies in creating
        seamless, responsive, and user-friendly web applications using React and
        Next.js.
      </Text>
    </Box>
  );
};

export default HeroMainText;
