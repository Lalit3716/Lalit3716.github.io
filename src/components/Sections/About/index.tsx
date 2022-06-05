import React from "react";
import { Container, Grid, Box } from "@mui/material";
import HeroTitle from "./HeroTitle";
import HeroAbout from "./HeroAbout";

const AboutSection = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }} id="about">
      <Grid container>
        <Grid item xs={12} order={{ xs: 2, md: 1 }} mb={{ md: 10, xs: 2 }}>
          <HeroTitle />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 3, md: 2 }}>
          <HeroAbout />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 3 }} mb={4}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              style={{
                maxWidth: "350px",
                maxHeight: "350px",
                objectFit: "contain",
              }}
              src="/images/svgs/developer.svg"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
