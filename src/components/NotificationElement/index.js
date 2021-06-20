import React from "react";
import { Container } from "./stytles";

export const NotificationElement = ({ img }) => {
  return (
    <Container>
      <img src={img} alt="Serie" />
      <div>
        <p>Continuar viendo</p>
        <p>hace 1 semana</p>
      </div>
    </Container>
  );
};
