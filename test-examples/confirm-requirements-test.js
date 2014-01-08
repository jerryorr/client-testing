describe('fee.calc (assert)', function () {
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

describe('fee.calc (expect)', function () {
  var expect = chai.expect

  it('taxes 10% on first $100', function () {
    expect(fee.calc(50)).to.equal(5)
    expect(fee.calc(100)).to.equal(10)
  })

  it('taxes 10% on first $100, 5% on the rest', function () {
    expect(fee.calc(100.20)).to.equal(10.01)
    expect(fee.calc(200)).to.equal(10 + 5)
  })

  it('does not tax less than $.01', function () {
    expect(fee.calc(.01)).to.equal(.01)
  })

  it('rounds to nearest cent', function () {
    expect(fee.calc(.11)).to.equal(.01)
    expect(fee.calc(.19)).to.equal(.02)
  })
})