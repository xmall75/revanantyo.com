import { Box, Button, Text } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

import { AppRoute } from "@/constants/app_route";

import ProjectThumbnail from "./ProjectThumbnail";

import { IProjectSchema } from "@/types/project";

interface ProjectDescriptionProps {
  project: IProjectSchema;
  position: "left" | "right";
}

const ProjectDescription = ({ project, position }: ProjectDescriptionProps) => {
  if (position === "left") {
    return (
      <Box
        display="flex"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        justifyContent={{
          base: "center",
          md: "space-between",
        }}
        gap={{
          base: 2,
          sm: 3,
          md: 4,
          lg: 5,
        }}
      >
        <ProjectThumbnail thumbnail={project.thumbnail} />
        <Box
          width="full"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text
            minHeight={{
              base: 12,
            }}
            fontSize={{
              base: "2xl",
              md: "xl",
              lg: "3xl",
            }}
            fontWeight="bold"
          >
            {project.name}
          </Text>
          <Text
            fontSize={{
              base: "sm",
              sm: "md",
            }}
          >
            {project.shortDescription}
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
            {project.github && (
              <Button
                as="a"
                href={project.github}
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
            {project.url && (
              <Button
                as="a"
                href={project.url}
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
  }

  return (
    <Box
      display="flex"
      flexDirection={{
        base: "column",
        md: "row-reverse",
      }}
      justifyContent={{
        base: "center",
        md: "space-between",
      }}
      gap={{
        base: 2,
        sm: 3,
        md: 4,
        lg: 5,
      }}
    >
      <ProjectThumbnail thumbnail={project.thumbnail} />
      <Box
        width="full"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text
          minHeight={{
            base: 12,
          }}
          fontSize={{
            base: "2xl",
            md: "xl",
            lg: "3xl",
          }}
          fontWeight="bold"
        >
          {project.name}
        </Text>
        <Text
          fontSize={{
            base: "sm",
            sm: "md",
          }}
        >
          {project.shortDescription}
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
          {project.github && (
            <Button
              as="a"
              href={project.github}
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
          {project.url && (
            <Button
              as="a"
              href={project.url}
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
