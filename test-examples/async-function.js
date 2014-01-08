var ImageSummary = (function () {
  return function (src) {
    this.$el = $('<div><img src="' + src + '"/></div>')

    var self = this
      , img = this.$el.find('img')

    // We can't get the image height/width until after it finishes loading
    img.load(function () {
      self.$el.append('<span class="height">' + img.height() + ' px</span>')
        .append('<span class="width">' + img.width() + ' px</span>')

      // Now that image is loaded and we've displayed the height/width,
      // trigger a ready event so calling code knows we're done
      self.$el.trigger('ready')
    })
  }
}())