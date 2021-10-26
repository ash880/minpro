const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: {
        city: String,
        address_1: String,
        Permanent_address: String,
        Country: String
    }
});
module.exports = mongoose.model('User', UserSchema);