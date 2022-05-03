import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Project: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Project title
        </Typography>
        <Typography variant="body2" component="p">
          Project description
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
