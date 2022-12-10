def on_button_pressed_a():
    sprite.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def create_enemy():
    global enemy
    enemy = game.create_sprite(randint(0, 4), 0)
    basic.pause(100)
    for index in range(4):
        enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(100)

def on_button_pressed_b():
    sprite.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

enemy: game.LedSprite = None
sprite: game.LedSprite = None
sprite = game.create_sprite(2, 4)
create_enemy()

def on_forever():
    if enemy.is_touching_edge():
        enemy.delete()
        create_enemy()
basic.forever(on_forever)

def on_forever2():
    if enemy.is_touching(sprite):
        game.game_over()
basic.forever(on_forever2)
