import Styled from "styled-components";

export const Container = Styled.div`
    width: 100%;
    position: absolute;
    background-color: black;
    bottom: -200px;
    background: rgb(20,20,20);
    background: linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,1) 70%, rgba(20,20,20,0) 100%);
    & h1{
        color: white;
        padding: 0px 0px 20px 50px;
        font-size: 28px;
    }
`;
