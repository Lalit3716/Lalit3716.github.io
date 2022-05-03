import React from "react";
import { Container, Grid } from "@mui/material";
import useInViewAnim from "../../../hooks/useInViewAnim";
import Project from "./Project";
import { AnimatedTypography } from "../../Animations";
import Projects from "../../../data/projects";

const ProjectsSection = () => {
  const { ref, animState } = useInViewAnim({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 1000,
    threshold: 0.1,
  });

  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <AnimatedTypography
        ref={ref}
        variant="h3"
        fontWeight={500}
        gutterBottom
        style={animState}
      >
        Projects
      </AnimatedTypography>
      <Grid container spacing={2}>
        {Projects.map((project, index) => (
          <Project
            title={project.title}
            description={project.description}
            images={project.images}
            key={project.id}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
