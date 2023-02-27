import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";

export default function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const changeNavbarBackground = () => {
    window.scrollY >= 66
      ? setNavbarBackground(true)
      : setNavbarBackground(false);
  };

  useEffect(() => {
    changeNavbarBackground();
    window.addEventListener("scroll", changeNavbarBackground);
  }, [navbarBackground]);

  return (
    <Box>
      <AppBar
        position="fixed"
        style={
          navbarBackground
            ? {
                backgroundColor: "var(--global-primary-color)",
                animation: "ease-in",
                transition: "500ms",
              }
            : { backgroundColor: "transparent" }
        }
        sx={{ boxShadow: "none", paddingBottom: "0rem" }}
      >
        <Toolbar>
          <div className="logo">
            <Typography variant="h6">Arquitectura Creativa</Typography>
          </div>
          <div className="sections">
            <ul className="sections-list">
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#projects">Trabajos</a>
              </li>
              <li>
                <a href="#testimonials">Testimonios</a>
              </li>
              <li>
                <a href="#about-us">Sobre nosotros</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
