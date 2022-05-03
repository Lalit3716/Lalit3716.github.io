import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import AboutSection from "./components/Sections/About";
import ProjectsSection from "./components/Sections/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box>
      <Header />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </Box>
  );
};

export default App;
