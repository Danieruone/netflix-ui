import React from "react";
// styles
import { Container } from "./styles";
import "./carousel.css";
// components
import { VideoCard } from "components/VideoCard";
// npm
import Carousel from "react-elastic-carousel";

export const VideoCarousel = ({ position }) => {
  return (
    <Container position={position}>
      <h1>Tendencias</h1>
      <Carousel itemsToShow={5} pagination={false}>
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
