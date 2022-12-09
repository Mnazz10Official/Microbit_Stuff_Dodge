input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
function create_enemy () {
    enemy = game.createSprite(randint(0, 4), 0)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let enemy: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
create_enemy()
basic.forever(function () {
    if (enemy.isTouchingEdge()) {
        enemy.delete()
        create_enemy()
    }
})
basic.forever(function () {
    if (enemy.isTouching(sprite)) {
        game.gameOver()
    }
})
