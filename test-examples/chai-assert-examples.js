describe('chai assert', function () {
    var assert = chai.assert

    it('assert', function () {
      assert(true)
      assert('all your base are belong to us')
      assert({ id: 42, label: 'the answer' })
    })

    it('assert null', function () {
      assert(null)
    })

    it('assert false', function () {
      assert(false)
    })

    it('assert undefined', function () {
      assert(undefined)
    })

    it('equal', function () {
      assert.equal(5, 5)
      assert.equal("5", 5)
    })

    it('strictEqual', function () {
      assert.strictEqual(5, 5)
      assert.strictEqual("5", 5)
    })

    it('deepEqual', function () {
      assert.deepEqual({a: 1}, {a: 1})
      assert.equal({a: 1}, {a: 1})
    })

    it('include', function () {
      assert.include([1, 2, 3], 2)
      assert.include([1, 2, 3], 4)
    })

    it('operator', function () {
      assert.operator(1, '<', 2)
      assert.operator(1, '>', 2)
    })

    it('typeof', function () {
      assert.typeOf(1, 'number')
      assert.typeOf('1', 'string')
      assert.typeOf(/NCC-1701-(.)/, 'regexp')
      assert.typeOf('1', 'number')
    })
})