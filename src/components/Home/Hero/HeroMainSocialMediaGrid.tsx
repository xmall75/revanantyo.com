"use client";

import { Box, Grid, useColorModeValue } from "@chakra-ui/react";

import { getIconComponent } from "@/utils/getIconComponent";

import { ICommonDataSchema } from "@/types/common.type";

interface HeroMainSocialMediaGridProps {
  data: ICommonDataSchema[];
}

const HeroMainSocialMediaGrid = (props: HeroMainSocialMediaGridProps) => {
  const { data } = props;
  const color = useColorModeValue("brownPrimary.700", "blueAccent.500");

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      justifyContent="center"
      alignContent="center"
      gap={{
        base: 3,
        sm: 4,
      }}
    >
      {data.map((social, key) => {
        const RenderIconComponent = getIconComponent(
          social.icon.name,
          social.icon.provider,
        );

        if (!RenderIconComponent) {
          return null;
        }

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
            <RenderIconComponent />
            {social.name}
          </Box>
        );
      })}
    </Grid>
  );
};

export default HeroMainSocialMediaGrid;
