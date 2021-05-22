import React, { useEffect, useRef } from "react";
// styles
import { Container } from "./styles";
// components
import { VideoCardHoverDetail } from "components/VideoCardHoverDetail";
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
    }, 500);
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
      <VideoCardHoverDetail />
    </Container>
  );
};
