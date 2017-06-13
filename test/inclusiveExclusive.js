///*The exclusivity feature allows you to run only the specified suite or test-case by appending .only() to the function.*/
//
//
////var chai = require('chai');
//
//var assert = chai.assert;
//
//
////.only
//describe('Exclusive Test Suite', function() {
//  it('equal: should start empty', function() {
//    var arr = [];
//
//    assert.equal(arr.length, 0);
//  });
//
////Example of strictEqual
//  it('strictEqual: Check strictEqual === assertion', function() {
//    var num = 10;           //valid
//    //var num1= '10';       //Invalid
//    var num1= 10;
//    assert.strictEqual(num,num1);
//  });
//
//});
//
//
////.skip or x
//describe('Inclusive Test Suite',function() {
//
////Example of strictEqual
//    it('strictEqual: returns undefined if var is empty', function() {
//      var result;
//
//      assert.strictEqual(result, undefined, 'result is undefined');
//    });
//
////Example of typeOf
//    it("typeOf: Asserts type of value is same", function() {
//        var name = "John Doe";  //Valid
//        //r name = 10;          //Invalid
//      assert.typeOf(name, 'string', "name is a string");
//    });
//
//    //Example of isOK
//    it("isOk: Asserts that object is truthy", function() {
//
//        assert.isOk('everything', 'everything is ok');
//        //assert.isOk(false, 'this will fail');
//    });
//
//
//    //Example of isNotOK
//    it("isNotOk: Asserts that object is falsy", function() {
//
//        //assert.isNotOk('everything', 'everything is ok');
//        assert.isNotOk(false, 'this will fail');
//    });
//
//
//    //Example of isNotEqual
//    it("isNotEqual: similar to !=", function() {
//        assert.notEqual(2,3,"2 and 3 are not equal");
//    });
//
//    //Example of .isAbove
//    it("isAbove: Checks value to be check is greater than value to be above >", function() {
//        assert.isAbove(5,2);
//    });
//
//      //Example of .isAtLeast
//    it("isAbove: Checks value to be check is >= value at least", function() {
//        assert.isAtLeast(5,2);
//        assert.isAtLeast(3,3);
//    });
//
//})
//
