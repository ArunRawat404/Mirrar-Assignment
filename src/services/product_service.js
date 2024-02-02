const ProductRepository = require("../repositories/product_repository");

class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async createProduct(data) {
        try {
            const product = await this.productRepository.create(data);
            return product;
        } catch (error) {
            console.error("Error in ProductService.createProduct:", error);
            throw error;
        }
    }

    async destroyProduct(productId) {
        try {
            const product = await this.productRepository.destroy(productId);
            return product;
        } catch (error) {
            console.error("Error in ProductService.destroyProduct:", error);
            throw error;
        }
    }

    async updateProduct(productId, data) {
        try {
            const product = await this.productRepository.update(productId, data);
            return product;
        } catch (error) {
            console.error("Error in ProductService.updateProduct:", error);
            throw error;
        }
    }

    async getProduct(productId) {
        try {
            const product = await this.productRepository.get(productId);
            return product;
        } catch (error) {
            console.error("Error in ProductService.getProduct:", error);
            throw error;
        }
    }

    async getProducts() {
        try {
            const products = await this.productRepository.getAll();
            return products;
        } catch (error) {
            console.error("Error in ProductService.getProducts:", error);
            throw error;
        }
    }

    async searchProducts(query) {
        try {
            const products = await this.productRepository.searchProducts(query);
            return products;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductService;