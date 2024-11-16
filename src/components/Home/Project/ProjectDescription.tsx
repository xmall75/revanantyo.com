import { Box, Button, Text } from "@chakra-ui/react";

import { IListProject } from "@/types/project";

interface ProjectDescriptionProps {
  description: IListProject["description"];
  links: IListProject["links"];
}

const ProjectDescription = ({
  description,
  links,
}: ProjectDescriptionProps) => {
  return (
    <Box>
      <Text fontSize="sm">{description}</Text>
      <Box
        display="flex"
        justifyContent="start"
        alignItems="start"
        gap={{
          base: 2,
        }}
      >
        {links.map((item, index) => {
          return (
            <Button
              key={index}
              as="a"
              mt={{
                base: 2,
                lg: 3,
              }}
              href={item.url}
              target="_blank"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={{
                md: 2,
              }}
            >
              <item.icon />
              <Text
                display={{
                  base: "none",
                  md: "inline",
                }}
                fontSize={{
                  base: "sm",
                }}
              >
                {item.title}
              </Text>
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProjectDescription;
