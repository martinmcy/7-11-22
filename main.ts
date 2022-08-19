scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級5`)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPinkDepressed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.doorLockedEast)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.doorLockedEast)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedWest, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級10`)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundCenter)
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedSouth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級8`)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.doorLockedSouth)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.doorLockedSouth)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTealDepressed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級3`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.doorLockedNorth)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.doorLockedNorth)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedEast, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級9`)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundCenter)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級1`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.doorLockedSouth)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.doorLockedEast)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`層級3`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.doorLockedWest)
    tiles.placeOnRandomTile(mySprite3, sprites.dungeon.doorLockedWest)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff..........
    .ffefbf44fbfeff.........
    .fee41fddf14eef.........
    fdfeeddddd4eff..........
    fbffee444edd4e..........
    fbf4f2222edde...........
    fcf.f22cccee............
    .ff.f44cdc4f............
    ....fffddcff............
    .....fddcff.............
    ....cddc................
    ....cdc.................
    ....cc..................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite3 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`層級3`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.doorLockedNorth)
tiles.placeOnRandomTile(mySprite3, sprites.dungeon.doorLockedWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setLife(10000)
mySprite.startEffect(effects.starField)
scene.cameraShake(4, 500)
music.bigCrash.playUntilDone()
