describe('before/after hook examples', function () {
  before(function () {
    console.log('before entire suite')
  })

  beforeEach(function () {
    console.log('before each test')
  })

  afterEach(function () {
    console.log('after each test')
  })

  after(function () {
    console.log('after entire suite')
  })

  it('test1', function () {
    console.log('test1')
  })

  it('test2', function () {
    console.log('test2')
  })
})