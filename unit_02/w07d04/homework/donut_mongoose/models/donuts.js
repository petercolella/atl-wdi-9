//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create your donut schema:
var DonutSchema = new Schema({
    name: String
});

DonutSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

//export your donut with module.exports()
var DonutModel = mongoose.model("Donut", DonutSchema);

module.exports = {
  Donut: DonutModel,
};