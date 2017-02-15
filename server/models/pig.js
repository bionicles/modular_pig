// require mongoose
var mongoose = require('mongoose');
// create the schema
var PigSchema = new mongoose.Schema({
  name: String
})
// register the schema as a model
var Pig = mongoose.model('Pig', PigSchema);
