function onShipClassChange (event) {
  var shipclass = $(event.target).val()
  filterByClass($('#ships'), shipclass)
}

function filterByClass (table, shipclass) {
  $(table).find('tbody tr td.ship-class').each(function () {
    var show = shipclass === 'All' ? true : ($(this).html() === shipclass)
    $(this.parentElement).css('display', show ? 'table-row' : 'none')
  })
}


