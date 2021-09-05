const { gql } = require("apollo-server");
const mutation = gql`
  type Mutation {
    createFruit(fruit: FruitInput): Fruit
    updateFruit(id: String, fruit: FruitInput): Fruit
    deleteFruit(id: String): Fruit
  }
  input FruitInput {
    name: String
    nutritions: NutritionsInput
  }
  input NutritionsInput {
    calories: String
    carb: String
    fat: String
    protein: String
  }
`;
module.exports = mutation;
