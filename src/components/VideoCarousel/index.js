import React from "react";
// styles
import { Container, CarouselContainer } from "./styles";
// components
import { VideoCard } from "components/VideoCard";

export const VideoCarousel = ({ position }) => {
  return (
    <Container position={position}>
      <h1>Tendencias</h1>
      <CarouselContainer>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </CarouselContainer>
    </Container>
  );
};
