import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MUILink from "@mui/material/Link";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import classes from "./index.module.scss";

const Footer = () => (
  <Box component="footer" bgcolor="#131516" color="#d8d4cf" mt={5}>
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Stack alignItems="center" spacing={-1.5}>
          <Typography variant="h6" component="h6" gutterBottom>
            <MUILink
              href="https://github.com/Lalit3716"
              color="inherit"
              target="_none"
            >
              <GitHub />
            </MUILink>
          </Typography>
          <Typography
            variant="caption"
            component="a"
            gutterBottom
            href="https://github.com/Lalit3716"
            target="_none"
            className={classes.links}
          >
            Github
          </Typography>
        </Stack>
        <Stack alignItems="center" spacing={-1.5}>
          <Typography variant="h6" component="h6" gutterBottom>
            <MUILink
              href="mailto:lalitkumarsingh5050@gmail.com"
              color="inherit"
            >
              <Email />
            </MUILink>
          </Typography>
          <Typography
            variant="caption"
            component="a"
            gutterBottom
            href="mailto:lalitkumarsingh5050@gmail.com"
            className={classes.links}
          >
            Email
          </Typography>
        </Stack>
        <Stack alignItems="center" spacing={-1.5}>
          <Typography variant="h6" gutterBottom>
            <MUILink
              color="inherit"
              href="https://www.linkedin.com/in/lalit-kumar-singh-b48523228/"
              target="_none"
            >
              <LinkedIn />
            </MUILink>
          </Typography>
          <Typography
            variant="caption"
            component="a"
            href="https://www.linkedin.com/in/lalit-kumar-singh-b48523228/"
            target="_none"
            gutterBottom
            className={classes.links}
          >
            LinkedIn
          </Typography>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
