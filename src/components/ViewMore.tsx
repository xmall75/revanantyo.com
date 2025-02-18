"use client";

import { Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

interface ViewMoreProps {
  url: string;
  text: string;
}

const ViewMore = ({ url, text }: ViewMoreProps) => {
  const buttonColorHover = useColorModeValue(
    "brownPrimary.700",
    "blueAccent.500",
  );

  return (
    <Text
      as="a"
      href={url}
      textDecoration="underline"
      textUnderlineOffset={5}
      _hover={{
        color: buttonColorHover,
      }}
      transition="0.15s ease!important"
    >
      {text}
    </Text>
  );
};

export default ViewMore;
