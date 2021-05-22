import Styled from "styled-components";

export const NavContainer = Styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    color: white;
    display: flex;
    justify-content: space-between;
    background: ${({ navState }) =>
      navState
        ? "#141414;"
        : "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);"} ;
    padding: 0px 50px 0px 50px;
    transition: .5s ease background;
`;

export const LeftContent = Styled.div`
    display: flex;
    justify-content: flex-start;
    & img {
      width: 120px;
    }
    & ul{
      list-style-type: none;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    & ul li{
      margin: 0px 10px 0px 10px;
      font-size: 14px;
      font-weight: lighter;
      transition: .3s ease color;
    }
    & ul li:hover{
      cursor: pointer;
      color: gray;
    }
`;

export const RightContent = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
`;
