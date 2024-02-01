const Product = require("../models/product");
const CrudRepository = require("./crud_repository");

class ProductRepository extends CrudRepository {
    constructor() {
        super(Product)
    };
};

module.exports = ProductRepository;