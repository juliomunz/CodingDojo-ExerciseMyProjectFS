const ProductController = require ('../controllers/product.controllers')

module.exports = app => {
     app.get('/api/products', ProductController.getAllProduct);
     app.get('/api/products/:id', ProductController.getProductByID);
     app.post('/api/product/new', ProductController.createProduct);
     app.put("/api/products/update/:id", ProductController.updateProduct);
     app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}