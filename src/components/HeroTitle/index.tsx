import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useSpring } from "react-spring";
import { AnimatedTypography } from "../Animations/index";

const HeroTitle = () => {
  const dynamicAnim = (delay: number) => {
    return useSpring({
      from: { opacity: 0, transform: "translateY(-100px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      delay,
    });
  };

  return (
    <Stack direction="row">
      {Array.from("Web developer").map((l, i) => {
        return (
          <AnimatedTypography
            variant="h1"
            fontWeight="800"
            style={dynamicAnim(i * 100)}
          >
            {l}
          </AnimatedTypography>
        );
      })}
    </Stack>
  );
};

export default HeroTitle;
