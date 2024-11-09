"use client";

import {
  Box,
  Flex,
  HTMLChakraProps,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { ListMenu } from "@/constants/list_menu";

const NavbarMenu = (props: HTMLChakraProps<"div">) => {
  const MenuColor = useColorModeValue("dark.200", "dark.300");

  return (
    <Flex my="auto" justifyItems="center" {...props}>
      {ListMenu.map((value, index) => {
        return (
          <Box
            key={index}
            fontWeight="semibold"
            fontSize={{
              base: "md",
              lg: "sm",
            }}
          >
            <Link
              href={value.path}
              _hover={{
                color: MenuColor,
                textDecoration: "none",
              }}
              transition="color 0.1s ease-out!important"
            >
              {value.title}
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default NavbarMenu;
