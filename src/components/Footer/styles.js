import styled from "styled-components";

export const Container = styled.div`
  color: white;
  background-color: #141414;
  padding: 100px 0 100px 0;
  color: gray;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMedia = styled.div`
  & a {
    color: gray;
    margin: 5px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  & a > * {
    font-size: 1.5rem;
  }
  & a:hover {
    color: #3d3d3d;
  }
`;
