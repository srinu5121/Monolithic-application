const express = require('express');
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();
var Schema = mongoose.Schema;
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/Ninjagoo",  { useNewUrlParser: true }).then(function(){
  console.log("connection is made")
});
mongoose.Promise = global.Promise;
var EmployeeSchema = new Schema({
  name: {
    type: String,
    required :[true, "name is req"]
  },
  id:Number
})
var Employee = mongoose.model("Employee", EmployeeSchema);
app.get('/api/people', (req, res) => {
  console.log(req.query, "body")
  Employee.find().then(function(emp){
    console.log(emp, "emp")
    res.send(emp)
  })
});

app.get('/api/people/:name', (req, res) => {
  console.log(req.query, "body")
  Employee.findOne({name:req.params.name}).then(function(emp){
    console.log(emp, "emp")
    res.send(emp)
  })
});

app.post('/api/addData', (req, res) => {
  Employee.create(req.body).then(function(emp){
    Employee.find().then(function(emp){
      console.log(emp, "emp")
      res.send(emp)
    })
  })
  console.log(req.body)
});
app.delete('/api/DeletePerson/:id', (req, res) =>{
  console.log(req.params.id, "del")
  Employee.findByIdAndRemove({_id:req.params.id}).then(function(){
      Employee.find({}).then(function(emp){
        console.log(emp, "emp2")
    res.send(emp)
  })
  })
})
app.put("/api/UpdateData/:id", (req, res)=> {
  console.log(req.params.id, "updateid")
  Employee.findOneAndUpdate({_id:req.params.id}, req.body).then(()=> {
    Employee.findOne({id:req.params.id}).then((emp)=>{
      console.log(emp, "emp3")
      res.send(emp)
    })
  })
})
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
