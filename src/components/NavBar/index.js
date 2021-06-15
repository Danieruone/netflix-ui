import React, { useEffect, useState, useRef } from "react";
// styles
import { NavContainer, LeftContent, RightContent } from "./styles";
// images
import netflixLogo from "assets/images/netflix-logo.png";
// icons
import { BsFillBellFill } from "react-icons/bs";
// components
import { NotificationPanel } from "components/NotificationPanel";

export const NavBar = () => {
  const [navState, setNavState] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  let timer = useRef();

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

  let handleCursor = (isInside) => {
    if (!isInside) {
      timer.current = setTimeout(() => {
        setShowNotifications(false);
      }, 300);
    } else {
      clearTimeout(timer.current);
      return setShowNotifications(true);
    }
  };

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
        <div styles={{ position: "relative" }}>
          <BsFillBellFill
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleCursor(true)}
            onMouseLeave={() => handleCursor(false)}
          />
          {showNotifications && (
            <NotificationPanel handleCursor={handleCursor} />
          )}
        </div>
      </RightContent>
    </NavContainer>
  );
};
