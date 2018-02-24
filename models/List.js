const mongoose = require('mongoose');
const { Schema } = mongoose;
const ListItemSchema = require('./ListItem');

const listSchema = new Schema({
    listName: String,
    favorites: { type: Number, default: 0 },
    items: [ListItemSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    creationDate: Date
}); 

mongoose.model('List', listSchema);