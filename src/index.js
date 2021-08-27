const app = require("./server");
app.listen(
  app.get("port", () => {
    console.log(`http://localhost:${app.get("port")}`);
  })
);
