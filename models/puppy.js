const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PuppySchema = new Schema({
    name: String,
    breed: String,
    location: String,
    activities: String
})

module.exports = mongoose.model('Puppy', PuppySchema);