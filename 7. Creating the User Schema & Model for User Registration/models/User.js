// const mongoose = require('mongoose');
import { model, Schema } from 'mongoose';

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

const User = model('User', userSchema);
export default User
// module.exports = User;
