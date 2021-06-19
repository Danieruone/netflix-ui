import Styled from "styled-components";
// images
import hero from "../assets/images/hero.jpg";

export const Hero = Styled.div`
    background-image: url(${hero});
    background-size: cover;
    padding: 50px;
    height: 90vh;
    display: flex;
    align-items: center;
    jutify-content: center;
    @media (max-width: 800px) {
        padding: 20px;
    }
`;

export const CarouselContainer = Styled.div`
    background: #141414; 
    padding-top: 150px;
    @media (max-width: 800px) {
        padding-top: 0px;
    }
`;
