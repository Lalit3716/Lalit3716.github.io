import React from "react";
import { Stack, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { AnimatedTypography } from "../../Animations/index";

const HeroTitle = () => {
  const dynamicAnim = (delay: number) => {
    return useSpring({
      from: { opacity: 0, transform: "translateY(-100px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      delay,
    });
  };

  const delay = 50;

  return (
    <Stack spacing={0} color="black">
      <Stack
        direction="row"
        spacing={{ xs: 1, md: 3 }}
        alignItems={{ md: "center", xs: "flex-start" }}
      >
        <Stack direction="row" color="#da2626">
          {Array.from("Full").map((l, i) => {
            return (
              <AnimatedTypography
                variant="h1"
                fontWeight="800"
                fontSize={{ xs: "3rem", md: "5rem" }}
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
                fontSize={{ xs: "3rem", md: "5rem" }}
                style={dynamicAnim((i + 4) * delay)}
                key={i}
              >
                {l}
              </AnimatedTypography>
            );
          })}
        </Stack>
      </Stack>
      <Stack direction="row" spacing={{ md: 3, xs: 1 }}>
        <Stack direction="row">
          {Array.from("Web").map((l, i) => {
            return (
              <AnimatedTypography
                variant="h1"
                fontWeight="800"
                fontSize={{ xs: "3rem", md: "5rem" }}
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
                fontWeight="800"
                fontSize={{ xs: "3rem", md: "5rem" }}
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
