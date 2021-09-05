const mongoose = require("mongoose");
const FruitSchema = mongoose.Schema({
  name: String,
  nutritions: {
    calories: String,
    carb: String,
    fat: String,
    protein: String,
  },
});
module.exports = mongoose.model("Fruit", FruitSchema);
