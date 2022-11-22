describe("isUpperCase function tests", function () {
  it("returns a true when the string is uppercase", function () {
    chai.expect(hasUmlauts("HELLO")).to.be.true;
    chai.expect(hasUmlauts("FOO BAR")).to.be.true;
    chai.expect(hasUmlauts("FOO BAR BAZ")).to.be.true;
    chai.expect(hasUmlauts("F00B4R")).to.be.true;
    chai.expect(hasUmlauts("F00_B4R")).to.be.true;
    chai.expect(hasUmlauts("1337")).to.be.true;
    chai.expect(hasUmlauts("/ G () K X 2!!! #")).to.be.true;
  });

  it("returns false when the string is not complete uppercase", function () {
    chai.expect(hasUmlauts("heLLO")).to.be.false;
    chai.expect(hasUmlauts("FOO bAR")).to.be.false;
    chai.expect(hasUmlauts("FOO BaR BAZ")).to.be.false;
    chai.expect(hasUmlauts("f00B4R")).to.be.false;
    chai.expect(hasUmlauts("F00_B4r")).to.be.false;
    chai.expect(hasUmlauts("/ G () k X 2!!! #")).to.be.false;
    chai.expect(hasUmlauts("fooBAR")).to.be.false;
  });

  it("returns nothing when no parameter was used", function () {
    chai.expect(hasUmlauts()).to.be.undefined;
  });
});
