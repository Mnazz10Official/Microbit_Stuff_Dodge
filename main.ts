input.onButtonPressed(Button.A, function () {
    if (over == 0) {
        sprite.change(LedSpriteProperty.X, -1)
    }
})
function create_enemy () {
    if (over == 0) {
        enemy = game.createSprite(randint(0, 4), 0)
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            enemy.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (over == 0) {
        sprite.change(LedSpriteProperty.X, 1)
    }
})
let score = 0
let enemy: game.LedSprite = null
let sprite: game.LedSprite = null
let over = 0
if (over == 0) {
    sprite = game.createSprite(2, 4)
    create_enemy()
}
basic.forever(function () {
    if (over == 0) {
        if (enemy.isTouchingEdge()) {
            score += 1
            enemy.delete()
            create_enemy()
        }
    }
})
basic.forever(function () {
    if (over == 1) {
        music.playMelody("G F E C C - - - ", 400)
        basic.showNumber(score)
    }
})
basic.forever(function () {
    if (enemy.isTouching(sprite)) {
        game.setScore(score)
        basic.pause(100)
        over = 1
        sprite.delete()
    }
})
