import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { listMenu } from "@/constants/list_menu";

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
        <Box
          my="auto"
          boxSize={{
            base: 20,
            sm: 30,
            lg: 45,
          }}
          position="relative"
          overflow="hidden"
          borderRadius="full"
        >
          <Image
            src="/images/avatar_navbar.png"
            alt="Revanantyo Dwigantara"
            fill
            className="scale-x-[-1]"
          />
        </Box>
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
