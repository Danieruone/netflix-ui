import React from "react";
import { Container, TopBar, Content } from "./styles";

import { NotificationElement } from "components/NotificationElement";
import { content } from "content.js";

export const NotificationPanel = ({ handleCursor }) => {
  return (
    <Container
      onMouseEnter={() => handleCursor(true)}
      onMouseLeave={() => handleCursor(false)}
    >
      <TopBar />
      <Content>
        {content.map((element, idx) => {
          return <NotificationElement key={idx} img={element.photo} />;
        })}
      </Content>
    </Container>
  );
};
