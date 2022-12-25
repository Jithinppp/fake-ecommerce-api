const express = require("express");
const app = express();
require("dotenv/config");

const SHOPPING_DATA = require("./SHOPPING_DATA");

const PORT = process.env.PORT || 3300;

app.get("/", (req, res) => {
  res.send(
    `<a href="https://fake-ecommerce-api.vercel.app/products">JSON products</a>`
  );
});

app.get("/products", (req, res) => {
  res.json(SHOPPING_DATA);
});

app.listen(PORT, () => {
  console.log("server is started");
});
