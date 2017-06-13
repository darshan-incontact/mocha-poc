var express = require("express");
var app = express();
var converter = require("./appConverter");

app.get("/rgbToHex111", function(req, res) {

//convert from string to integer
  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

//convert to string
  res.send(JSON.stringify(rgb));
});


//runs a web server on 3000 port
app.listen(3000);


//var express = require("express");
//var app = express();
//var converter = require("./appConverter");
//
//app.get("/Add", function(req, res) {
//  var red   = parseInt(req.query.red);
//  var green = parseInt(req.query.green);
//
//
//  var hex = converter.Add(red, green);
//
//  res.send(hex);
//});
//
//app.listen(3000);