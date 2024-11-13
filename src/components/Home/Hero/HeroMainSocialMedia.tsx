import { Box, Divider, Grid } from "@chakra-ui/react";

import { SocialMedia } from "@/constants/social_media";

const HeroMainSocialMedia = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={6}>
      <Divider borderWidth={2} />
      {/* <Box
        width="auto"
        display="flex"
        justifyContent="end"
        alignItems="center"
        gap={4}
      >
        <Box width="auto"></Box>
      </Box> */}
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {SocialMedia.map((item, key) => {
          return (
            <Box
              key={key}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <item.icon />
              {item.title}
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HeroMainSocialMedia;
