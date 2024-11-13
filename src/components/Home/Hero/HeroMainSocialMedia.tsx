"use client";

import { Box, Divider, Grid, useColorModeValue } from "@chakra-ui/react";

import { SocialMedia } from "@/constants/social_media";

const HeroMainSocialMedia = () => {
  const color = useColorModeValue("brownPrimary.700", "blueAccent.500");

  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={6}>
      <Divider
        borderWidth={2}
        display={{
          base: "none",
          sm: "inline",
        }}
      />
      <Grid
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignContent="center"
        gap={{
          base: 3,
          sm: 4,
        }}
      >
        {SocialMedia.map((social, key) => {
          return (
            <Box
              key={key}
              as="a"
              href={social.url}
              target="_blank"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              _hover={{
                color: color,
              }}
              transition="color 0.1s ease!important"
            >
              <social.icon />
              {social.title}
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HeroMainSocialMedia;
