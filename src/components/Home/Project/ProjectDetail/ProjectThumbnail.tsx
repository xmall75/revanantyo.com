"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";

import { IProjectSchema } from "@/types/project.type";

interface ProjectThumbnailProps {
  thumbnail: IProjectSchema["thumbnail"];
}

const ProjectThumbnail = ({ thumbnail }: ProjectThumbnailProps) => {
  return (
    <Box
      width={{
        base: "full",
        md: 260,
        xl: 400,
      }}
      height={{
        base: "auto",
        md: 200,
        xl: 300,
      }}
      alignSelf={{
        md: "center",
      }}
      aspectRatio="4/3"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
    >
      <Image
        src={thumbnail.url}
        className="absolute rounded-lg"
        sizes="auto"
        fill
        alt={thumbnail.url}
        loading="lazy"
      />
    </Box>
  );
};

export default ProjectThumbnail;
