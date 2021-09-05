import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { GET_FRUITS } from "../Home";

import { Container, Button, Save, Img } from "./styles";

import foto from "../../../images/frutas.jpg";

const CREATE_FRUIT = gql`
  mutation UpdateFruit(
    $name: String!
    $carb: String!
    $fat: String!
    $protein: String!
    $calories: String!
  ) {
    createFruit(
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

const CreateFruit = () => {
  const history = useHistory();

  const [createFruit, { loading, error }] = useMutation(CREATE_FRUIT, {
    update(cache, { data: { createFruit } }) {
      const { fruits } = cache.readQuery({ query: GET_FRUITS });
      cache.writeQuery({
        query: GET_FRUITS,
        data: { fruits: fruits.concat([createFruit]) },
      });
    },
    onCompleted() {
      history.push(`/`);
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  let nameInput;
  let fatInput;
  let carbInput;
  let proteinInput;

  let caloriesInput;

  return (
    <Container>
      <Img>
        <img src={foto} alt="" />
      </Img>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          createFruit({
            variables: {
              name: nameInput.value,
              fat: fatInput.value,
              carb: carbInput.value,
              protein: proteinInput.value,
              calories: caloriesInput.value,
            },
          });

          nameInput.value = "";
          fatInput.value = "";
          carbInput.value = "";
          proteinInput.value = "";
          caloriesInput.value = "";
        }}
      >
        <div>
          <label>
            Fruta
            <br />
            <input
              type="text"
              name="name"
              ref={(node) => {
                nameInput = node;
              }}
            />
          </label>
        </div>
        <div>
          <label>
            <br />
            Carboidrato (g)
            <br />
            <input
              type="text"
              name="carb"
              ref={(node) => {
                carbInput = node;
              }}
            />
          </label>
          <label>
            <br />
            <br />
            Gordura (g)
            <br />
            <input
              type="text"
              name="fat"
              ref={(node) => {
                fatInput = node;
              }}
            />
          </label>
          <label>
            <br />
            <br />
            Proteína (g)
            <br />
            <input
              type="text"
              name="protein"
              ref={(node) => {
                proteinInput = node;
              }}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              style={{ display: "none" }}
              type="text"
              name="calories"
              ref={(node) => {
                caloriesInput = node;
              }}
            />
            <br />
          </label>
        </div>
        <Button>
          <Link to="/">
            <button>X</button>
          </Link>
          <Save>
            <button type="submit">Salvar</button>
          </Save>
        </Button>
      </form>
    </Container>
  );
};

export default CreateFruit;
