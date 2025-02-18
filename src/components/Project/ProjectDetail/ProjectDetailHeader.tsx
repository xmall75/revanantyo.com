"use client";

import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import { IProjectSchema } from "@/types/project";

interface ProjectDetailHeaderProps {
  title: IProjectSchema["name"];
  thumbnail: IProjectSchema["thumbnail"];
  shortDescription: IProjectSchema["shortDescription"];
}

const ProjectDetailHeader = ({
  title,
  thumbnail,
  shortDescription,
}: ProjectDetailHeaderProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Text
        fontSize={{
          base: "4xl",
          lg: "7xl",
        }}
        fontWeight="bold"
        lineHeight={{
          base: "100%",
          lg: "120%",
        }}
      >
        {title}
      </Text>
      <Text
        fontSize={{
          base: "sm",
          lg: "md",
        }}
        _dark={{
          color: "light.400",
        }}
        _light={{
          color: "dark.400",
        }}
      >
        {shortDescription}
      </Text>
      <Box position="relative" aspectRatio="16/9" width="full">
        <Image
          className="absolute"
          sizes="auto"
          fill
          src={thumbnail.url}
          alt={thumbnail.alt}
        />
      </Box>
    </Box>
  );
};

export default ProjectDetailHeader;
