import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
    width: 400px;
    align-items: center;
    background-color: rgba(0,0,0, .8);
    padding: 15px;
    border-bottom: solid .5px gray;
    & img{
      height: 70px;
      width: auto;
      border-radius: 8px;
      margin-right: 10px;
    }
    & p{
      margin: 5px;
    }
    & p:first-child{
      color: #c4c4c4;
      font-size: 1rem;
    }
    & p:last-child{
      color: gray;
      font-size: .8rem;
    }
    &:hover{  
      background: black;
      cursor: pointer;
      & p:first-child{
          color: white;
      }
    }
    &:last-child{
        border: none;
    }
`;
