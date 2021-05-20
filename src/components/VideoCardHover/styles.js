import Styled from "styled-components";

export const Container = Styled.div`
    position: absolute;
    width: 400px;
    top: ${({ position }) =>
      `${position.top + document.scrollingElement.scrollTop - 50}px;`};
    left: ${({ position }) => `${position.left - 30}px;`};
    z-index: 2;
    cursor: pointer;
    animation: slide-up .3s ease;
    & img{
        border-radius: 8px;
        width: 100%;
        margin: 0;
    }
    @keyframes slide-up {
        0%{
            ${({ position }) => `${position.top}px;`};
            transform: scale(.9);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export const Detail = Styled.div`
    heigth: 100%;
    width: 100%;
    color: white;
    background: black;
    & h1{
        margin: 0;
    }
`;
