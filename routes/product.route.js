const express = require('express');
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');
const router = express.Router();

// Get all products
router.get("/", getAllProducts);

// Get product by Id
router.get("/:id", getProductById);

// Add new product
router.post("/", addProduct);

// Update a product
router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);


module.exports = router;