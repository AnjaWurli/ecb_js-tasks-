---
to: tasks/<%= name %>/test.js
---

describe("<%= name %> Function Tests", function () {
  it("some test", function () {
    chai.expect(<%= name %>("Foobar")).to.be.true;
  });
});
