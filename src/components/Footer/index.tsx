import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MUILink from "@mui/material/Link";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => (
  <Box component="footer" bgcolor="#131516" color="#d8d4cf" mt={5}>
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Stack alignItems="center" spacing={-1.5}>
          <Typography variant="h6" component="h6" gutterBottom>
            <MUILink href="" color="inherit">
              <GitHub />
            </MUILink>
          </Typography>
          <Typography variant="caption" component="h6" gutterBottom>
            Github
          </Typography>
        </Stack>
        <Stack alignItems="center" spacing={-1.5}>
          <Typography variant="h6" component="h6" gutterBottom>
            <MUILink href="" color="inherit">
              <LinkedIn />
            </MUILink>
          </Typography>
          <Typography variant="caption" component="h6" gutterBottom>
            Email
          </Typography>
        </Stack>
        <Stack alignItems="center" spacing={-1.5}>
          <Typography variant="h6" component="h6" gutterBottom>
            <MUILink href="" color="inherit">
              <Email />
            </MUILink>
          </Typography>
          <Typography variant="caption" component="h6" gutterBottom>
            LinkedIn
          </Typography>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
