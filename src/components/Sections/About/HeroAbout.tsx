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
    <AnimatedStack spacing={3} maxWidth="md" mt={4} style={aboutAnim}>
      <Typography
        variant="h4"
        fontWeight={300}
        sx={{ fontSize: "1.7rem", sm: "2.5rem" }}
      >
        Passionate about web technologies. I love working at the intersection of
        creativity and user friendly interfaces. I create memorable web
        experiences.
      </Typography>
      <Typography
        variant="h4"
        fontWeight={300}
        sx={{ fontSize: "1.7rem", sm: "2.5rem" }}
      >
        When I'm not building or exploring new web experiences, I'm probably
        listening music or playing games.
      </Typography>
    </AnimatedStack>
  );
};

export default HeroAbout;
