import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

import { IListProject } from "@/types/project";

interface ProjectDescriptionProps {
  images: IListProject["images"];
  description: IListProject["description"];
  links: IListProject["links"];
}

const ProjectDescription = ({
  images,
  description,
  links,
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
      >
        <Image src={images[0]} className="absolute" fill alt={images[0]} />
      </Box>
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
                  sm: 2,
                }}
              >
                <item.icon />
                <Text
                  display={{
                    base: "none",
                    sm: "inline",
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
    </Box>
  );
};

export default ProjectDescription;
