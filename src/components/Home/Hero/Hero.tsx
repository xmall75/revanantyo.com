import { Container } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container
      width={{
        base: "95%",
        sm: "90%",
        md: "80%",
        lg: "70%",
      }}
      border="1px solid red"
    >
      Test
    </Container>
  );
};

export default Hero;
