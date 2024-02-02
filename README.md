# E-commerce API

This project is an E-commerce API built with Express.js, Node.js, and MongoDB. It provides endpoints for creating, updating, deleting, and retrieving products and their variants. Additionally, there is a search functionality for products based on their name, description, or variant name.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ArunRawat404/Mirrar-Assignment.git
   ```

2. Install dependencies:

   ```bash
    cd Mirrar-Assignment
    npm install
   ```

3. Create a file named .env in the root directory of your project.

4. In the .env file, add the following lines:

   ```bash
   DB_URL=your_mongodb_connection_string
   PORT=3000
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection string, including credentials and database information.

5. Start the application:

   ```bash
   npm start
   ```

   The API will be accessible at http://localhost:3000.

# API Endpoints

## Products

### Create Product

- **Endpoint:** `POST /api/products`
- **Description:** Creates a new product.
- **Payload:** JSON object with name, description, price.

### Delete Product

- **Endpoint:** `DELETE /api/products/:id`
- **Description:** Deletes a product by ID.

### Update Product

- **Endpoint:** `PUT /api/products/:id`
- **Description:** Updates a product by ID.
- **Payload:** JSON object with the updated product details.

### Get Product

- **Endpoint:** `GET /api/products/:id`
- **Description:** Retrieves a product by ID.

### Get All Products

- **Endpoint:** `GET /api/products`
- **Description:** Retrieves all products.

## Variants

### Create Variant

- **Endpoint:** `POST /api/products/:productId/variants`
- **Description:** Adds a new variant to a product.
- **Payload:** JSON object with name, additional cost, and stock count.

### Delete Variant

- **Endpoint:** `DELETE /api/products/:productId/variants/:variantId`
- **Description:** Deletes a variant by ID associated with a specific product.

### Update Variant

- **Endpoint:** `PUT /api/products/:productId/variants/:variantId`
- **Description:** Updates a variant by ID associated with a specific product.
- **Payload:** JSON object with the updated variant details.

### Get Variant

- **Endpoint:** `GET /api/products/:productId/variants/:variantId`
- **Description:** Retrieves a variant by ID associated with a specific product.

### Get All Variants for a Product

- **Endpoint:** `GET /api/products/:productId/variants`
- **Description:** Retrieves all variants associated with a specific product.

## Search Products

### Search Products

- **Endpoint:** `GET /api/search?query=your_search_query`
- **Description:** Searches for products based on the provided query in name, description, or variant name. Case-insensitive match.
- **Returns:** Products matching the search query.
