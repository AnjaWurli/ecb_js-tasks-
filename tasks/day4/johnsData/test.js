describe("johnsData Function Tests", function () {
  let sandbox;
  let log;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    sandbox.restore();
    log = sandbox.spy(console, "log");
  });

  it("contains a property firstName with the value John", function () {
    chai.expect(johnsData).to.include({ firstName: "John" });
  });

  it("contains a property surName with the value Doe", function () {
    chai.expect(johnsData).to.include({ surName: "Doe" });
  });

  it("contains a property age with the value 28", function () {
    chai.expect(johnsData).to.include({ age: 28 });
  });

  it("contains a property city with the value Hamburg", function () {
    chai.expect(johnsData).to.include({ city: "Hamburg" });
  });

  it("contains a property children with the values Mia, Fynn", function () {
    chai.expect(johnsData.children).to.eql(["Mia", "Fynn"]);
  });

  it("contains a property hobbies with the values Football, Playing Guitar", function () {
    chai.expect(johnsData.hobbies).to.eql(["Football", "Playing Guitar"]);
  });

  it("the function fullName returns John Doe", function () {
    chai.expect(fullName()).to.equal("John Doe");
  });

  it("updates the passed in property of the johnsData object when the changeJohnsData function was executed successful", function () {
    changeJohnsData("firstName", "Max");
    changeJohnsData("surName", "Müller");
    changeJohnsData("age", 24);
    changeJohnsData("city", "Berlin");
    changeJohnsData("children", ["Lia"]);
    changeJohnsData("hobbies", ["MMA"]);
    chai.expect(johnsData).to.eql({
      firstName: "Max",
      surName: "Müller",
      age: 24,
      city: "Berlin",
      children: ["Lia"],
      hobbies: ["MMA"],
    });
  });

  it("logs an info message when the changeJohnsData function was executed but no vaikd propName was passed in", function () {
    changeJohnsData("foo", "bar");
    chai.expect(
      log.calledOnceWith(
        "Sorry the passed in argument doesn't exists as a property in the johnsData object"
      )
    ).to.be.true;
  });
});
