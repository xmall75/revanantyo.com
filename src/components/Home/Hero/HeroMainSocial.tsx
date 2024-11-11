"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

import { AppRoute } from "@/constants/app_route";

const HeroMainSocial = () => {
  const buttonColorHover = useColorModeValue(
    "brownPrimary.700",
    "blueAccent.500",
  );

  return (
    <Box
      as="a"
      href={AppRoute.resume}
      position="relative"
      p={{
        base: 2,
        lg: 3,
      }}
      px={{
        base: 6,
        lg: 7,
      }}
      width="fit-content"
      height="fit-content"
      mx="auto"
      borderRadius="full"
      overflow="hidden"
      border="1px solid"
      borderColor="dark.200"
      fontWeight="bold"
      fontSize="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        borderColor: buttonColorHover,
        color: buttonColorHover,
      }}
      transition="all 0.1s ease-in!important"
    >
      Resume
    </Box>
  );
};

export default HeroMainSocial;
