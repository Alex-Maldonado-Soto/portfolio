import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from "../Theme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);


  ///////Hay que crear un componente con emotion para hacer un navbar list y que no tenga tantos divs inecesarios

  const NavList = styled("li") ({
    textAlign: "center",
    padding: "10px 0",
    color: Theme.palette.text.secondary,

    "&:hover": {
      color: Theme.palette.primary.main
    }
  })

  return (
    <Box
      component={"nav"}
      position="absolute"
      sx={{
        padding: "0 5%",
        position: "sticky",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: "10vh",
      }}
    >
      <Typography
        variant="span"
        sx={{ color: "text.secondary", fontFamily: "Montserrat", fontWeight: "bold", fontSize: { md: "1.2rem", lg: "1.4rem" } }}
      >
        MALDEXANDER
      </Typography>
      <IconButton
        onClick={() => setOpenNav(!openNav)}
        sx={{color : "text.secondary", display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <List sx={{ display: { xs: "none", md: "flex" }, gap: "5rem", fontSize: { md: "1.2rem", lg: "1.4rem" } }}>
        <NavList>Inicio</NavList>
        <NavList>Conoceme</NavList>
        <NavList>Portafolio</NavList>
      </List>
      <Drawer
        component={"nav"}
        open={openNav}
        anchor="right"
        sx={{ display: { md: "none" } }}
      >
        <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
        <IconButton
            color="primary"
            onClick={() => setOpenNav(!openNav)}
            sx={{ justifyContent: "end" }}
          >
            <CloseIcon />
          </IconButton>
          <List sx={{ padding: "40px", textAlign: "left", fontSize: { xs: "1.2rem", sm: "1.4rem"} }}>
            <NavList>Inicio</NavList>
            <NavList>Conoceme</NavList>
            <NavList>Portafolio</NavList>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
