const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, "Email exists"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false
    }
})

const User =  mongoose.model('User', userSchema);
module.exports = User;