import Styled from "styled-components";

export const NavContainer = Styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    color: white;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);
    padding: 0px 50px 0px 50px;
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
    }
`;
