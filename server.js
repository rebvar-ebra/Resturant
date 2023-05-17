const express = require("express");
const expressLayout = require("express-ejs-layouts");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/recipteRoutes");
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
