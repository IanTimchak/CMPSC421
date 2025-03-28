const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 4000;
const hostname = '0.0.0.0'; //Localhost

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


// Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'CMPSC421 - Ian Timchak - Order System',
            version: '1.0.2',
            description: 'API documentation using Swagger',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            },
        ],
   components: {
     securitySchemes: {
         bearerAuth: {
             type: 'http',
             scheme: 'bearer',
             bearerFormat: 'JWT', 
         },
     },
 },
    },
    apis: ['src/routes/*.js'], // Path to your API docs
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, hostname, async () => {
    console.log(`App listening at http://${hostname}:${port}`);
    await db.startConnection();
});