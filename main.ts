scene.setBackgroundColor(8)
let MySpaceplane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f 2 . . . . . . . . 
    . . . . . f 2 2 2 . . . . . . . 
    . . . . . f 2 2 f 2 . . . . . . 
    . . . . . f 2 2 9 f 2 . . . . . 
    . . . . . f 2 2 9 9 f 2 2 . . . 
    . . . . . f 2 2 9 f 2 . . . . . 
    . . . . . f 2 2 f 2 . . . . . . 
    . . . . . f 2 2 2 . . . . . . . 
    . . . . . f f 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
MySpaceplane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
