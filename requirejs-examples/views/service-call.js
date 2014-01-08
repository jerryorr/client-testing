define(function(require) {
  var $ = require('jquery')
    , calc = require('calc/main')
    , template = require('text!./service-call-template.html')
    , _ = require('underscore')

  var Summary = function (service) {
    var fees = calc.all(service)
    var data = {
      service: service,
      fees: fees,
      total: calc.total(service, fees)
    }
    this.$el = $(_.template(template, data))
  }

  return Summary
})