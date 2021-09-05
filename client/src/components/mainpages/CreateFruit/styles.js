import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 36px;
  }

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-top: 8px;

  background-color: #333;
  color: white;

  input {
    border-radius: 8px;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    padding: 12px 16px;

    background-color: white;
    color: red;

    border-radius: 8px;
  }
`;

export const Save = styled.div`
  button {
    background-color: #26704f;
    color: white;

    padding: 12px 32px;

    border-radius: 8px;
  }
`;

export const Img = styled.div`
  width: 50%;
  height: 50%;

  border-radius: 8px;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  background-color: #333;
  @media (max-width: 600px) {
    width: 80%;
    height: 30%;
  }
`;
