import Styled from "styled-components";

export const Detail = Styled.div`
    heigth: 100%;
    max-width: 400px;
    color: white;
    background: #141414;
    padding: 20px;
    margin: 0;
    border-radius: 0 0 8px 8px;
`;

export const Icons = Styled.div`
    display: flex;
    justify-content: space-between;
    & div > *{
        font-size: 20px;
        margin: 2px;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 50%;
    }
    & div > *:hover{
        border-color: white;
    }
`;

export const Description = Styled.div`
    display: flex;
    font-size: 15px;
    align-items: center;
    & h2{
        color: #3FB75D;
        font-size: 17px;
    }
    & > *{
        margin-right: 10px;
    }
`;

export const AgeText = Styled.div`
    border: .5px solid white;
    padding: 0 5px 0 5px;
`;
