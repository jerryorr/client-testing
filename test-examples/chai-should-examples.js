describe('chai expect', function () {
    var should = chai.should()

    it('ok', function () {
      'all your base are belong to us'.should.be.ok
      new Object({ id: 42, label: 'the answer' }).should.be.ok
    })

    it('exist', function () {
      should.not.exist(null)
      should.not.exist(undefined)
      should.exist('all your base are belong to us')
      should.not.exist('all your base are belong to us')
    })

    it('false', function () {
      false.should.be.false
      new Number(0).should.be.false
    })

    it('equal', function () {
      new Number(5).should.equal(5)
      '5'.should.equal(5)
    })

    it('deep.equal', function () {
      new Object({a: 1}).should.deep.equal({a: 1})
      new Object({a: 1}).should.equal({a: 1})
    })

    it('include', function () {
      new Array(1, 2, 3).should.include(2)
      new Array(1, 2, 3).should.include(4)
    })

    it('above/below', function () {
      new Number(1).should.be.below(2)
      new Number(1).should.be.above(2)
    })

    it('typeof', function () {
      new Number(1).should.be.a('number')
      '1'.should.be.a('string')
      new RegExp("NCC-1701-(.)").should.be.a('regexp')
      '1'.should.be.a('number')
    })
})