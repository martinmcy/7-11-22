// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級1":
            case "層級1":return tiles.createTilemap(hex`100010000708080808080808080808080808080106090909090909090909090909090a04060909090909090909090909090909040609090b0b0b0b0b09090909090909040609090b0909090909090909090909040609090b0909090909090909090909040609090b09090b0b0b0b0b0b0b0b0b0406090e0b090909090909090909090904060b0b0b090909090909090909090904060c0c0b09090b0b0b0b0b0b0b0909040609090b09090b0c090909090b0909040609090b09090b090909090d0b0909040609090b09090b09090b0b0b0b0909040609090909090b0909090909090909040609090909090b09090909090909090402050505050505050505050505050503`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 . . . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 2 2 2 . . . . . . . . . . . 2 
2 . . 2 . . 2 2 2 2 2 2 2 . . 2 
2 . . 2 . . 2 . . . . . 2 . . 2 
2 . . 2 . . 2 . . . . . 2 . . 2 
2 . . 2 . . 2 . . 2 2 2 2 . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorLight2,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.floorLight0,sprites.dungeon.doorLockedNorth,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.buttonPink], TileScale.Sixteen);
            case "層級2":
            case "層級2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
