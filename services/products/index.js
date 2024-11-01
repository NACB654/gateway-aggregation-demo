const express = require("express");
const app = express();
const PORT = 3003;

app.get("/products/:id", (req, res) => {
  res.json({
    id: req.params.id,
    descriptions: "Producto 1",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
