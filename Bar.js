function Bar(selector, up, down, maxWidth, maxHeight) {
    getElement(this, selector);
    var speed = 0;
    var el = this.el;
    this.x = 0;
    this.y = 0;

    this.update = function update() {
        this.y += speed;
        if (this.y > maxHeight - this.height) {
            this.y = maxHeight - this.height;
        } else if (this.y < 0) {
            this.y = 0;
        }
        el.style.top = this.y + "px";
        el.style.left = this.x + "px";
    };

    window.addEventListener("keydown", function (event) {
        if (event.keyCode === up) {
            speed -= 1;
        } else if (event.keyCode === down) {
            speed += 1;
        }
    });
    window.addEventListener("keyup", function (event) {
        speed = 0;
    });
}