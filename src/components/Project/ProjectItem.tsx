import { Box, Button, Card, CardBody, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";

import { AppRoute } from "@/constants/app_route";

import { IProject } from "@/types/project";

interface ProjectItemProps {
  project: IProject;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const description =
    project.shortDescription.length > 150
      ? project.shortDescription.substring(0, 150) + "..."
      : project.shortDescription;

  return (
    <GridItem display="flex">
      <Card width="full">
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Box
              mb={{
                base: 3,
                md: 4,
                lg: 5,
              }}
              aspectRatio="16/9"
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={project.images[0].url}
                className="absolute"
                fill
                alt={project.images[0].alt}
              />
            </Box>
            <Text
              mt={{
                base: 5,
              }}
              mb={{
                base: 3,
              }}
              fontSize={{
                base: "xl",
                sm: "3xl",
                md: "2xl",
              }}
              fontWeight="semibold"
              textOverflow="ellipsis"
            >
              {project.name}
            </Text>
            <Text
              fontSize={{
                base: "sm",
                md: "md",
              }}
            >
              {description}
            </Text>
          </Box>
          <Box
            mt={{
              base: 10,
              sm: 12,
            }}
            display="flex"
            justifyContent="space-between"
          >
            <Button
              as="a"
              href={`${AppRoute.projectPage}/${project.slug}`}
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
            <Box display="flex" gap={1}>
              {project.github && (
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FaGithub />
                </Button>
              )}
              {project.url && (
                <Button
                  as="a"
                  href={project.url}
                  target="_blank"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FaGlobe />
                </Button>
              )}
            </Box>
          </Box>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default ProjectItem;
