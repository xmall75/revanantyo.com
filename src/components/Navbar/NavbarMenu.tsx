import { Box, Flex, Link } from "@chakra-ui/react";

import { listMenu } from "@/constants/list_menu";

const NavbarMenu = () => {
  return (
    <Flex
      my="auto"
      display={{
        base: "none",
        md: "flex",
      }}
      gap={{
        md: 5,
        lg: 7,
      }}
    >
      {listMenu.map((value, index) => {
        return (
          <Box key={index} fontWeight="semibold" fontSize="sm">
            <Link href={value.path}>{value.title}</Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default NavbarMenu;
