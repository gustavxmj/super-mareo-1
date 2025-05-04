// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`12000d00010101010101010101010000000000010101010000000100000000010001000100010101000001000000010100010001000100000001000101010000000000000000000101000101000000000001010000010001000000000000010101010000000000010001010000000001010100000100000100010000000001000001010000000001000100010001000001000001010001000000000000000001000000000000010001000101000100010001000001000000010000000000000100010001000001010101000000010000010101010000000101010101010101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 
2 . . . 2 . . . . 2 . 2 . 2 . 2 2 2 
. . 2 . . . 2 2 . 2 . 2 . 2 . . . 2 
. 2 2 2 . . . . . . . . . 2 2 . 2 2 
. . . . . 2 2 . . 2 . 2 . . . . . . 
2 2 2 2 . . . . . 2 . 2 2 . . . . 2 
2 2 . . 2 . . 2 . 2 . . . . 2 . . 2 
2 . . . . 2 . 2 . 2 . 2 . . 2 . . 2 
2 . 2 . . . . . . . . 2 . . . . . . 
2 . 2 . 2 2 . 2 . 2 . 2 . . 2 . . . 
2 . . . . . . 2 . 2 . 2 . . 2 2 2 2 
. . . 2 . . 2 2 2 2 . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
