const express = require("express");
const app = express();
const PORT = 3001;

app.get("/inventory/:id", (req, res) => {
  res.json({
    quantity: 26,
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
