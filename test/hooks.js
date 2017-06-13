//Hooks will run in the order they are defined,
//as appropriate; all before() hooks run (once), then any beforeEach() hooks, tests, any afterEach() hooks, and finally after() hooks (once).

var should = chai.should();

describe("Test the order of Mocha hooks", function() {

before(function() {
        console.log("runs before all tests in this block");
  });

  after(function() {
        console.log("runs after all tests in this block");
  });

  beforeEach(function() {
        console.log("runs before each test in this block");
  });

  afterEach(function() {
        console.log("runs after each test in this block");
  });

  it("Hooks test 1", function() {

  var num = 1;
  num.should.equal(1);

  });


});

