import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;

  align-items: center;
  justify-content: center;

  background-color: #26704f;
  color: white;

  > div {
    width: 90%;
    display: flex;

    justify-content: space-between;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
