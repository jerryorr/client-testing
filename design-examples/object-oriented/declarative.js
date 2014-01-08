var ShipFilterer = function (select, table) {
  this.$classSelect = $(select)
  this.table = new ShipTable(table)

  var self = this
  this.$classSelect.on('change', function () {
    self.changeClass(self.$classSelect.val())
  })
}

ShipFilterer.prototype.changeClass = function (shipClass) {
  this.table.filter(shipClass)
}

var ShipTable = function (el) {
  this.$el = $(el)
}

ShipTable.prototype.filter = function (shipClass) {
  this.$el.find('tbody tr td.ship-class').each(function () {
    var show = shipClass === 'All' ? true : ($(this).html() === shipClass)
    $(this.parentElement).css('display', show ? '' : 'none')
  })
}
