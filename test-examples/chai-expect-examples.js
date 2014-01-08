describe('chai expect', function () {
    var expect = chai.expect

    it('ok', function () {
      expect(true).to.be.ok
      expect('all your base are belong to us').to.be.ok
      expect({ id: 42, label: 'the answer' }).to.be.ok
    })

    it('null', function () {
      expect(null).to.be.null
      expect('all your base are belong to us').to.not.be.null
      expect('all your base are belong to us').to.be.null
    })

    it('false', function () {
      expect(false).to.be.false
      expect(0).to.be.false
    })

    it('undefined', function () {
      expect(undefined).to.be.undefined
      expect(null).to.be.undefined
    })

    it('equal', function () {
      expect(5).to.equal(5)
      expect('5').to.equal(5)
    })

    it('deep.equal', function () {
      expect({a: 1}).to.deep.equal({a: 1})
      expect({a: 1}).to.equal({a: 1})
    })

    it('include', function () {
      expect([1, 2, 3]).to.include(2)
      expect([1, 2, 3]).to.include(4)
    })

    it('above/below', function () {
      expect(1).to.be.below(2)
      expect(1).to.be.above(2)
    })

    it('typeof', function () {
      expect(1).to.be.a('number')
      expect('1').to.be.a('string')
      expect(/NCC-1701-(.)/).to.be.a('regexp')
      expect('1').to.be.a('number')
    })
})