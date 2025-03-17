const express = require('express');

const app = express();
const port = 3000;
const hostname = 'localhost'; //Localhost

//Routers
const webRoutes = require('./routes/webRoutes');
const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

//Models
const db = require('./models/db');

//route middleware setup
app.use('/', webRoutes);
app.use('/auth', authRoutes);
app.use('/account', accountRoutes);
app.use('/order', orderRoutes);
app.use('/product', productRoutes);

app.listen(port, hostname, async () => {
    console.log(`App listening at http://${hostname}:${port}`);
    await db.startConnection();
});