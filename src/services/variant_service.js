const VariantRepository = require("../repositories/variant_repository");

class VariantService {
    constructor() {
        this.variantRepository = new VariantRepository();
    }

    async addVariant(productId, data) {
        try {
            const variant = await this.variantRepository.addVariant(productId, data);
            return variant;
        } catch (error) {
            console.error("Error in VariantService.addVariant:", error);
            throw error;
        }
    }

    async destroyVariant(productId, variantId) {
        try {
            const variant = await this.variantRepository.destroyVariant(productId, variantId);
            return variant;
        } catch (error) {
            console.error("Error in VariantService.destroyVariant:", error);
            throw error;
        }
    }

    async updateVariant(productId, variantId, data) {
        try {
            const variant = await this.variantRepository.updateVariant(productId, variantId, data);
            return variant;
        } catch (error) {
            console.error("Error in VariantService.updateVariant:", error);
            throw error;
        }
    }

    async getVariant(productId, variantId) {
        try {
            const variant = await this.variantRepository.getVariant(productId, variantId);
            return variant;
        } catch (error) {
            console.error("Error in VariantService.getVariant:", error);
            throw error;
        }
    }

    async getVariants(productId) {
        try {
            const variants = await this.variantRepository.getVariants(productId);
            return variants;
        } catch (error) {
            console.error("Error in VariantService.getVariants:", error);
            throw error;
        }
    }
}

module.exports = VariantService;