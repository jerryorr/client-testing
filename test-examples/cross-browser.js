var highlighter = (function (highlighter) {
  highlighter.element = function (el, text, clazz) {
    if (el.nodeType === 3 && new RegExp(text, 'i').test(el.textContent)) {
      el.parentNode.classList.add(clazz)
    }

    Array.prototype.forEach.call(el.childNodes, function (child) {
      highlighter.element(child, text, clazz)
    })
  }

  return highlighter;
}(highlighter || {}));