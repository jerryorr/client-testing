describe('fee.calc', function () {
  var assert = chai.assert

  it('taxes 10% on first $100', function () {
    assert.equal(fee.calc(50), 5)
    assert.equal(fee.calc(100), 10)
  })

  it('taxes 10% on first $100, 5% on the rest', function () {
    assert.equal(fee.calc(100.20), 10.01)
    assert.equal(fee.calc(200), 10 + 5)
  })

  it('does not tax less than $.01', function () {
    assert.equal(fee.calc(.01), .01)
  })

  it('rounds to nearest cent', function () {
    assert.equal(fee.calc(.11), .01)
    assert.equal(fee.calc(.19), .02)
  })
})
