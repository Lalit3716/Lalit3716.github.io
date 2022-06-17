import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import { Stack } from "@mui/material";
import { AnimatedTypography, AnimatedStack } from "../../Animations/index";

const words = ["Web Developer", "React Developer", "Android Developer"];

let speedInterval: NodeJS.Timer;
let nextIndexInterval: NodeJS.Timer;
let timeout: NodeJS.Timeout;

const HeroTitle = () => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [speed, setSpeed] = useState(200);
  const [isAnimating, setIsAnimating] = useState(true);
  const cursorBlinkAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    loop: true,
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 500,
    },
    delay: 800,
  });

  useEffect(() => {
    speedInterval = setInterval(() => {
      setSpeed((prevSpeed) => prevSpeed - 10);
    }, 100);

    return () => {
      clearInterval(speedInterval);
      clearInterval(nextIndexInterval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (nextIndexInterval) {
      clearInterval(nextIndexInterval);
    }
    nextIndexInterval = setInterval(() => {
      if (isAnimating) {
        setNextIndex((prevNextIndex) => {
          const nextIndex = prevNextIndex + 1;
          return nextIndex;
        });
      }
    }, speed);
  }, [speed]);

  useEffect(() => {
    if (nextIndex === words[index].length) {
      setIsAnimating(false);
      timeout = setTimeout(() => {
        setIsAnimating(true);
        setNextIndex(0);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setSpeed(200);
      }, 2000);
    }
  }, [nextIndex]);

  return (
    <AnimatedStack direction="column" alignItems="center" style={fadeIn}>
      <AnimatedTypography
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "3rem",
          },
        }}
        textAlign="center"
      >
        Hi There!
      </AnimatedTypography>
      <AnimatedTypography
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "3rem",
          },
        }}
        textAlign="center"
      >
        I am Lalit and I am{" "}
        {"aeiou".includes(words[index][0].toLowerCase()) ? "an" : "a"}
      </AnimatedTypography>
      <AnimatedTypography
        variant="h2"
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "3rem",
          },
          fontWeight: "bold",
        }}
      >
        {words[index].substring(0, nextIndex)}
        <AnimatedTypography
          variant="h2"
          // @ts-ignore
          component="span"
          fontWeight={500}
          style={cursorBlinkAnim}
          sx={{
            fontSize: "3rem",
          }}
        >
          |
        </AnimatedTypography>
      </AnimatedTypography>
    </AnimatedStack>
  );
};

export default HeroTitle;
