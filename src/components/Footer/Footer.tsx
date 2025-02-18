"use client";

import { Box, Divider, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

import { SocialMedia } from "@/constants/social_media";

const Footer = () => {
  const iconColor = useColorModeValue("brownPrimary.700", "blueAccent.500");
  const backgroundColor = useColorModeValue("light.50", "dark.600");

  const listContact = SocialMedia.filter(
    (social) => social.title.toLowerCase() !== "resume",
  );

  listContact.push({
    title: "Email",
    url: "mailto:revanandwi@gmail.com",
    icon: IoMail,
  });

  return (
    <Box width="full" zIndex={2} backgroundColor={backgroundColor}>
      <Divider
        mt={{
          base: 5,
          sm: 7,
          md: 9,
          lg: 12,
        }}
        width={{
          base: "92%",
          sm: "90%",
          md: "80%",
          lg: "70%",
        }}
        mx="auto"
        borderWidth={1}
      />
      <Flex
        mx="auto"
        py={3}
        width={{
          base: "92%",
          sm: "90%",
          md: "80%",
          lg: "70%",
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>&copy; {new Date().getFullYear()} revanantyo.com</Text>
        <Box
          display="flex"
          flexDirection="row-reverse"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          columnGap={{
            base: 3,
            md: 4,
            lg: 3,
          }}
          position="relative"
          zIndex={0}
        >
          {listContact.map((item, key) => {
            return (
              <Box
                key={key}
                as="a"
                href={item.url}
                boxSize={{
                  base: 21,
                  sm: 25,
                  lg: 27,
                }}
                overflow="hidden"
                _hover={{
                  color: iconColor,
                }}
                transition="color 0.1s ease!important"
              >
                <item.icon className="w-full h-full object-cover" />
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
