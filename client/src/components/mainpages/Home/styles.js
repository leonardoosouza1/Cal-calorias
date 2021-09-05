import styled from "styled-components";

import frutas from "../../../images/frutas.jpg";

export const New = styled.div`
  padding: 2%;
  height: auto;
  display: flex;

  background-color: #333;
  a {
    margin: 0 auto;
    width: 80%;
  }
  button {
    width: 100%;
    border-radius: 8px;
  }
`;

export const Title = styled.div`
  padding: 8%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${frutas});
  color: white;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  h1 {
    font-size: calc(22px + 1vmin);
    margin: 0 0 8px 0;
  }
`;

export const Fruits = styled.div`
  padding-top: 8px;
`;

export const Fruit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;

  ul {
    padding: 1%;
    height: auto;
    min-height: 25%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
  }

  li {
    cursor: pointer;
    background-color: white;
    font-weight: 500;
    width: 90%;

    margin-bottom: 12px;
    border-radius: 8px;

    box-shadow: 0 0 6px 1px rgba(200, 200, 200, 100);

    a {
      width: 100%;
      padding: 5%;
      color: #333;
      text-decoration: none;
    }
  }

  span {
  }
  div {
  }
`;
