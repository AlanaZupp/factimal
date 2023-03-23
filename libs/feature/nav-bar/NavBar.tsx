import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";
import { LogoIcon } from "../../ui/logo-icon/LogoIcon";

interface NavBarProps {}

//add clicking to home support
export const NavBar: FC<NavBarProps> = () => (
  <AppBar position="static">
    <Toolbar disableGutters>
      <Box sx={{ mr: 2, ml: 2 }}>
        <LogoIcon />
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: "flex",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Factimal
      </Typography>
    </Toolbar>
  </AppBar>
);
