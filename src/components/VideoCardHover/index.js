import React, { useEffect, useRef } from "react";
// styles
import { Container, Detail } from "./styles";
// media
import video from "assets/videos/netflix-intro.mp4";

export const VideoCardHover = ({ position, handleEnter, handleLeave }) => {
  const videoRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current.play();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      position={position}
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
    >
      <video
        poster="https://occ-0-1595-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvbw253rjdf-lDxQgElGKjKa38YquVLfdyRu6L3XZnaunq4Inc5LXyH_KBfD6d7esLp09zMYWv_LvCFygghMWzB_LFiIxGr2tlSW5vMo97FUcZTe9BXBs7s_P-S.jpg?r=c25"
        ref={videoRef}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Detail>
        <h1>Recomendado para ti</h1>
      </Detail>
    </Container>
  );
};
