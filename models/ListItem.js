const mongoose = require('mongoose');
const { Schema } = mongoose;

const listItemSchema = new Schema({
    title: String,
    description: String,
    isComplete: Boolean
});

module.exports = listItemSchema;