import { Box, Button, Text } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

import { AppRoute } from "@/constants/app_route";

import ProjectThumbnail from "./ProjectThumbnail";

import { IProjectSchema } from "@/types/project";

interface ProjectDescriptionProps {
  slug: IProjectSchema["slug"];
  images: IProjectSchema["images"];
  description: IProjectSchema["shortDescription"];
  github: IProjectSchema["github"];
  url: IProjectSchema["url"];
}

const ProjectDescription = ({
  slug,
  images,
  description,
  github,
  url,
}: ProjectDescriptionProps) => {
  return (
    <Box
      display="flex"
      flexDirection={{
        base: "column",
        md: "row",
      }}
      gap={{
        base: 2,
        sm: 3,
        md: 4,
        lg: 5,
      }}
    >
      <ProjectThumbnail images={images} imageUrl={images[0].url} />
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Text
          fontSize={{
            base: "sm",
            sm: "md",
          }}
        >
          {description}
        </Text>
        <Box
          mt={{
            base: 12,
            sm: 14,
          }}
          display="flex"
          gap={2}
        >
          <Button
            as="a"
            href={`${AppRoute.projectPage}/${slug}`}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontSize={{
                base: "sm",
              }}
            >
              Read More
            </Text>
          </Button>
          {github && (
            <Button
              as="a"
              href={github}
              target="_blank"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <FaGithub />
              <Text
                display={{
                  base: "none",
                  md: "inline",
                }}
              >
                Github
              </Text>
            </Button>
          )}
          {url && (
            <Button
              as="a"
              href={url}
              target="_blank"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <FaGlobe />
              <Text
                display={{
                  base: "none",
                  md: "inline",
                }}
              >
                Website
              </Text>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDescription;
