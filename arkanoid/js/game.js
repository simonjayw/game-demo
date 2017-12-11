var ArkGame = function () {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#arkanoid')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    // draw
    g.drawImage = function (arkImg) {
        context.drawImage(arkImg.image, arkImg.x, arkImg.y)
    }
    // events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })

    // 
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    // timmer
    setInterval(function () {
        // events
        var actions = Object.keys(g.actions)
        actions.forEach(function (key, i) {
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        })
        // update
        g.update()
        // draw
        context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()
    }, 1000/30)

    return g
}