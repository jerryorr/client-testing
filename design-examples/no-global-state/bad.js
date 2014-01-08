function onShipClassChange () {
  shipclass = $('#ship-class-select').val()
  filterByClass()
}

function filterByClass () {
  $('#ships tbody tr td.ship-class').each(function () {
    var show = shipclass === 'All' ? true : ($(this).html() === shipclass)
    $(this.parentElement).css('display', show ? 'table-row' : 'none')
  })
}
