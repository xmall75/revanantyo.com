import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";

import { AppRoute } from "@/constants/app_route";

const NavbarAvatar = () => {
  return (
    <LinkBox
      my="auto"
      position="relative"
      boxSize={45}
      overflow="hidden"
      borderRadius="full"
    >
      <LinkOverlay
        width="full"
        height="full"
        href={AppRoute.index}
        position="absolute"
      >
        <Image
          priority
          src="/images/logo.svg"
          alt="Revanantyo Dwigantara"
          fill
        />
      </LinkOverlay>
    </LinkBox>
  );
};

export default NavbarAvatar;
