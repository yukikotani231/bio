import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

const Career = () => {
  return (
    <Box>
      <Heading>Career</Heading>
    </Box>
  );
};

const Works = () => {
  return (
    <Box>
      <Heading>Works</Heading>
    </Box>
  );
};

const AboutSub = () => {
  return (
    <Box>
      <Heading>About</Heading>
      <Stack direction={"column"}>
        <Link href={"/about/works"}>Works</Link>
        <Link href={"/about/career"}>Career</Link>
      </Stack>
    </Box>
  );
};

export const About = () => {
  return (
    <Routes>
      <Route path="" element={<AboutSub />} />
      <Route path="career" element={<Career />} />
      <Route path="works" element={<Works />} />
    </Routes>
  );
};
