import Styled from "styled-components";

export const Container = Styled.div`
    width: 100%;
    background: rgb(20,20,20);
    & h1{
        color: white;
        padding: 0px 0px 0px 50px;
        font-size: 28px;
    }
    &:first-child{
        position: absolute;
        bottom: -150px;
        background: rgb(20,20,20);
        background: linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,1) 60%, rgba(20,20,20,0) 100%);
    }
`;
