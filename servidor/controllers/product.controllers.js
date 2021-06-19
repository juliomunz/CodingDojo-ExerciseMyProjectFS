const { Product } = require('../models/product.model');

module.exports.createProduct = (req, res) => {
     const { title, price, description } = req.body;
     Product.create({
         title,
         price,
         description
     })
        .then(product => res.json(product))
        .catch(err => res.json(err));
};

module.exports.getAllProduct = (req, res) => {
    //console.log('llegue') 
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err));
};

module.exports.getProductByID = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json({productData: product}))
        //.then(product => response.json(product))
        .catch(err => res.json({productData: null}));
        //.catch(err => response.json(err))
};

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateProduct => res.json( updateProduct ))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
        .then(deleteProduct => res.json({ productDeleted: deleteProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

