const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authMiddleware = require('./src/middlewares/auth-middleware');
const bookRoutes = require('./src/routes/book-routes');
const authRoutes = require('./src/routes/auth-routes');


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', authMiddleware, bookRoutes);
app.use('/', authRoutes);


app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});   