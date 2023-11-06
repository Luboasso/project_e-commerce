const express = require("express");
const app = express();
const PORT = 8080;
const { typeError } = require('./middleware/errors');

app.use(express.json());
app.use('/users', require('./routes/users'));
app.use('/orders', require('./routes/orders'));
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));

app.use(typeError)

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));