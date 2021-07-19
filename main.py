def on_gesture_tilt_right():
    while input.is_gesture(Gesture.TILT_RIGHT):
        item.change(LedSpriteProperty.X, 1)
        basic.pause(Geschwindigkeit)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_up():
    while input.is_gesture(Gesture.LOGO_UP):
        item.change(LedSpriteProperty.Y, 1)
        basic.pause(Geschwindigkeit)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    while input.is_gesture(Gesture.TILT_LEFT):
        item.change(LedSpriteProperty.X, -1)
        basic.pause(Geschwindigkeit)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def setze_pos_tor(pos_x: number, pos_y: number):
    for index in range(4):
        tor.set(LedSpriteProperty.BRIGHTNESS, 0)
        basic.pause(300)
        tor.set(LedSpriteProperty.BRIGHTNESS, 100)
        tor.set(LedSpriteProperty.X, pos_x)
        tor.set(LedSpriteProperty.Y, pos_y)
        basic.pause(300)

def on_gesture_logo_down():
    while input.is_gesture(Gesture.LOGO_DOWN):
        item.change(LedSpriteProperty.Y, -1)
        basic.pause(Geschwindigkeit)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

Geschwindigkeit = 0
tor: game.LedSprite = None
item: game.LedSprite = None
item = game.create_sprite(2, 4)
tor = game.create_sprite(2, 2)
Geschwindigkeit = 100
setze_pos_tor(randint(0, 4), randint(0, 4))

def on_forever():
    if item.is_touching(tor):
        music.play_tone(659, music.beat(BeatFraction.EIGHTH))
        setze_pos_tor(randint(0, 4), randint(0, 4))
basic.forever(on_forever)
