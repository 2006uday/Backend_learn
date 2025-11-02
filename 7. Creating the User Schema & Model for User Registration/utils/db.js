// const mongoose = require('mongoose');

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
const URI = process.env.MONGODB_URI;

 const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Connection successful to DB');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(0);
  }
};
export default connectDB;
