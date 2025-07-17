import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import { getCommonData } from "@/sanity/services/common.service";

import FooterLink from "./FooterLink";

const Footer = async () => {
  const commonData = await getCommonData();

  commonData.push({
    name: "Email",
    icon: {
      _type: "icon",
      name: "MdMail",
      provider: "md",
    },
    url: "mailto:revanandwi@gmail.com",
  });

  return (
    <Box width="full" zIndex={2} backgroundColor="transparent">
      <Divider
        mt={{
          base: 5,
          sm: 7,
          md: 9,
          lg: 12,
        }}
        width={{
          base: "92%",
          sm: "90%",
          md: "80%",
          lg: "70%",
        }}
        mx="auto"
        borderWidth={1}
      />
      <Flex
        mx="auto"
        py={3}
        width={{
          base: "92%",
          sm: "90%",
          md: "80%",
          lg: "70%",
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontSize={{
            base: "xs",
            sm: "md",
          }}
        >
          &copy; {new Date().getFullYear()} revanantyo.com
        </Text>
        <FooterLink data={commonData} />
      </Flex>
    </Box>
  );
};

export default Footer;
