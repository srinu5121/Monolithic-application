var express= require("express");
var route = express.Router();

route.get("/people", function(req, res){
  console.log(req.query.id,"sasassa")
Employee.find({}).then(function(emp){
  console.log(emp,"ninaaaaaaaaa")
  res.send(emp)
})
})

route.post('/addData', function(req, res){
  console.log("WOrking like we think", req.body)
  res.send(req.body)
  // Employee.create(req.body).then(function(emp){
  //   res.json(req.body)
  // })
})

route.put('/employee/:id', function(req, res){
  Employee.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(emp){
    console.log("put method and update Compltd", ninja)
    res.send({emp})
  })
})

route.delete('/employee/:id', function(req, res){
  Employee.findByIdAndRemove({_id:req.params.id}).then(function(emp){
    res.send({emp})
  })
  console.log("delete method")
})
module.exports = route;
