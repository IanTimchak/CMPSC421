const express = require('express');

const app = express();
const port = 3000;

const webRoutes = require('./routes/webRoutes');
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/', webRoutes);
app.use('/auth', authRoutes);
app.use('/account', accountRoutes);
app.use('/order', orderRoutes);
app.use('/product', productRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});