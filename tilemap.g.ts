// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`12000d00010101010101010101010000000000010101010000000100000000010000000000000101000000000000000000010000000100000001000000000000000000000000000100000001000000020000010000010000000000000000010101010000000000000000000000000000010000000000000000000000000001000001000000000000000000000000000000000001000001000000000000000001000000000000000001000001010100000000000001000000000000000000010104000000000001010101030000000000010101010000000101010101010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 
2 . . . 2 . . . . 2 . . . . . . 2 2 
. . . . . . . . . 2 . . . 2 . . . 2 
. . . . . . . . . . . . . 2 . . . 2 
. . . . . . 2 . . 2 . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . 2 . . 2 
. . . . . . . . . . . . . . . . . 2 
. . 2 . . . . . . . . 2 . . . . . . 
. . 2 . . 2 2 2 . . . . . . 2 . . . 
. . . . . . 2 2 . . . . . . 2 2 2 2 
. . . . . . 2 2 2 2 . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
