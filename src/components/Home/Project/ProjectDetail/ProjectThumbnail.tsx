"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";

import { IProjectSchema } from "@/types/project";

interface ProjectThumbnailProps {
  thumbnail: IProjectSchema["thumbnail"];
}

const ProjectThumbnail = ({ thumbnail }: ProjectThumbnailProps) => {
  return (
    <Box
      width={{
        base: "full",
        md: 260,
        lg: 400,
      }}
      height={{
        base: "auto",
        md: 200,
        lg: 300,
      }}
      alignSelf={{
        md: "center",
      }}
      aspectRatio="4/3"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src={thumbnail.url}
        className="absolute"
        sizes="auto"
        fill
        alt={thumbnail.url}
      />
    </Box>
  );
};

export default ProjectThumbnail;
