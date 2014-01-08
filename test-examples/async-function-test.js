describe('ImageSummary', function () {
  var expect = chai.expect
    , summary = null

  it('shows image height and width - no async handler', function () {
    summary = new ImageSummary('./picard.jpg')
    $('body').append(summary.$el)

    // These fail, because images haven't loaded yet
    expect(summary.$el.find('.height').html()).to.equal('420 px')
    expect(summary.$el.find('.width').html()).to.equal('600 px')
  })

  it('shows image height and width after ready event - with async handler', function (done) {
    summary = new ImageSummary('./picard.jpg')
    $('body').append(summary.$el)

    // Wait for ImageSummary to raise its "ready" event
    summary.$el.on('ready', function () {
      // These pass, because we've given the image time to load
      expect(summary.$el.find('.height').html()).to.equal('420 px')
      expect(summary.$el.find('.width').html()).to.equal('600 px')

      // This tells Mocha that the test has successfully completed
      done()
    })
  })

  afterEach(function () {
    summary && summary.$el.remove()
  })
})