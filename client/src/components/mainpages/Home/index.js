import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { Container, New, Title, Fruits, Fruit } from "./styles";

export const GET_FRUITS = gql`
  {
    fruits {
      id
      name
    }
  }
`;

const FruitsList = () => {
  const { loading, error, data } = useQuery(GET_FRUITS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Container>
        <Title>
          <h1>Kcal</h1>
          <span>Descubra quantas calorias seu alimento possui</span>
        </Title>
        <New>
          <Link to="/createFruit">
            <button>Nova Fruta</button>
          </Link>
        </New>
        <Fruits>
          <ul>
            {data.fruits &&
              data.fruits.map(({ name, id }) => (
                <li key={id}>
                  <Link to={`/fruit/${id}`}>
                    <Fruit>
                      <span>{name}</span>
                      <div>
                        {/* <Link to={`/editFruit/${id}`}>
                          <span role="img" aria-label="editar">
                            ✏️
                          </span>
                        </Link>
                        <Link to={`/deleteFruit/${id}`}>
                          <span role="img" aria-label="excluir">
                            ❌
                          </span>
              </Link>*/}
                      </div>
                    </Fruit>
                  </Link>
                </li>
              ))}
          </ul>
        </Fruits>
      </Container>
    </>
  );
};

export default FruitsList;
