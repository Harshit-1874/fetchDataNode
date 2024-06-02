const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    material: { type: String },
    category: {
        id: { type: Number }
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
