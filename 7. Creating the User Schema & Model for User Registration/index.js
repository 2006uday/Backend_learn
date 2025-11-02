// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./utils/db');
// const userRoutes = require('./routes/route');

import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import connectDB from "./utils/db.js"
import userRoutes from "./routes/route.js"



const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);

// Home route (optional)
app.get('/', (req, res) => res.send('home page'));

// Start server after DB connection
connectDB().then(() => {
  app.listen(PORT, () => console.log('Server running on port:', PORT));
});
