import React from "react";
// styles
import { Container, CarouselContainer } from "./styles";
// components
import { VideoCard } from "components/VideoCard";

export const VideoCarousel = () => {
  return (
    <Container>
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
