//
//var should = chai.should();
//
//var name = 'John Doe';
//
//
//describe("Demonstrating MOCHA Chai Assertion Library Should", function() {
//
//it("Name Should be a String", function() {
//name.should.be.a('string');
//});
//
//
//it("Name should be John Doe", function() {
//name.should.equal('John Doe');
//});
//
//
//it("Name should have length of 8", function() {
//name.should.have.lengthOf(8);
//});
//
//it("Name should be John Doe with length of 8", function() {
//name.should.equal('John Doe').with.lengthOf(8);
//});
//
//
//});
//
////Dummy Function
//
//function dummy () {
//
//var data = '{'
//       +'"name" : "string value",'
//       +'"value"  : 1234,'
//       +'"isSomething" : true'
//       +'}';
//
//
//var obj = JSON.parse(data);
//return obj;
//
//}
//
//
//describe('Demo of testing with Should.js', function() {
//
//  it('Config should be valid', function() {
//
//      var config = dummy();
//
//      //Checks if config is truthy
//      should.exist(config);
//
//      //Checks if config is an object
//      config.should.be.an.Object;
//
//      //Converts JSON object to string
//      (function() {
//          JSON.stringify(config);
//      }).should.not.throw();
//
//
//      should.exist(config.name);
//      console.log(config.name);
//      config.name.should.be.a.String;
//
//      should.exist(config.value);
//      console.log(config.value);
//      config.value.should.be.a.Number;
//
//      should.exist(config.isSomething);
//      console.log(config.isSomething);
//      config.isSomething.should.be.a.Boolean;
//  });
//
//});
//
//
//
