const ProductRepository = require("../repositories/product_repository");

class ProductService {
    constructor() {
        this.productRepository = new ProductRepository()
    }

    async createProduct(data) {
        try {
            const product = this.productRepository.create(data);
            return product;
        } catch (error) {
            throw error;
        }
    };

    async destroyProduct(productId) {
        try {
            const product = this.productRepository.destroy(productId);
            return product;
        } catch (error) {
            throw error;
        }
    };

    async updateProduct(productId, data) {
        try {
            const product = this.productRepository.update(productId, data);
            return product;
        } catch (error) {
            throw error;
        }
    };

    async getProduct(productId) {
        try {
            const product = this.productRepository.get(productId)
            return product;
        } catch (error) {
            throw error;
        }
    };

    async getProducts() {
        try {
            const products = this.productRepository.getAll()
            return products;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = ProductService;