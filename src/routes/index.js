const express = require("express");
const { createProduct, destroyProduct, updateProduct, getProduct, getProducts, searchProducts } = require("../controllers/product_controller");

const { addVariant, destroyVariant, updateVariant, getVariant, getVariants } = require("../controllers/variant_controller");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        mss: "Welcome to E-commerce API"
    })
})

// products
router.post("/products", createProduct);

router.delete("/products/:id", destroyProduct)

router.put("/products/:id", updateProduct)

router.get("/products/:id", getProduct);

router.get("/products/", getProducts);

// variants
router.post("/products/:productId/variants", addVariant);

router.delete("/products/:productId/variants/:variantId", destroyVariant)

router.put("/products/:productId/variants/:variantId", updateVariant)

router.get("/products/:productId/variants/:variantId", getVariant);

router.get("/products/:productId/variants", getVariants);

// search
router.get('/search', searchProducts);

module.exports = router;
