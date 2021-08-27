const express = require("express");
const app = express();

app.set("port", 3333);
app.use(express.json());

app.get("/", (req, res) => {
  res.joson({ message: "Tudo Pronto" });
});

module.exports = app;
