"use client";

import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { IProjectSchema } from "@/types/project.type";

interface ProjectGalleryProps {
  images: IProjectSchema["images"];
  isOpen: boolean;
  onClose: () => void;
}

const ProjectGallery = ({ images, isOpen, onClose }: ProjectGalleryProps) => {
  const backgroundColor = useColorModeValue("dark.600", "light.50");

  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    if (currentImage - 1 < 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImage + 1 >= images.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        zIndex={102}
        my="auto"
        minWidth={{
          base: "80%",
          lg: "90%",
          xl: "70%",
        }}
        maxWidth={{
          base: "80%",
          lg: "90%",
          xl: "70%",
        }}
        pb={3}
      >
        <ModalHeader>
          <Text>Project&apos;s Gallery</Text>
        </ModalHeader>

        <ModalBody>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="full"
          >
            <Box
              borderRadius="full"
              width={{
                base: 12,
                md: 16,
              }}
              height={{
                base: 12,
                md: 16,
              }}
              position="absolute"
              onClick={previousImage}
              cursor={images.length === 1 ? "not-allowed" : "pointer"}
              background={backgroundColor}
              left={1}
              zIndex={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid black"
            >
              <FaChevronLeft className="object-fill" onClick={previousImage} />
            </Box>
            {images
              .slice(currentImage, currentImage + 1)
              .map((image, index) => {
                return (
                  <Box
                    key={index}
                    width={{
                      base: "full",
                      md: "full",
                    }}
                    position="relative"
                    aspectRatio="16/9"
                  >
                    <Image
                      fill
                      src={image.url}
                      className="absolute"
                      alt={image.alt}
                    />
                  </Box>
                );
              })}
            <Box
              borderRadius="full"
              width={{
                base: 12,
                md: 16,
              }}
              height={{
                base: 12,
                md: 16,
              }}
              position="absolute"
              onClick={nextImage}
              cursor={images.length === 1 ? "not-allowed" : "pointer"}
              background={backgroundColor}
              right={1}
              zIndex={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="1px solid black"
            >
              <FaChevronRight
                className="object-fill absolute"
                onClick={previousImage}
              />
            </Box>
          </Box>
          <Text textAlign="center">
            {currentImage + 1} / {images.length}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectGallery;
