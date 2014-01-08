define(function () {
  var calc = {}

  calc.fee = function (product) {
    var amount = product.price
    var tax = first100(amount) + above100(amount)

    tax = parseFloat(tax.toFixed(2))
    return tax == 0 ? .01 : tax
  }

  function first100 (amount) {
    return (amount <=100 ? amount : 100) * .1
  }

  function above100 (amount) {
    return amount <= 100 ? 0 : ((amount - 100) * .05)
  }

  calc.tax = function (product) {
    return .06 * product.price
  }

  calc.all = function (product) {
    return {
      bureaucracy: calc.fee(product),
      tax: product.taxable ? calc.tax(product) : 0
    }
  }

  calc.total = function (product, fees) {
    return product.price + fees.bureaucracy + fees.tax
  }

  return calc
})