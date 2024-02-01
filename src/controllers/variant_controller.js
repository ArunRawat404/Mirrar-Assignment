const VariantService = require("../services/variant_service");
const variantService = new VariantService();

async function addVariant(req, res) {
    try {
        const productId = req.params.productId;
        const data = req.body;
        const response = await variantService.addVariant(productId, data);
        return res.status(201).json({
            success: true,
            message: "Successfully added a variant",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while adding a variant",
            data: null,
            err: error.message
        });
    }
}

async function destroyVariant(req, res) {
    try {
        const productId = req.params.productId;
        const variantId = req.params.variantId;
        const response = await variantService.destroyVariant(productId, variantId);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted a variant",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting a variant",
            data: null,
            err: error.message
        });
    }
}

async function updateVariant(req, res) {
    try {
        const productId = req.params.productId;
        const variantId = req.params.variantId;
        const data = req.body;
        const response = await variantService.updateVariant(productId, variantId, data);
        return res.status(200).json({
            success: true,
            message: "Successfully updated a variant",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while updating a variant",
            data: null,
            err: error.message
        });
    }
}

async function getVariant(req, res) {
    try {
        const productId = req.params.productId;
        const variantId = req.params.variantId;
        const response = await variantService.getVariant(productId, variantId);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched a variant",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching a variant",
            data: null,
            err: error.message
        });
    }
}

async function getVariants(req, res) {
    try {
        const productId = req.params.productId;
        const response = await variantService.getVariants(productId);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched variants",
            data: response,
            err: null
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching variants",
            data: null,
            err: error.message
        });
    }
}

module.exports = {
    addVariant,
    destroyVariant,
    updateVariant,
    getVariant,
    getVariants
};
