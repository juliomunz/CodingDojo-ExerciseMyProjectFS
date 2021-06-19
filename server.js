const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('./servidor/config/mongoose.config.js');

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./servidor/routes/product.routes')(app);

app.use('/user', require('./servidor/routes/User.routes'));

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})