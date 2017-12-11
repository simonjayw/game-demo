var Paddle = function () {
    var image = imageFromPath('./img/paddle.png')
    var o = {
        image: image,
        x: 200,
        y: 450,
        speed: 15,
    }
    o.moveLeft = function () {
        this.x -= this.speed
    }
    o.moveRight = function () {
        this.x += this.speed
    }
    return o
}