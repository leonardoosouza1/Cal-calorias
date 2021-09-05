const { gql } = require("apollo-server");
const types = gql`
  type Fruit {
    id: ID!
    name: String
    nutritions: Nutritions
  }
  type Nutritions {
    calories: String
    carb: String
    fat: String
    protein: String
  }
`;
module.exports = types;
