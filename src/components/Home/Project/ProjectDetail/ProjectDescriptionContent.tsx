import { Box, Text } from "@chakra-ui/react";
import { FaBookOpen, FaGithub, FaGlobe } from "react-icons/fa";

import NavigationButton from "@/components/Button/NavigationButton";
import GradientText from "@/components/GradientText";

import { AppRoute } from "@/constants/app_route";
import { gradientBrown, gradientMagenta } from "@/constants/gradient_color";

import type { IProjectSchema } from "@/types/project";

interface ProjectDescriptionProps {
  project: IProjectSchema;
}

const ProjectDescriptionContent = ({ project }: ProjectDescriptionProps) => {
  return (
    <Box
      width="full"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <GradientText
          text={project.name}
          lightModeColor={gradientBrown}
          darkModeColor={gradientMagenta}
          minHeight={12}
          fontSize={{
            base: "2xl",
            md: "xl",
            lg: "3xl",
          }}
          fontWeight="bold"
          transition="0.3s ease!important"
        />
        <Text
          fontSize={{
            base: "sm",
            sm: "md",
          }}
          mt={{
            base: 5,
            md: 2,
            lg: 5,
          }}
        >
          {project.shortDescription}
        </Text>
      </Box>
      <Box
        mt={{
          base: 12,
          sm: 14,
        }}
        display="flex"
        gap={2}
      >
        <NavigationButton
          url={`${AppRoute.projectPage}/${project.slug}`}
          text="Read More"
          icon={<FaBookOpen />}
        />
        {project.github && (
          <NavigationButton
            url={project.github}
            text="Github"
            icon={<FaGithub />}
            buttonProps={{
              target: "_blank",
            }}
            textProps={{
              display: {
                base: "none",
                md: "inline",
              },
            }}
          />
        )}
        {project.url && (
          <NavigationButton
            url={project.url}
            text="Website"
            icon={<FaGlobe />}
            buttonProps={{
              target: "_blank",
            }}
            textProps={{
              display: {
                base: "none",
                md: "inline",
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ProjectDescriptionContent;
