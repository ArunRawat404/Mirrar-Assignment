const Product = require("../models/product");
const CrudRepository = require("./crud_repository");
const VariantRepository = require("./variant_repository");

class ProductRepository extends CrudRepository {
    constructor() {
        super(Product);
        this.variantRepository = new VariantRepository();
    }

    async searchProducts(query) {
        try {
            const regex = new RegExp(query, 'i');
            const productResults = await this.model.find({
                $or: [
                    { name: regex },
                    { description: regex },
                ],
            });

            const variantResults = await this.variantRepository.searchVariants(query);

            const allResults = [...productResults, ...variantResults];

            return allResults;
        } catch (error) {
            console.error("Error in ProductRepository.searchProducts:", error);
            throw error;
        }
    }
};

module.exports = ProductRepository;