define(function (require) {
  var Product = require('views/product')
    , ServiceCall = require('views/service-call')
    , $ = require('jquery')

  var product = {
    name: 'Widget',
    price: 250,
    taxable: true
  }

  var serviceCall = {
    name: 'Widget Repair',
    price: 500,
    taxable: false
  }

  $('body').append(new Product(product).$el)
           .append(new ServiceCall(serviceCall).$el)
})