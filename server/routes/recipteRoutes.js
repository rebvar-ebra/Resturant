const express = require("express");
const router = express.Router();
const recipeControler = require("../controlers/recipeController");

router.get("/", recipeControler.homepage);
router.get("/explore".recipeControler.exploreCategories);

module.exports = router;
