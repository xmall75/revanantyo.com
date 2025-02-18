import { Box, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import { PortableTextBlock } from "sanity";

import { imageBuilder } from "@/sanity/lib/image";

const customComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: SanityImageObject }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <Box
          my={{
            base: 3,
            lg: 5,
          }}
          position="relative"
          width={{
            base: 320,
            lg: 640,
          }}
          height={{
            base: 180,
            lg: 360,
          }}
        >
          <Image
            className="absolute"
            src={imageBuilder(value).url()}
            alt="Project Image"
            sizes="auto"
            fill
          />
        </Box>
      );
    },
  },
  block: {
    h1: (params) => {
      return (
        <Text
          mt={{
            base: 2,
            lg: 3,
          }}
          fontWeight="bold"
          fontSize={{
            base: "2xl",
            sm: "3xl",
            md: "4xl",
            lg: "5xl",
          }}
        >
          {params.children}
        </Text>
      );
    },
    h2: (params) => {
      return (
        <Text
          mt={{
            base: 2,
            lg: 3,
          }}
          fontWeight="bold"
          fontSize={{
            base: "xl",
            sm: "2xl",
            md: "3xl",
            lg: "4xl",
          }}
        >
          {params.children}
        </Text>
      );
    },
    h3: (params) => {
      return (
        <Text
          mt={{
            base: 1,
            lg: 2,
          }}
          fontWeight="semibold"
          fontSize={{
            base: "lg",
            sm: "xl",
            md: "2xl",
            lg: "3xl",
          }}
        >
          {params.children}
        </Text>
      );
    },
    h4: (params) => {
      return (
        <Text
          mt={{
            base: 2,
            lg: 3,
          }}
          fontSize={{
            base: "md",
            sm: "lg",
            md: "xl",
            lg: "2xl",
          }}
        >
          {params.children}
        </Text>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <UnorderedList
        ml={{
          base: 5,
          lg: 7,
          xl: 10,
        }}
        mt={{
          base: 3,
          lg: 5,
        }}
      >
        {children}
      </UnorderedList>
    ),
    number: ({ children }) => (
      <OrderedList
        ml={{
          base: 5,
          lg: 7,
          xl: 10,
        }}
        mt={{
          base: 3,
          lg: 5,
        }}
      >
        {children}
      </OrderedList>
    ),
  },
};

const CustomPortableText = ({ content }: { content: PortableTextBlock[] }) => {
  return <PortableText value={content} components={customComponents} />;
};

export default CustomPortableText;
