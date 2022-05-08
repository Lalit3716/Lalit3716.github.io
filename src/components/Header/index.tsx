import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
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

  const linkAnim = useSpring({
    from: { opacity: 0, transform: "translateY(-500px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  return (
    <Stack
      p={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <AnimatedTypography variant="h1" style={titleAnim}>
        Lalit
      </AnimatedTypography>
      <Stack
        direction="row"
        spacing={4}
        mr={2}
        alignItems="center"
        display={{ xs: "none", md: "flex" }}
      >
        <Link to="#">
          <AnimatedTypography
            variant="h5"
            style={linkAnim}
            className={classes.link}
          >
            About
          </AnimatedTypography>
        </Link>
        <Link to="#">
          <AnimatedTypography
            variant="h5"
            style={linkAnim}
            className={classes.link}
          >
            Projects
          </AnimatedTypography>
        </Link>
        <Link to="#">
          <AnimatedTypography
            variant="h5"
            style={linkAnim}
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
