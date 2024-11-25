import { Box, Button, Text } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";

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
        base: 3,
        lg: 5,
      }}
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
      )}
    </Box>
  );
};

export default ProjectDetailContent;
