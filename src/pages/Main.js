import React from "react";
// styles
import { Hero } from "./styles";
// images
import logo from "../assets/images/rm-logo.png";

export const Main = () => {
  return (
    <Hero>
      <div className="desc-container">
        <img src={logo} alt="rick and morty logo" />
        <p>
          Tienes un asiento de copiloto en las aventuras intergalácticas e
          irreverentes de Rick, un científico loco sin pelos en la lengua, y
          Morty, su nieto.
        </p>
        <div className="btn-container">
          <button className="play-btn">Reproducir</button>
          <button className=" play-btn info-btn">Más Información</button>
        </div>
      </div>
    </Hero>
  );
};
