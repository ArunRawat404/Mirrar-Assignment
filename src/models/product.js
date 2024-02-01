const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
    variantName: {
        type: String,
        required: true
    },
    variantName: {
        type: String,
        required: true
    },
    SKU: {
        type: String,
    },
    stockCount: {
        type: Number,
        required: true
    }
});

const Variant = mongoose.model('Variant', variantSchema);


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    variants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Variant"
    }]
})

const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product,
    Variant
}