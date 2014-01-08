define(function(require) {
  var $ = require('jquery')
    , calc = require('calc/main')
    , template = require('text!./product-template.html')
    , _ = require('underscore')

  var Summary = function (product) {
    var fees = calc.all(product)
    var data = {
      product: product,
      fees: fees,
      total: calc.total(product, fees)
    }
    this.$el = $(_.template(template, data))
  }

  return Summary
})