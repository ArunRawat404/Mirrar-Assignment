const ProductService = require("../services/product_service");
const productService = new ProductService();

async function createProduct(req, res) {
    try {
        const data = req.body;
        const response = await productService.createProduct(data);
        return res.status(201).json({
            success: true,
            message: "Successfully created a product",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while creating a product",
            data: null,
            err: error.message
        });
    }
}

async function destroyProduct(req, res) {
    try {
        const productID = req.params.id;
        const response = await productService.destroyProduct(productID);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted a product",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting a product",
            data: null,
            err: error.message
        });
    }
}

async function updateProduct(req, res) {
    try {
        const productID = req.params.id;
        const data = req.body;
        const response = await productService.updateProduct(productID, data);
        return res.status(200).json({
            success: true,
            message: "Successfully updated a product",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while updating a product",
            data: null,
            err: error.message
        });
    }
}

async function getProduct(req, res) {
    try {
        const productID = req.params.id;
        const response = await productService.getProduct(productID);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched a product",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching a product",
            data: null,
            err: error.message
        });
    }
}

async function getProducts(req, res) {
    try {
        const response = await productService.getProducts();
        return res.status(200).json({
            success: true,
            message: "Successfully fetched products",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching products",
            data: null,
            err: error.message
        });
    }
}

async function searchProducts(req, res) {
    try {
        const query = req.query.query;
        const products = await productService.searchProducts(query);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched products",
            data: products,
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while searching products",
            data: {},
            err: error,
        });
    }
}

module.exports = {
    createProduct,
    destroyProduct,
    updateProduct,
    getProduct,
    getProducts,
    searchProducts
};