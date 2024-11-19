"use client";

import { Box, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";

import ProjectGallery from "./ProjectGallery";

interface ProjectThumbnailProps {
  imageUrl: string;
  images: string[];
}

const ProjectThumbnail = ({ imageUrl, images }: ProjectThumbnailProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ProjectGallery images={images} isOpen={isOpen} onClose={onClose} />
      <Box
        width={{
          md: 280,
        }}
        height={{
          md: 160,
        }}
        alignSelf={{
          md: "center",
        }}
        aspectRatio="16/9"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={onOpen}
        _after={{
          content: '""',
          backgroundColor: "black",
          width: "full",
          height: "full",
          position: "absolute",
          opacity: 0,
          transition: "all 0.1s ease-in!important",
        }}
        _hover={{
          _after: {
            opacity: 0.7,
          },
        }}
      >
        <Box
          width="full"
          height="full"
          opacity={0}
          zIndex={1}
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{
            opacity: 1,
          }}
          transition="all 0.1s ease-in!important"
        >
          <Text
            fontSize={{
              base: "xl",
              md: "lg",
            }}
            fontWeight="semibold"
            color="white"
          >
            View Gallery
          </Text>
        </Box>
        <Image src={imageUrl} className="absolute" fill alt={imageUrl} />
      </Box>
    </>
  );
};

export default ProjectThumbnail;
