//
//var expect  = require("chai").expect;
//var request = require("request"); //used to make http calls request(url, fun(error, res, bdy)
//
//describe("Color Code Converter API", function() {
//
//  describe("RGB to Hex conversion", function() {
//
//    //full path to the resource we wan't to test
//    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
//
////Pass Url to visit and function to be executed once request is completed
//    it("returns status 200", function(done) {
//      request(url, function(error, response, body) {
//        expect(response.statusCode).to.equal(200);
//        done();
//      });
//    });
//
//    it("returns the color in hex", function(done) {
//      request(url, function(error, response, body) {
//        expect(body).to.equal("ffffff");
//        done();
//      });
//    });
//  });
//
//  describe("Hex to RGB conversion", function() {
//    var url = "http://localhost:3000/hexToRgb?hex=00ff00";
//
//    it("returns status 200", function(done) {
//      request(url, function(error, response, body) {
//        expect(response.statusCode).to.equal(200);
//        done();
//      });
//    });
//
//    it("returns the color in RGB", function(done) {
//      request(url, function(error, response, body) {
//        expect(body).to.equal("[0,255,0]");
//        done();
//      });
//    });
//  });
//
//});
//
//
//
//
////var expect  = require("chai").expect;
////var request = require("request");
////
////describe("Color Code Converter API", function() {
////
////  describe("RGB to Hex conversion", function() {
////
////    var url = "http://localhost:3000/Add?red=100&green=300";
////
////    it("returns status 200", function(done) {
////      request(url, function(error, response, body) {
////        expect(response.statusCode).to.equal(200);
////        done();
////      });
////    });
////
////    it("returns the color in hex", function(done) {
////      request(url, function(error, response, body) {
////        expect(body).to.equal(400);
////        done();
////      });
////    });
////
////  });
////
////
////
////});
//
