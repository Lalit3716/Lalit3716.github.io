import { Stack, Typography, Card, Box } from "@mui/material";
import { animated } from "react-spring";

export const AnimatedTypography = animated(Typography);
export const AnimatedStack = animated(Stack);
export const AnimatedCard = animated(Card);
export const AnimatedBox = animated(Box);

export const fadeInFromLeft = {
  from: { opacity: 0, transform: "translateX(-100px)" },
  to: { opacity: 1, transform: "translateX(0)" },
};

export const fadeInFromRight = {
  from: { opacity: 0, transform: "translateX(100px)" },
  to: { opacity: 1, transform: "translateX(0)" },
};

export const fadeInFromTop = {
  from: { opacity: 0, transform: "translateY(-100px)" },
  to: { opacity: 1, transform: "translateY(0)" },
};

export const fadeInFromBottom = {
  from: { opacity: 0, transform: "translateY(100px)" },
  to: { opacity: 1, transform: "translateY(0)" },
};

export const blink = {
  from: { opacity: 0 },
  to: { opacity: 1 },
};
