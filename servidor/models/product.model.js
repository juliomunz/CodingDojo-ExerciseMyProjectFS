const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, 'Título es requerido']
     },
    price: { 
        type: Number,
        required:  [true, 'Precio es requerido']
    },
    description: {
        type: String,
        required: [true, 'Descripción es requerido']
     }
}, 
    { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);