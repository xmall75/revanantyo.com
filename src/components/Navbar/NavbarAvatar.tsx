import { Box } from "@chakra-ui/react";
import Image from "next/image";

const NavbarAvatar = () => {
  return (
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
  );
};

export default NavbarAvatar;
