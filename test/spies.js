//
///*A test spy is an object that records its interaction with other objects throughout the code base.
//When deciding if a test was successful based on the state of available objects alone is not sufficient,
//we can use test spies and make assertions on things such as the number of calls,
//arguments passed to specific functions, return values and more.
//*/
//
//var expect = chai.expect;
//
//describe("Demonstrating Spies with Chai", function() {
//
//
//function original (name) {
//
//  console.log("Hello World");
//}
//
//var spy = chai.spy(original);
//
//
//     it("Expect spy to have been called only once", function() {
//     spy('name');
//     expect(spy).to.have.been.called.once;
//     });
//
//    it("Expect spy to have been called only twice", function() {
//    spy('name');
//    expect(spy).to.have.been.called.twice;
//    });
//
//    it("Expect spy to have been called exactly thrice", function() {
//    spy('name');
//    expect(spy).to.have.been.called.exactly(3);
//    expect(spy).to.not.have.been.called.exactly(4);
//    });
//
//    it("spy() should have been called at least 3 times" , function() {
//    expect(spy).to.have.been.called.min(3);
//    expect(spy).to.have.been.called.at.least(3);
//    });
//
//    it("Check if its spy", function() {
//    expect(spy).to.be.spy;
//    });
//
//    it("Should have been called", function() {
//    spy();
//    expect(spy).to.have.been.called();
//    });
//
//    it("Should have been called with argument 'Name", function() {
//    spy('name');
//    expect(spy).to.have.been.called.with('name');
//
//    })
//
//})