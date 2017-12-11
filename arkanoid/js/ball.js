var Ball = function () {
    var image = imageFromPath('./img/ball.png')
    var o = {
        image: image,
        x: 200,
        y: 410,
        speedX: 20,
        speedY: 20,
        fired: false,
    }
    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        if (o.fired) {
            // move
            if (o.x < 0 || o.x > 600 - 40) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y > 600 - 40) {
                o.speedY *= -1
            }
            // update
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.cllide = function (paddle) {
        var isIn = isRecIntersect(o, paddle);
        return isIn.result;
    }
    return o
}