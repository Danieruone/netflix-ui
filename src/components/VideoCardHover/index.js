import React, { useEffect, useRef } from "react";
// styles
import { Container, Detail } from "./styles";
// media
import video from "assets/videos/netflix-intro.mp4";

export const VideoCardHover = ({
  position,
  handleEnter,
  handleLeave,
  photo,
}) => {
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
      <video poster={photo} ref={videoRef}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Detail>
        <h1>Recomendado para ti</h1>
      </Detail>
    </Container>
  );
};
