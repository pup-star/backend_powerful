const mongoose = require('mongoose');

const UserShema = new  mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    location: {type: String, require: true},
}, { timestamps: true });

module.exports = mongoose.model("User", UserShema)