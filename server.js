const express = require('express');
const dbConnect = require('./config/connect');
const apiRoutes = require('./routes/api');

const app = express();
const port = 3000;

// Connect to MongoDB
dbConnect();

// Use the API routes
app.use('/', apiRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
