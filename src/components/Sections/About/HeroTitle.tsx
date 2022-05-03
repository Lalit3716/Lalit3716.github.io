import React from "react";
import { Stack, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { AnimatedTypography } from "../../Animations/index";
import classes from "./index.module.scss";

const HeroTitle = () => {
  const dynamicAnim = (delay: number) => {
    return useSpring({
      from: { opacity: 0, transform: "translateY(-100px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      delay,
    });
  };

  const anim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

  const delay = 50;

  return (
    <Stack spacing={0} color="black" fontSize={{ md: "6rem", xs: "5rem" }}>
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={3}
        alignItems={{ md: "center", xs: "flex-start" }}
      >
        <Stack direction="row" color="#da2626">
          {Array.from("Full").map((l, i) => {
            return (
              <AnimatedTypography
                variant="h1"
                fontWeight="800"
                style={dynamicAnim(i * delay)}
                key={i}
              >
                {l}
              </AnimatedTypography>
            );
          })}
        </Stack>
        <Stack direction="row" alignItems={{ md: "center", xs: "flex-start" }}>
          {Array.from("Stack").map((l, i) => {
            return (
              <AnimatedTypography
                variant="h1"
                fontWeight="800"
                style={dynamicAnim((i + 4) * delay)}
                key={i}
              >
                {l}
              </AnimatedTypography>
            );
          })}
        </Stack>
        <Box
          alignSelf="flex-start"
          className={classes.image}
          display={{ xs: "none", md: "block" }}
        >
          <animated.img src="/hi.gif" style={anim} />
        </Box>
      </Stack>
      <Stack direction={{ md: "row", xs: "column" }} spacing={3}>
        <Stack direction="row">
          {Array.from("Web").map((l, i) => {
            return (
              <AnimatedTypography
                variant="h1"
                fontWeight="800"
                fontSize={{ md: "h1", xs: "h1" }}
                style={dynamicAnim((i + 9) * delay)}
                key={i}
              >
                {l}
              </AnimatedTypography>
            );
          })}
        </Stack>
        <Stack direction="row" color="#da2626">
          {Array.from("Developer").map((l, i) => {
            return (
              <AnimatedTypography
                variant="h1"
                fontSize={{ md: "h1", xs: "h2" }}
                fontWeight="800"
                style={dynamicAnim((i + 12) * delay)}
                key={i}
              >
                {l}
              </AnimatedTypography>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroTitle;
