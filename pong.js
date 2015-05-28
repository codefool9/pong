function Pong() {
    getElement(this, ".board");

    function score(name) {
        var el = document.querySelector("." + name + " .score");
        var value = parseInt(el.innerText, 10);
        el.innerText = value + 1;
    }

    var ball = new Ball(this.width, this.height, score);
    var bar1 = new Bar(".bar1", 87, 83, this.width, this.height);
    var bar2 = new Bar(".bar2", 38, 40, this.width, this.height);
    bar2.x = this.width - bar2.width;
    setInterval(function () {
        bar1.update();
        if (ball.x - ball.radius < bar1.x + bar1.width) {
            if (ball.y > bar1.y && ball.y < bar1.y + bar1.height) {
                ball.speed.x *= -1;
            }
        }
        bar2.update();
        if (ball.x + ball.radius > bar2.x) {
            if (ball.y > bar2.y && ball.y < bar2.y + bar2.height) {
                ball.speed.x *= -1;
            }
        }
        ball.draw();

    });
}

var game = new Pong();