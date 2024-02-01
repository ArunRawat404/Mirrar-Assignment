const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
    variantName: {
        type: String,
        required: true
    },
    SKU: {
        type: String,
    },
    additionalCost: {
        type: Number,
        required: true
    },
    stockCount: {
        type: Number,
        required: true
    }
});

const Variant = mongoose.model('Variant', variantSchema);

module.exports = Variant;
