import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { Container, Img, Save, Button, Info } from "./styles";

export const GET_FRUIT_BY_ID = gql`
  query GetFruit($id: ID!) {
    fruit(id: $id) {
      id
      name
      nutritions {
        calories
        carb
        fat
        protein
      }
    }
  }
`;

const Fruit = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_FRUIT_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  let cal =
    parseFloat(data.fruit.nutritions.protein * 4) +
    parseFloat(data.fruit.nutritions.carb * 4) +
    parseFloat(data.fruit.nutritions.fat * 9);

  return (
    <Container>
      <Img></Img>
      <Info>
        <p>
          <strong>Fruta: </strong>
          {data.fruit.name}
        </p>
        <p>
          <strong>Carboidratos: </strong>
          {data.fruit.nutritions.carb}g
        </p>
        <p>
          <strong>Gordura: </strong>
          {data.fruit.nutritions.fat}g
        </p>
        <p>
          <strong>Proteina: </strong>
          {data.fruit.nutritions.protein}g
        </p>
        <p>
          <strong>Calorias: </strong>
          {cal}kcal
        </p>
        <Button>
          <Link to={`/deleteFruit/${id}`}>
            <button>✖</button>
          </Link>
          <Link to={`/editFruit/${id}`}>
            <Save>
              <button>Editar</button>
            </Save>
          </Link>
        </Button>
      </Info>
    </Container>
  );
};

export default Fruit;
