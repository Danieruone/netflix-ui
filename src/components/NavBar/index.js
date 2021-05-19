import React from "react";
// styles
import { NavContainer, LeftContent } from "./styles";
// images
import netflixLogo from "assets/images/netflix-logo.png";

export const NavBar = () => {
  return (
    <NavContainer>
      <LeftContent>
        <img src={netflixLogo} alt="Netflix Logo" />
        <ul>
          <li>Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>Novedades populares</li>
          <li>Mi lista</li>
        </ul>
      </LeftContent>
    </NavContainer>
  );
};
