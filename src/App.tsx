import React from "react";
import { Container, Typography, Stack, Box } from "@mui/material";
import { useSpring } from "react-spring";
import Header from "./components/Header";
import { AnimatedTypography } from "./components/Animations";
import HeroTitle from "./components/HeroTitle";
import HeroAbout from "./components/HeroAbout";

const App = () => {
  return (
    <Box height="100vh" bgcolor="#e1dfdd">
      <Header />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <HeroTitle />
        <HeroAbout />
      </Container>
    </Box>
  );
};

export default App;
