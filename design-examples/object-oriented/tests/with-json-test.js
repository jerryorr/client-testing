describe('ShipFilterer - programmatic', function () {
  var expect = chai.expect

  it('only displays rows with selected ship class', function () {
    var filterer = new ShipFilterer([
      {
       name: 'USS Challenger',
       registry: 'NCC-71099',
       shipClass: 'Galaxy'
      },
      {
        name: 'USS Constellation',
        registry: 'NCC-1017',
        shipClass: 'Constitution'
      },
      {
        name: 'USS Enterprise',
        registry: 'NCC-1701',
        shipClass: 'Constitution'
      },
      {
        name: 'USS Enterprise',
        registry: 'NCC-1701-D',
        shipClass: 'Galaxy'
      }
    ])

    var rows = filterer.$el.find('tbody tr')
    expect(rows.eq(0).css('display')).to.be.empty
    expect(rows.eq(1).css('display')).to.be.empty
    expect(rows.eq(2).css('display')).to.be.empty
    expect(rows.eq(3).css('display')).to.be.empty

    filterer.$el.find('select').val('Constitution')
    filterer.$el.find('select').trigger('change')

    var rows = filterer.$el.find('tbody tr')
    expect(rows.eq(0).css('display')).to.equal('none')
    expect(rows.eq(1).css('display')).to.be.empty
    expect(rows.eq(2).css('display')).to.be.empty
    expect(rows.eq(3).css('display')).to.equal('none')

    filterer.$el.find('select').val('All')
    filterer.$el.find('select').trigger('change')

    var rows = filterer.$el.find('tr')
    expect(rows.eq(0).css('display')).to.be.empty
    expect(rows.eq(1).css('display')).to.be.empty
    expect(rows.eq(2).css('display')).to.be.empty
    expect(rows.eq(3).css('display')).to.be.empty
  })
})