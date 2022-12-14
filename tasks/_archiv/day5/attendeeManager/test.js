describe("attendeeManager Function Tests", function () {
  const USER_NAME = "Maria";

  let sandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    sandbox.restore();
    resetAttendeesArray();
  });

  it("calling addAttendee function adds an attendee name to the attendees array", function () {
    addAttendee(USER_NAME);
    chai.expect(attendees).to.include(USER_NAME);
  });

  it("calling removeAttendee function removes an attendee from the attendees array", function () {
    addAttendee(USER_NAME);
    chai.expect(attendees).to.include(USER_NAME);
    removeAttendee(USER_NAME);
    chai.expect(attendees).to.not.include(USER_NAME);
  });

  it("trying to add the same user twice will not work and lead into a console.log", function () {
    const log = sandbox.spy(console, "log");
    addAttendee(USER_NAME);
    addAttendee(USER_NAME);
    chai.expect(log.calledOnceWith("Attendee name already exists.")).to.be.true;
  });

  it("trying to remove a attendee name that doesn't exist leads into a console.log", function () {
    const log = sandbox.spy(console, "log");
    addAttendee(USER_NAME);
    addAttendee(USER_NAME);
    chai.expect(log.calledOnceWith("Attendee name already exists.")).to.be.true;
  });
});
