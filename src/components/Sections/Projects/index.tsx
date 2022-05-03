import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import useInViewAnim from "../../../hooks/useInViewAnim";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
  const { ref, animState } = useInViewAnim({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 1000,
  });

  return (
    <animated.div ref={ref} style={animState}>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Typography variant="h1" component="h2" fontWeight={500}>
          Projects
        </Typography>
      </Container>
    </animated.div>
  );
};

export default ProjectsSection;
