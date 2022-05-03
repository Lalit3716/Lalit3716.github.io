import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import AboutSection from "./components/Sections/About";
import ProjectsSection from "./components/Sections/Projects";

const App = () => {
  return (
    <Box minHeight="100vh" bgcolor="#e1dfdd">
      <Header />
      <AboutSection />
      <ProjectsSection />
    </Box>
  );
};

export default App;
