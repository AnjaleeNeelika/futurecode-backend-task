const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product name"]
        },
        price: {
            type: Number,
            required: [true, "Please enter the price"]
        },
        quantity: {
            type: Number,
            required: [true, "Please enter the quantity"]
        }
    },
    {
        timestamps: true
    }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;