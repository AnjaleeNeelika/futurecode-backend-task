const Product = require('../models/product.model');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Get product By Id
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }    
}

// Add a new product
const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Update a product
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedProduct = await Product.findById(id);

        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};