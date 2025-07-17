import { Box, Divider } from "@chakra-ui/react";

import { getCommonData } from "@/sanity/services/common.service";

import HeroMainSocialMediaGrid from "./HeroMainSocialMediaGrid";

const HeroMainSocialMedia = async () => {
  const commonData = await getCommonData();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={6}>
      <Divider
        borderWidth={2}
        display={{
          base: "none",
          sm: "inline",
        }}
      />
      <HeroMainSocialMediaGrid data={commonData} />
    </Box>
  );
};

export default HeroMainSocialMedia;
