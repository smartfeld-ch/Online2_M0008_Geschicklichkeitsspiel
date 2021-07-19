input.onGesture(Gesture.TiltRight, function () {
    while (input.isGesture(Gesture.TiltRight)) {
        item.change(LedSpriteProperty.X, 1)
        basic.pause(Geschwindigkeit)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    while (input.isGesture(Gesture.LogoUp)) {
        item.change(LedSpriteProperty.Y, 1)
        basic.pause(Geschwindigkeit)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        item.change(LedSpriteProperty.X, -1)
        basic.pause(Geschwindigkeit)
    }
})
function setze_pos_tor (pos_x: number, pos_y: number) {
    for (let index = 0; index < 4; index++) {
        tor.set(LedSpriteProperty.Brightness, 0)
        basic.pause(300)
        tor.set(LedSpriteProperty.Brightness, 100)
        tor.set(LedSpriteProperty.X, pos_x)
        tor.set(LedSpriteProperty.Y, pos_y)
        basic.pause(300)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    while (input.isGesture(Gesture.LogoDown)) {
        item.change(LedSpriteProperty.Y, -1)
        basic.pause(Geschwindigkeit)
    }
})
let Geschwindigkeit = 0
let tor: game.LedSprite = null
let item: game.LedSprite = null
item = game.createSprite(2, 4)
tor = game.createSprite(2, 2)
Geschwindigkeit = 100
setze_pos_tor(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (item.isTouching(tor)) {
        music.playTone(659, music.beat(BeatFraction.Eighth))
        setze_pos_tor(randint(0, 4), randint(0, 4))
    }
})
