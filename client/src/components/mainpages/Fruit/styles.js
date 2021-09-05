import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8%;
  }

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Img = styled.div`
  width: 50%;
  height: 50%;

  border-radius: 8px;
  box-shadow: 0 0 3px 1px rgba(150, 150, 150, 100);

  background-color: #333;
  @media (max-width: 600px) {
    width: 80%;
    height: 30%;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  border-top: 1px solid #333;
  padding-top: 8px;
  margin-top: 8px;

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

export const Info = styled.div`
  width: 30%;

  @media (max-width: 600px) {
    width: 80%;
  }
`;
