import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardContent, Typography, Box, Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import useInViewAnim from "../../../hooks/useInViewAnim";
import { AnimatedCard, fadeInFromBottom } from "../../Animations";

interface Props {
  title: string;
  description: string;
  images: string[];
}

const Project: React.FC<Props> = props => {
  const { ref, animState } = useInViewAnim({
    ...fadeInFromBottom,
    delay: 1000,
    threshold: 0.2,
  });

  return (
    <Grid item xs={12} md={6}>
      <AnimatedCard ref={ref} style={animState}>
        <CardContent>
          <Carousel swipeable showThumbs={false}>
            {props.images.map((image, i) => (
              <div key={i}>
                <img src={image} alt="project" />
              </div>
            ))}
          </Carousel>
          <Box mt={2}>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </Box>
        </CardContent>
      </AnimatedCard>
    </Grid>
  );
};

export default Project;
