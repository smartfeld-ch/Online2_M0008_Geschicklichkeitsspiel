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
input.onGesture(Gesture.LogoDown, function () {
    while (input.isGesture(Gesture.LogoDown)) {
        item.change(LedSpriteProperty.Y, -1)
        basic.pause(Geschwindigkeit)
    }
})
let Geschwindigkeit = 0
let item: game.LedSprite = null
item = game.createSprite(2, 4)
let tor = game.createSprite(2, 0)
let Hindernis_1 = game.createSprite(randint(0, 4), 1)
let Hindernis_2 = game.createSprite(randint(0, 4), 3)
Geschwindigkeit = 100
basic.forever(function () {
    if (item.isTouching(tor)) {
        music.playTone(659, music.beat(BeatFraction.Eighth))
        item.set(LedSpriteProperty.X, 2)
        item.set(LedSpriteProperty.Y, 4)
    }
    if (item.isTouching(Hindernis_1)) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    if (item.isTouching(Hindernis_2)) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
})
