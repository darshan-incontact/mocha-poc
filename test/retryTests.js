//
//
///*This feature is designed to handle end-to-end tests */
////You can choose to retry failed tests up to a certain number of times
////This feature does re-run beforeEach/afterEach hooks but not before/after hooks.
//
////var chai = require('chai');
//
//var assert = chai.assert;
//var counter = 1;
//
//
////.only
//describe('Retries Test Suite', function() {
//
////Example of strictEqual
//  it('strictEqual: Check strictEqual === assertion', function() {
//    this.retries(100);
//
//    console.log("Retry " + counter++);
//    var num = 10;           //valid
//    var num1= '10';       //Invalid
//    //var num1= 10;
//    assert.strictEqual(num,num1);
//  });
//
//});