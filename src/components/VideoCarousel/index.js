import React from "react";
// styles
import { Container } from "./styles";
// npm
import Carousel from "react-elastic-carousel";
// components
import { VideoCard } from "components/VideoCard";

export const VideoCarousel = () => {
  return (
    <Container>
      <h1>Tendencias</h1>
      <Carousel itemsToShow={5}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Carousel>
    </Container>
  );
};
