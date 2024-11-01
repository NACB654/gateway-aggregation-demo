const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/gateway/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const productRequest = axios.get(`http://localhost:3003/products/${id}`);
    const priceRequest = axios.get(`http://localhost:3002/price/${id}`);
    const inventoryRequest = axios.get(`http://localhost:3001/products/${id}`);

    const [productResponse, priceResponse, inventoryResponse] =
      await Promise.all([productRequest, priceRequest, inventoryRequest]);

    const data = {
      product: productResponse.data,
      price: priceResponse.data,
      inventory: inventoryResponse.data,
    };

    res.json(data);
  } catch (err) {
    console.error("Error", err);
    res.status(500).json({ message: "Error" });
  }
});

app.listen(PORT, () => {
  console.log("Gateway iniciado");
});
