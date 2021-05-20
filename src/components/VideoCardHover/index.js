import React from "react";
// styles
import { Container, Detail } from "./styles";

export const VideoCardHover = ({ position, handleEnter, handleLeave }) => {
  return (
    <Container
      position={position}
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
    >
      <img
        src="https://occ-0-1595-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvbw253rjdf-lDxQgElGKjKa38YquVLfdyRu6L3XZnaunq4Inc5LXyH_KBfD6d7esLp09zMYWv_LvCFygghMWzB_LFiIxGr2tlSW5vMo97FUcZTe9BXBs7s_P-S.jpg?r=c25"
        alt="Serie"
      />
      <Detail>
        <h1>test</h1>
      </Detail>
    </Container>
  );
};
