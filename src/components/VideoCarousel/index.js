import React from "react";
// styles
import { Container } from "./styles";
import "./carousel.css";
// components
import { VideoCard } from "components/VideoCard";
// npm
import Carousel from "react-elastic-carousel";
// content
import { content } from "content.js";

export const VideoCarousel = ({ position }) => {
  let breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ];
  return (
    <Container position={position}>
      <h1>Tendencias</h1>
      <Carousel breakPoints={breakPoints} pagination={false}>
        {content.map((video, idx) => {
          return <VideoCard key={idx} {...video} />;
        })}
      </Carousel>
    </Container>
  );
};
