import { Box, Flex } from "@chakra-ui/react";

import NavbarAvatar from "./NavbarAvatar";
import NavbarMenu from "./NavbarMenu";
import ToggleThemeButton from "../Button/ToggleThemeButton";

const Navbar = () => {
  return (
    <Box
      _dark={{
        bg: "dark.500",
      }}
      _light={{
        bg: "light.50",
        boxShadow: "md",
      }}
      height={{
        base: 50,
        lg: 65,
      }}
      width="100%"
    >
      <Flex
        mx="auto"
        height="100%"
        width={{
          base: "95%",
          sm: "90%",
          md: "80%",
          lg: "70%",
        }}
        justifyContent="space-between"
        justifyItems="center"
      >
        <NavbarAvatar />
        <NavbarMenu />
        <Box
          my="auto"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <ToggleThemeButton />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
