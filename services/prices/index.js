const express = require("express");
const app = express();
const PORT = 3002;

app.get("/price/:id", (req, res) => {
  res.json({
    price: 100,
    currency: "PEN",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
