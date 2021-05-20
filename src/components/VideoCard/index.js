import React, { Fragment, useRef, useState } from "react";
import Styled from "styled-components";
import { VideoCardHover } from "components/VideoCardHover";
import { Portal } from "Portal/Portal";

export const Container = Styled.div`
  width: 300px;
  transition: .3s ease all;
  margin: 0px 23px 0px 23px;
  cursor: pointer;
  position: relative;
  & img{
    border-radius: 8px;
  }
`;

export const VideoCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const card = useRef();

  const handleEnter = () => {
    setIsHovering(true);
  };

  const handleLeave = () => {
    setIsHovering(false);
  };

  return (
    <Fragment>
      {isHovering && (
        <Portal>
          <VideoCardHover
            position={card.current.getBoundingClientRect()}
            handleEnter={handleEnter}
            handleLeave={handleLeave}
          />
        </Portal>
      )}
      <Container
        ref={card}
        onMouseEnter={() => handleEnter()}
        onMouseLeave={() => handleLeave()}
      >
        <img
          src="https://occ-0-1595-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvbw253rjdf-lDxQgElGKjKa38YquVLfdyRu6L3XZnaunq4Inc5LXyH_KBfD6d7esLp09zMYWv_LvCFygghMWzB_LFiIxGr2tlSW5vMo97FUcZTe9BXBs7s_P-S.jpg?r=c25"
          alt="Serie"
        />
      </Container>
    </Fragment>
  );
};
