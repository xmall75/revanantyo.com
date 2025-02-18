import { Box } from "@chakra-ui/react";

import Experience from "@/components/Home/Experience/Experience";
import Hero from "@/components/Home/Hero/Hero";
import Project from "@/components/Home/Project/Project";

export default function Home() {
  return (
    <Box
      width={{
        base: "92%",
        sm: "90%",
        md: "80%",
        lg: "70%",
      }}
      mx="auto"
    >
      <Hero />
      <Experience />
      <Project />
    </Box>
  );
}
