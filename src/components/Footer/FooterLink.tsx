"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

import { getIconComponent } from "@/utils/getIconComponent";

import { ICommonDataSchema } from "@/types/common.type";

interface FooterLinkProps {
  data: ICommonDataSchema[];
}

const FooterLink = (props: FooterLinkProps) => {
  const { data } = props;
  const iconColor = useColorModeValue("brownPrimary.700", "blueAccent.500");

  return (
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
      {data.map((item, key) => {
        const RenderIconComponent = getIconComponent(
          item.icon.name,
          item.icon.provider,
        );

        if (!RenderIconComponent) {
          return null;
        }

        return (
          <Box
            key={key}
            as="a"
            href={item.url}
            boxSize={{
              base: 21,
              sm: 23,
              lg: 25,
            }}
            overflow="hidden"
            _hover={{
              color: iconColor,
            }}
            transition="color 0.1s ease!important"
          >
            <RenderIconComponent className="w-full h-full object-cover" />
          </Box>
        );
      })}
    </Box>
  );
};

export default FooterLink;
