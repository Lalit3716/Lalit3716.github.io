import React from "react";
import { Stack, Typography } from "@mui/material";

const HeroAbout = () => {
  return (
    <Stack spacing={2} maxWidth="md" mt={2}>
      <Typography variant="h4" fontWeight={300}>
        PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF
        CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB
        EXPERIENCES.
      </Typography>
      <Typography variant="h4" fontWeight={300}>
        WHEN I'M NOT BUILDING OR EXPLORING NEW WEB EXPERIENCES, I'M PROBABLY
        PLAYING GAMES OR WATCHING FOOTBALL.
      </Typography>
    </Stack>
  );
};

export default HeroAbout;
