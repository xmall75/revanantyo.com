import { Box, Image } from "@chakra-ui/react";

const HeroAvatar = () => {
  return (
    <Box right={0} bottom={-10} width={350} height={420} position="absolute">
      <Image src="/images/profile/profile.jpg" objectFit="cover" alt="" />
    </Box>
  );
};

export default HeroAvatar;
