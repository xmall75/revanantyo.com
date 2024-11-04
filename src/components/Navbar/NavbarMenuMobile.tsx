"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenu3Fill } from "react-icons/ri";

import NavbarAvatar from "./NavbarAvatar";
import NavbarMenu from "./NavbarMenu";
import ToggleThemeButton from "../Button/ToggleThemeButton";

const NavbarMobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        my="auto"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <RiMenu3Fill onClick={onOpen} size={30} className="cursor-pointer" />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent zIndex={102}>
          <DrawerHeader display="flex" justifyContent="space-between">
            <NavbarAvatar />
            <ToggleThemeButton />
          </DrawerHeader>

          <DrawerBody mt={10}>
            <NavbarMenu gap={7} display="flex" flexDirection="column" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;
