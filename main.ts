let ball: Sprite = null
let Clam = sprites.createProjectileFromSide(img`
    . . . . . f c c c c f . . . . . 
    . . c c f b b 3 3 b b f c c . . 
    . c b 3 3 b b c c b b 3 3 b c . 
    . f 3 c c c b c c b c c c 3 f . 
    f c b b c c b c c b c c b b c f 
    c 3 c c b c c c c c c b c c 3 c 
    c 3 c c c c c c c c c c c c 3 c 
    . f b b c c c c c c c c b b f . 
    . . f b b c 8 9 9 8 c b b f . . 
    . . c c c f 9 3 1 9 f c c c . . 
    . c 3 f f f 9 3 3 9 f f f 3 c . 
    c 3 f f f f 8 9 9 8 f f f f 3 c 
    f 3 c c f f f f f f f f c c 3 f 
    f b 3 c b b f b b f b b c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, 10, 0)
Clam.setPosition(0, 111)
game.onUpdateInterval(1000, function () {
    ball = sprites.createProjectileFromSprite(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, Clam, 0, -50)
    ball.y += -3
    ball.x += 0
})
