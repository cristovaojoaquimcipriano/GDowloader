const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();

app.set("port", 3333);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.engine(
  "hbs",
  handlebars({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.use(require("./routers"));

module.exports = app;
