import React from "react";
import { Container, TopBar, Content } from "./styles";

import { NotificationElement } from "components/NotificationElement";

export const NotificationPanel = ({ handleCursor }) => {
  return (
    <Container
      onMouseEnter={() => handleCursor(true)}
      onMouseLeave={() => handleCursor(false)}
    >
      <TopBar />
      <Content>
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
      </Content>
    </Container>
  );
};
