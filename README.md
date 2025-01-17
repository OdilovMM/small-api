# small-api
# Product API Application
This project is a simple Product API built with Node.js, Express, and MongoDB. It provides functionalities to create, retrieve, update, and delete products with various filters and sorting options.

# Features
### Create a Product: Add a new product to the database.

### Get All Products: Retrieve a list of all products with optional filters and sorting.

### Update a Product: Update details of a specific product.

### Delete a Product: Remove a specific product from the database.
# API Endpoints
### GET /api/v1/products: Retrieve all products with optional query parameters for filtering, sorting, and pagination.

### POST /api/v1/products: Create a new product.

## Query Parameters

### featured: Filter products by featured status.

### name: Filter products by name (supports partial matching).

### company: Filter products by company.

### rating: Filter products by rating.

### sort: Sort products by specified fields.

### fields: Select specific fields to retrieve.

### page: Pagination - specify the page number.

### limit: Pagination - specify the number of products per page.

### numberFilters: Advanced number filtering for price and rating.

# Setup

# Clone the repository

### Install dependencies: npm install

## Create a .env file and configure your environment variables

### Run the application: npm run dev

# Middleware

### notFound: Handles 404 errors for undefined routes.

### errorHandler: Handles server errors.

# Technologies Used
Node.js
Express
MongoDB
Mongoose


# Example Queries:
# Get All Products

### GET http://localhost:5000/api/v1/products
Get Products with Pagination

### GET http://localhost:5000/api/v1/products?page=2&limit=5
Get Featured Products

### GET http://localhost:5000/api/v1/products?featured=true
Search Products by Name

### GET http://localhost:5000/api/v1/products?name=chair
Filter Products by Company

### GET http://localhost:5000/api/v1/products?company=ikea
Sort Products by Price

### GET http://localhost:5000/api/v1/products?sort=price
Select Specific Fields

### GET http://localhost:5000/api/v1/products?fields=name,price
Filter Products with Number Filters

### GET http://localhost:5000/api/v1/products?numberFilters=price>100,rating>=4


Combine multiple query parameters to test complex scenarios, for example:

### GET http://localhost:5000/api/v1/products?featured=true&company=ikea&sort=price,rating&fields=name,price,rating&page=2&limit=5
