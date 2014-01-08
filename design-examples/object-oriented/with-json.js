var ShipFilterer = function (ships) {
  this.$el = $('<div/>')
  this.$el.append(this.template)

  this.$classSelect = this.$el.find('select')
  this.table = new ShipTable(this.$el.find('table'), ships)

  this.$classSelect.on('change', function () {
    this.changeClass(this.$classSelect.val())
  }.bind(this))
}

ShipFilterer.prototype.changeClass = function (shipClass) {
  this.table.filter(shipClass)
}

ShipFilterer.prototype.template = '\
<div>Show class:\
  <select>\
    <option>All</option>\
    <option>Constitution</option>\
    <option>Excelsior</option>\
    <option>Galaxy</option>\
  </select>\
</div>\
<table>\
  <thead>\
    <tr><th>Ship Name</th><th>Registry</th><th>Class</th></tr>\
  </thead>\
  <tbody>\
  </tbody>\
</table>'

var ShipTable = function ($el, ships) {
  this.$el = $el

  ships.forEach(function (ship) {
    var $tr = $('<tr/>')

    $('<td/>').html(ship.name).appendTo($tr)
    $('<td/>').html(ship.registry).appendTo($tr)
    $('<td/>').html(ship.shipClass).addClass('ship-class').appendTo($tr)

    $tr.appendTo(this.$el)
  }.bind(this))
}

ShipTable.prototype.filter = function (shipClass) {
  this.$el.find('tbody tr td.ship-class').each(function () {
    var show = shipClass === 'All' ? true : ($(this).html() === shipClass)
    $(this.parentElement).css('display', show ? '' : 'none')
  })
}
