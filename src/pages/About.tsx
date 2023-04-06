import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { URL_ROOT } from "../const";

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
        <Link href={`${URL_ROOT}/about/works`}>Works</Link>
        <Link href={`${URL_ROOT}/about/career`}>Career</Link>
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
