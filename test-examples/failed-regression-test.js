describe('Star Trek', function () {
  var expect = chai.expect
  var Enterprise = {
    // Yeah, there were others, but let's not get TOO crazy about this...
    captains: ['Archer', 'Pike', 'Kirk', 'Garrett', 'Picard'],
    bestCaptain: 'Kirk'
  }
  describe('Starship Enterprise Captains', function () {
    it('Archer was first captain', function () {
      expect(Enterprise.captains).to.be.ok
      expect(Enterprise.captains[0]).to.equal('Archer')
    })


    it('Picard was best captain', function () {
      expect(Enterprise.bestCaptain).to.equal('Picard')
    })
  })
})