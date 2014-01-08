describe('ShipFilterer - declarative', function () {
  var expect = chai.expect

  it('only displays rows with selected ship class', function () {
    var select = $('<select/>')
    $('<option/>').html('All').appendTo(select)
    $('<option/>').html('Constitution').appendTo(select)
    $('<option/>').html('Galaxy').appendTo(select)

    var table = $('<table><tbody/></table>')
    $('<tr><td>USS Challenger</td><td>NCC-71099</td><td class="ship-class">Galaxy</td></tr>').appendTo(table)
    $('<tr><td>USS Constellation</td><td>NCC-1017</td><td class="ship-class">Constitution</td></tr>').appendTo(table)
    $('<tr><td>USS Enterprise</td><td>NCC-1701</td><td class="ship-class">Constitution</td></tr>').appendTo(table)
    $('<tr><td>USS Enterprise</td><td>NCC-1701-D</td><td class="ship-class">Galaxy</td></tr>').appendTo(table)

    var filterer = new ShipFilterer(select, table)

    var rows = table.find('tr')
    expect(rows.eq(0).css('display')).to.be.empty
    expect(rows.eq(1).css('display')).to.be.empty
    expect(rows.eq(2).css('display')).to.be.empty
    expect(rows.eq(3).css('display')).to.be.empty

    select.val('Constitution')
    select.trigger('change')

    var rows = table.find('tr')
    expect(rows.eq(0).css('display')).to.equal('none')
    expect(rows.eq(1).css('display')).to.be.empty
    expect(rows.eq(2).css('display')).to.be.empty
    expect(rows.eq(3).css('display')).to.equal('none')

    select.val('All')
    select.trigger('change')

    var rows = table.find('tr')
    expect(rows.eq(0).css('display')).to.be.empty
    expect(rows.eq(1).css('display')).to.be.empty
    expect(rows.eq(2).css('display')).to.be.empty
    expect(rows.eq(3).css('display')).to.be.empty
  })
})