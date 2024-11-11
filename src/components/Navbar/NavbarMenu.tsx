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
  const menuColorHover = useColorModeValue(
    "brownPrimary.700",
    "blueAccent.500",
  );

  return (
    <Flex my="auto" justifyItems="center" {...props}>
      {ListMenu.map((value, index) => {
        return (
          <Box key={index} fontWeight="semibold" fontSize="md">
            <Link
              href={value.path}
              _hover={{
                color: menuColorHover,
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
