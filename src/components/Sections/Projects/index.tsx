import React, { useEffect } from "react";
import { Container, Stack, Typography } from "@mui/material";
import useInViewAnim from "../../../hooks/useInViewAnim";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import Project from "./Project";

const Projects = [
  {
    id: "p1",
    title: "Homework Scheduler",
    description:
      "Helps teachers decide homework deadlines by keeping a track of other commitments and assignments of the students. 🧑‍🏫🧑‍🎓",
  },
  {
    id: "p2",
    title: "Chat App",
    description: "A simple chat app for friends. 💬🤖",
  },
];

const ProjectsSection = () => {
  const { ref, animState } = useInViewAnim({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 1000,
    loop: true,
  });

  return (
    <animated.div ref={ref} style={animState}>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Typography variant="h1" component="h2" fontWeight={500} gutterBottom>
          Projects
        </Typography>
        <Stack spacing={2}>
          {Projects.map(project => (
            <Project title={project.title} description={project.description} />
          ))}
        </Stack>
      </Container>
    </animated.div>
  );
};

export default ProjectsSection;
