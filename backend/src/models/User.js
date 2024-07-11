const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add more fields as needed (e.g., name, avatar, etc.)
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
