const polka = require("polka");

polka()
  .get("/", (req, res) => {
    res.end("Hello, world!");
  })
  .listen(3000, () => {
    console.log(`> Running on localhost:3000`);
  });
