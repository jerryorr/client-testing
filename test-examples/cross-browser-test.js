describe('highlighter', function () {
  var expect = chai.expect

  describe('text', function () {
    it('does not apply highlight class to element if it does not contain the text', function () {
      var $el = $('<div>Captain Kirk, NCC-1701</div>')
      highlighter.element($el[0], 'Picard', 'hl')
      expect($el.hasClass('hl')).to.be.false
    })
    it('applies highlight class to element if it contains the text', function () {
      var $el = $('<div>Captain Picard, NCC-1701D</div>')
      highlighter.element($el[0], 'Picard', 'hl')
      expect($el.hasClass('hl')).to.be.true
    })

    it('applies highlight class to child elements that contain the text', function () {
      var $el = $('<div>Grandparent<div>Parent<div>Sibling</div><div id="target">Captain Picard, NCC-1701D</div></div></div>')
      highlighter.element($el[0], 'Picard', 'hl')
      expect($el.find('.hl').length).to.equal(1)
      expect($el.find('#target').hasClass('hl')).to.be.true
    })

    it('is case insensitive', function () {
      var $el = $('<div>Captain picard, NCC-1701D</div>')
      highlighter.element($el[0], 'Picard', 'hl')
      expect($el.hasClass('hl')).to.be.true
    })
  })

})