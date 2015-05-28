function getElement(obj, selector) {
    obj.el = document.querySelector(selector);
    obj.width = obj.el.offsetWidth;
    obj.height = obj.el.offsetHeight;
}