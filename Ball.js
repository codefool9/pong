function Ball( width, height, score) {
    this.radius;
    this.speed = new Vector(2, 2);
    getElement(this, ".ball");
    this.radius = this.el.offsetWidth * 0.5;
    this.x = width * 0.5;
    this.y = height * 0.5;
    this.draw = function() {
        var x = this.x + this.speed.x;
        var y = this.y + this.speed.y;
        if (x + this.radius > width || x - this.radius < 0) {
            x = width * 0.5;
            if (this.speed.x > 0) {
                score("player1");
            } else if (this.speed.x < 0) {
                score("player2");
            }
        }
        if (y + this.radius > height || y - this.radius < 0) {
            this.speed.y *= -1;
            y = this.y + this.speed.y;
        }

        this.x = x;
        this.y = y;
        this.el.style.left = this.x + "px";
        this.el.style.top = this.y + "px";
    };

    this.draw();
}
