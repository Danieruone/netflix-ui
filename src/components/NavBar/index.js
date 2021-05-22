import React, { useEffect, useState } from "react";
// styles
import { NavContainer, LeftContent, RightContent } from "./styles";
// images
import netflixLogo from "assets/images/netflix-logo.png";
// icons
import { BsFillBellFill } from "react-icons/bs";

export const NavBar = () => {
  const [navState, setNavState] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 1) {
        setNavState(true);
      } else {
        setNavState(false);
      }
    });
  }, []);

  return (
    <NavContainer navState={navState}>
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
      <RightContent>
        <BsFillBellFill />
      </RightContent>
    </NavContainer>
  );
};
