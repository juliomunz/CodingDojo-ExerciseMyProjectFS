const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('./servidor/config/mongoose.config.js');
app.use(cors()) // This is new
app.use(express.json()); // this new
app.use(express.urlencoded({ extended: true }));
require('./servidor/routes/product.routes.js')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})