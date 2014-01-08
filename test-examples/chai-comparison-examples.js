describe('chai - comparison of assert, expect, should', function () {
  var should = chai.should()
    , assert = chai.assert
    , expect = chai.expect

  var mymath = {
    sum: function (a, b) {
      return a + b
    }
  }

  it('show all 3 chai styles', function () {
    assert.strictEqual(mymath.sum(2, 4), 6)

    expect(mymath.sum(2, 4)).to.equal(6)

    mymath.sum(2, 4).should.equal(6)
  })

})