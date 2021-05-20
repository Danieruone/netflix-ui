import Styled from "styled-components";

export const Container = Styled.div`
    position: absolute;
    width: 400px;
    top: -50px;
    left: -30px;
    z-index: 2;
    animation: slide-up .5s ease;
    & img{
        border-radius: 8px;
        width: 100%;
        margin: 0;
    }
    & div{
        width: 100%;
        color: white;
        background: black;
    }

    @keyframes slide-up {
        0%{
            top: -30px;
            transform: scale(.9);
            transform-origin: center;
        }
        100% {
            transform: scale(1);
            transform-origin: center;
        }
    }
`;
