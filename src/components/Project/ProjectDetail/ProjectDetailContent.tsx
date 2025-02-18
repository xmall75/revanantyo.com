import { Box } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

import NavigationButton from "@/components/Button/NavigationButton";
import CustomPortableText from "@/components/CustomPortableText";

import { IProjectSchema } from "@/types/project";

interface ProjectDetailContentProps {
  content: IProjectSchema["content"];
  github: IProjectSchema["github"];
  url: IProjectSchema["url"];
}

const ProjectDetailContent = ({
  content,
  github,
  url,
}: ProjectDetailContentProps) => {
  return (
    <Box
      my={{
        base: 5,
        lg: 7,
        xl: 10,
      }}
      maxWidth={{
        lg: "90%",
        xl: "80%",
      }}
      textAlign="justify"
    >
      <CustomPortableText content={content} />
      {(github || url) && (
        <Box
          mt={{
            base: 12,
            sm: 14,
          }}
          display="flex"
          gap={2}
        >
          {github && (
            <NavigationButton
              url={github}
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
          {url && (
            <NavigationButton
              url={url}
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
      )}
    </Box>
  );
};

export default ProjectDetailContent;
