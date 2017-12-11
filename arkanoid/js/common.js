/**
 * 碰撞检测
 * @param {*} move 移动物
 * @param {*} target 目标物
 */
var isRecIntersect = function (move, target) {
    var m = {
        x: move.x,
        y: move.y,
        width: move.image.width,
        height: move.image.height,
    }
    var t = {
        x: target.x,
        y: target.y,
        width: target.image.width,
        height: target.image.height,
    }
    var result = {
        result: false,
        x: '',
        y: '',
    };
    if (Math.abs(m.x - t.x) <= m.width || Math.abs(m.x - t.x) <= t.width) {
        if (Math.abs(m.y - t.y) <= m.height || Math.abs(m.y - t.y) <= t.height) {
            result.result = true

            if (m.x - t.x < 0) {
                result.x = 'left'
            } else {
                result.x = 'right'
            }

            if (m.y - t.y < 0) {
                result.y = 'top'
            } else {
                result.y = 'bottom'
            }
        }
    }

    return result
}