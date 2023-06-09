const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  level: { type: String, enum: ['1', '2', '3'], required: false },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
