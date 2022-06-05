import React from "react";
import classes from "./index.module.scss";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Stack } from "@mui/material";
import { useSpring, easings } from "react-spring";
import { AnimatedTypography } from "../Animations";

const Header = () => {
  const titleAnim = useSpring({
    from: { opacity: 0, transform: "translateX(-500px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: {
      duration: 500,
    },
  });

  const linkAnim = (delay: number = 0) =>
    useSpring({
      from: { opacity: 0, transform: "translateY(-500px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      delay,
    });

  return (
    <Stack
      p={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <AnimatedTypography
        variant="h1"
        style={titleAnim}
        sx={{
          fontSize: { xs: "4rem", sm: "5rem" },
          ml: 1,
        }}
      >
        Lalit
      </AnimatedTypography>
      <Stack
        direction="row"
        spacing={4}
        mr={2}
        alignItems="center"
        display={{ xs: "none", md: "flex" }}
      >
        <Link to="about" smooth duration={500} style={{ cursor: "pointer" }}>
          <AnimatedTypography
            variant="h5"
            style={linkAnim()}
            className={classes.link}
          >
            About
          </AnimatedTypography>
        </Link>
        <Link to="projects" smooth duration={500} style={{ cursor: "pointer" }}>
          <AnimatedTypography
            variant="h5"
            style={linkAnim(200)}
            className={classes.link}
          >
            Projects
          </AnimatedTypography>
        </Link>
        <Link to="skills" smooth duration={500} style={{ cursor: "pointer" }}>
          <AnimatedTypography
            variant="h5"
            style={linkAnim(500)}
            className={classes.link}
          >
            Skills
          </AnimatedTypography>
        </Link>
        <Link to="contact" smooth duration={500} style={{ cursor: "pointer" }}>
          <AnimatedTypography
            variant="h5"
            style={linkAnim(800)}
            className={classes.link}
          >
            Contact
          </AnimatedTypography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Header;
