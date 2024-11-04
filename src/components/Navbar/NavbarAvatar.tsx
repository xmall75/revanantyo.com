import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";

import { AppRoute } from "@/constants/app_route";

const NavbarAvatar = () => {
  return (
    <LinkBox
      my="auto"
      boxSize={45}
      position="relative"
      overflow="hidden"
      borderRadius="full"
    >
      <LinkOverlay href={AppRoute.index}>
        <Image src="/images/logo.svg" alt="Revanantyo Dwigantara" fill />
      </LinkOverlay>
    </LinkBox>
  );
};

export default NavbarAvatar;
