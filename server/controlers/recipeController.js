require("../models/db");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");
exports.homepage = async (req, res) => {
  try {
    const limitNumber = 10;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
    const thai = await Recipe.find({ category: "Thai" }).limit(limitNumber);
    const american = await Recipe.find({ category: "American" }).limit(
      limitNumber
    );
    const chinese = await Recipe.find({ category: "Chinese" }).limit(
      limitNumber
    );

    const food = { latest, thai, american, chinese };

    res.render("index", {
      title: "Cooking Blog-Home",
      categories,
      food,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occures" });
  }
};

exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const catagories = await Category.find({}).limit(limitNumber);
    res.render("catagories", {
      title: "Cooking Blog - Categoreis",
      categories,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occures" });
  }
};
