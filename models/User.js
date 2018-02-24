const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    facebookId: String,
    lists: [String]
});

mongoose.model('users', userSchema);