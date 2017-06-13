
//var chai = require('chai');

var assert = chai.assert;
var calc = new MathUtils();

describe('Demonstrating MOCHA Chai Assertion Library', function() {

  it('equal: should start empty', function() {
    var arr = [];
    assert.equal(arr.length, 0);
  });

//Example of strictEqual
  it('strictEqual: Check strictEqual === assertion', function() {
    var num = 10;           //valid
    //var num1= '10';       //Invalid
    var num1= 10;
    assert.strictEqual(num,num1);
  });

//Example of strictEqual
    it('strictEqual: returns undefined if var is empty', function() {
      var result;

      assert.strictEqual(result, undefined, 'result is undefined');
    });

//Example of typeOf
    it("typeOf: Asserts type of value is same", function() {
        var name = "John Doe";  //Valid
        //r name = 10;          //Invalid
      assert.typeOf(name, 'string', "name is a string");
    });

    //Example of isOK
    it("isOk: Asserts that object is truthy", function() {

        assert.isOk('everything', 'everything is ok');
        //assert.isOk(false, 'this will fail');
    });


    //Example of isNotOK
    it("isNotOk: Asserts that object is falsy", function() {

        //assert.isNotOk('everything', 'everything is ok');
        assert.isNotOk(false, 'this will fail');
    });


    //Example of isNotEqual
    it("isNotEqual: similar to !=", function() {
        assert.notEqual(2,3,"2 and 3 are not equal");
    });

    //Example of .isAbove
    it("isAbove: Checks value to be check is greater than value to be above >", function() {
        assert.isAbove(5,2);
    });

      //Example of .isAtLeast
    it("isAbove: Checks value to be check is >= value at least", function() {
        assert.isAtLeast(5,2);
        assert.isAtLeast(3,3);
    });

});

describe("Simpl", function(){

it("Should add 2 nos", function() {

assert.equal(calc.sum(10,20), 30);
assert.equal(calc.subtract(200,50), 150);

});
});



describe("MathUtil tests", function() {

//test sum function for simple addition
  it('equal: Should able to add two numbers 3 and 5', function(){
    assert.equal(calc.sum(3,5), 8);
  });

//test sum function for simple subtraction
  it('equal: Should able to subtract two numbers 200 and 50', function(){
    assert.equal(calc.subtract(200,50), 150);
  });

//test sum function for simple multiplication
  it('equal: Should able to multiply two numbers 2 and 5', function(){
    assert.equal(calc.multiply(2,5), 10);
  });

  //test sum function for simple division
    it('equal: Should able to division two numbers 10 and 2', function(){
      assert.equal(calc.divide(10,2), 5);
    });

  //test sum function for simple average
    it('equal: Should able to calculate average two numbers 10 and 10', function(){
      assert.equal(calc.average(10,10), 10);
    });

  //test sum function for simple factorial
    it('equal: Should able to calculate factorial of number 5', function(){
      assert.equal(calc.factorial(5), 120);
    });

})
