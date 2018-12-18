var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var EmployeesSchema = new Schema({
  name: {
    type: String,
    required :[true, "name is req"]
  },
  id:Number,
  rank: String,
  geometry : Geoninja
})

var Employees = mongoose.model("Employee", EmployeesSchema);

module.exports = Employees;
