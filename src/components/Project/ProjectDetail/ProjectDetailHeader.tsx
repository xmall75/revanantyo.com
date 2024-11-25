"use client";

import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import { FormatDate } from "@/constants/common";

import { IProject } from "@/types/project";

interface ProjectDetailHeaderProps {
  title: IProject["name"];
  thumbnail: IProject["images"];
  shortDescription: IProject["shortDescription"];
  date: IProject["_createdAt"];
}

const ProjectDetailHeader = ({
  title,
  thumbnail,
  shortDescription,
  date,
}: ProjectDetailHeaderProps) => {
  const createdAt = new Date(date);

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
      <Text
        fontSize={{
          base: "xs",
          lg: "sm",
        }}
        _dark={{
          color: "light.700",
        }}
        _light={{
          color: "dark.300",
        }}
      >
        {FormatDate(createdAt)}
      </Text>
      <Box position="relative" aspectRatio="16/9" width="full">
        <Image
          className="absolute"
          fill
          src={thumbnail[0].url}
          alt={thumbnail[0].alt}
        />
      </Box>
    </Box>
  );
};

export default ProjectDetailHeader;
