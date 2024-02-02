const Variant = require("../models/variant");
const Product = require("../models/product");
const CrudRepository = require("./crud_repository");

class VariantRepository extends CrudRepository {
    constructor() {
        super(Variant)
    };

    async addVariant(productId, data) {
        try {
            const product = await Product.findById(productId);

            if (!product) {
                throw new Error("Product not found while adding variant");
            }

            const newVariant = new Variant(data);
            const savedVariant = await newVariant.save();

            product.variants.push(savedVariant._id);
            await product.save();

            return savedVariant;
        } catch (error) {
            console.error("Error in VariantRepository.addVariant:", error);
            throw error;
        }
    };

    async destroyVariant(productId, variantId) {
        try {
            const product = await Product.findById(productId);
            if (!product) {
                throw new Error("Product not found while destroying variant");
            }

            // Deleting from product array
            product.variants.pull(variantId);
            const deletedVariant = await Variant.findByIdAndDelete(variantId);

            await product.save();
            return deletedVariant; // Returning the deleted variant might be more useful than the product.

        } catch (error) {
            console.error("Error in VariantRepository.destroyVariant:", error);
            throw error;
        }
    };

    async updateVariant(productId, variantId, data) {
        try {
            const product = await Product.findById(productId);

            if (!product) {
                throw new Error("Product not found while updating variant");
            }

            const updatedVariant = await Variant.findByIdAndUpdate(variantId, data, { new: true });

            if (!updatedVariant) {
                throw new Error("Variant not found while updating variant");
            }

            return updatedVariant;
        } catch (error) {
            console.error("Error in VariantRepository.updateVariant:", error);
            throw error;
        }
    }

    async getVariant(productId, variantId) {
        try {
            const product = await Product.findById(productId);

            if (!product) {
                throw new Error("Product not found while updating variant");
            }

            const variant = await Variant.findById(variantId);

            if (!variant) {
                throw new Error("Variant not found");
            }

            return variant;
        } catch (error) {
            console.error("Error in VariantRepository.getVariant:", error);
            throw error;
        }
    };

    async getVariants(productId) {
        try {
            const product = await Product.findById(productId);

            if (!product) {
                throw new Error("Product not found while fetching variants");
            }

            // Fetch all variants associated with the product
            const variants = await Variant.find({ _id: { $in: product.variants } });
            return variants;
        } catch (error) {
            console.error("Error in VariantRepository.getVariants:", error);
            throw error;
        }
    };

    async searchVariants(query) {
        try {
            const regex = new RegExp(query, 'i');
            const variants = await this.model.find({
                'variantName': regex,
            });
            return variants;
        } catch (error) {
            console.error("Error in VariantRepository.searchVariants:", error);
            throw error;
        }
    }
};

module.exports = VariantRepository;
