import Styled from "styled-components";

export const Container = Styled.div`
    position: absolute;
    right: 10px;
    top: 40px;
    margin: 20px 30px 0 0;  
    cursor: pointer;
`;

export const TopBar = Styled.div`
    border: solid 1px white;
    position: relative;
    &:before{
        content: "";
        position: absolute;
        top: -10px;
        right: 10px;
        border-left:8px solid transparent;
        border-right:8px solid transparent; 
        border-bottom:10px solid white; 
    }
`;

export const Content = Styled.div`
    overflow-y: scroll;
    max-height: 600px;
`;
