import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, Link, useHistory } from "react-router-dom";
import { GET_FRUIT_BY_ID } from "../Fruit";

import { Container, Button } from "./styles";

const UPDATE_FRUIT = gql`
  mutation UpdateFruit(
    $id: String!
    $name: String
    $carb: String
    $fat: String
    $protein: String
    $calories: String
  ) {
    updateFruit(
      id: $id
      fruit: {
        name: $name
        nutritions: {
          carb: $carb
          fat: $fat
          protein: $protein
          calories: $calories
        }
      }
    ) {
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

const EditFruit = () => {
  const { id } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_FRUIT_BY_ID, {
    variables: { id },
  });
  const [updateFruit, { error: mutationError }] = useMutation(UPDATE_FRUIT, {
    onCompleted() {
      history.push(`/fruit/${id}`);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error || mutationError) return <p>Error :(</p>;

  let nameInput;
  let fatInput;
  let carbInput;
  let proteinInput;

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          updateFruit({
            variables: {
              id: data.fruit.id,
              name: nameInput.value,
              fat: fatInput.value,
              carb: carbInput.value,
              protein: proteinInput.value,
              calories: data.fruit.nutritions.calories,
            },
          });
        }}
      >
        <p>
          <label>
            Fruta
            <br />
            <input
              type="text"
              name="name"
              defaultValue={data.fruit.name}
              ref={(node) => {
                nameInput = node;
              }}
            />
          </label>
        </p>
        <p>
          <label>
            <br />
            Carboidrato (g)
            <br />
            <input
              type="text"
              name="carb"
              defaultValue={data.fruit.nutritions.carb}
              ref={(node) => {
                carbInput = node;
              }}
            />
          </label>
          <label>
            <br />
            Gordura (g)
            <br />
            <input
              type="text"
              name="fat"
              defaultValue={data.fruit.nutritions.fat}
              ref={(node) => {
                fatInput = node;
              }}
            />
          </label>
          <label>
            <br />
            Proteína (g)
            <br />
            <input
              type="text"
              name="protein"
              defaultValue={data.fruit.nutritions.protein}
              ref={(node) => {
                proteinInput = node;
              }}
            />
          </label>
        </p>
        <p>
          <label>
            <br />
            <br />
            <span>{data.fruit.nutritions.calories}</span>
          </label>
        </p>
        <Button>
          <Link to={`/fruit/${id}`}>
            <button
              style={{
                backgroundColor: "white",
                color: "red",
                padding: "12px 16px",
                borderRadius: "8px",
              }}
              type="button"
            >
              X
            </button>
          </Link>
          <button
            style={{
              backgroundColor: "#26704f",
              color: "white",
              padding: "12px 32px",
              borderRadius: "8px",
            }}
            type="submit"
          >
            Salvar
          </button>
        </Button>
      </form>
    </Container>
  );
};

export default EditFruit;
