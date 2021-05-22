import React from "react";
// styles
import { Detail, Icons, Description, AgeText } from "./styles";
// icons
import { FaPlay, FaPlus } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";

export const VideoCardHoverDetail = () => {
  return (
    <Detail>
      <Icons>
        <div>
          <FaPlay />
          <FaPlus />
          <AiFillLike />
          <AiFillDislike />
        </div>
        <div>
          <RiArrowDownSLine />
        </div>
      </Icons>
      <Description>
        <h2>90% para ti</h2>
        <AgeText>13+</AgeText>
        <p>2 temporadas</p>
      </Description>
    </Detail>
  );
};
