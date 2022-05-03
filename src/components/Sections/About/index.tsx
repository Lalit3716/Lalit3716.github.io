import React from "react";
import { Container, Stack, Box } from "@mui/material";
import HeroTitle from "./HeroTitle";
import HeroAbout from "./HeroAbout";

const AboutSection = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <HeroTitle />
          <HeroAbout />
        </Box>
      </Stack>
    </Container>
  );
};

export default AboutSection;
