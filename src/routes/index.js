const express = require("express");
const { createProduct, destroyProduct, updateProduct, getProduct, getProducts } = require("../controllers/product_controller");

const router = express.Router();

router.post("/products", createProduct);

router.delete("/products/:id", destroyProduct)

router.put("/products/:id", updateProduct)

router.get("/products/:id", getProduct);

router.get("/products/", getProducts);

module.exports = router;
