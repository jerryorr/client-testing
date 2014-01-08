var fee = (function (fee) {
  fee.calc = function (amount) {
    // Oops... forgot the var keyword, this is a global leak!
    tax = first100(amount) + above100(amount)

    tax = parseFloat(tax.toFixed(2))
    return tax == 0 ? .01 : tax
  }

  function first100 (amount) {
    return (amount <=100 ? amount : 100) * .1
  }

  function above100 (amount) {
    return amount <= 100 ? 0 : ((amount - 100) * .05)
  }

  return fee;
}(fee || {}));