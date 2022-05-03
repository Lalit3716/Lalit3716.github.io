import React from "react";
import { Typography } from "@mui/material";
import { useSpring } from "react-spring";
import { AnimatedStack } from "../../Animations";

const HeroAbout = () => {
  const aboutAnim = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 500,
  });

  return (
    <AnimatedStack spacing={4} maxWidth="md" mt={4} style={aboutAnim}>
      <Typography variant="h4" fontWeight={200}>
        PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF
        CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB
        EXPERIENCES.
      </Typography>
      <Typography variant="h4" fontWeight={200}>
        WHEN I'M NOT BUILDING OR EXPLORING NEW WEB EXPERIENCES, I'M PROBABLY
        LISTENING MUSIC OR PLAYING GAMES.
      </Typography>
    </AnimatedStack>
  );
};

export default HeroAbout;
