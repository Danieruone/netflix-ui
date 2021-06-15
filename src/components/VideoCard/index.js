import React, { Fragment, useRef, useState } from "react";
// styles
import Styled from "styled-components";
// components
import { VideoCardHover } from "components/VideoCardHover";
// rendering outside the father
import { Portal } from "portal/Portal";

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

export const VideoCard = ({ photo }) => {
  const [isHovering, setIsHovering] = useState(false);
  const card = useRef();
  let timer = useRef();

  const handleEnter = () => {
    timer.current = setTimeout(() => {
      setIsHovering(true);
    }, 300);
  };

  const handleLeave = () => {
    clearTimeout(timer.current);
    setIsHovering(false);
  };

  return (
    <Fragment>
      {isHovering && (
        <Portal>
          <VideoCardHover
            position={card.current.getBoundingClientRect()}
            setIsHovering={setIsHovering}
            photo={photo}
          />
        </Portal>
      )}
      <Container
        ref={card}
        onMouseEnter={() => handleEnter()}
        onMouseLeave={() => handleLeave()}
      >
        <img src={photo} alt="Serie" />
      </Container>
    </Fragment>
  );
};
