const express = require('express');

const app = express();
const port = 3000;

const webRoutes = require('./routes/webRoutes');

app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});