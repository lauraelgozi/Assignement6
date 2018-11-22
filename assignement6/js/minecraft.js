$(document).ready(function () {
    var Minecraft = {
        boardArr: [
            ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "white", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "white", "white", "white", "white", "sky", "white", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "white", "white", "white", "white", "white", "white", "white", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "sky", "white", "white", "sky", "sky", "sky", "sky", "sky", "sky", "green", "green", "green", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "green", "green", "green", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "green", "green", "green", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "trunk", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "sky", "green", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "trunk", "sky", "sky", "sky", "sky"],
            ["sky", "sky", "sky", "green", "green", "green", "sky", "sky", "sky", "sky", "sky", "sky", "rock", "rock", "sky", "trunk", "sky", "sky", "sky", "rock"],
            ["pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre", "pierre"],
            ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
            ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
            ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
            ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
            ["dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt"],
        ]
    };
    /**
     * ************************* Create html using js Section ***********************************
     */
    var menu = $("<div/>");
    menu.addClass("menu");
    $("body").append(menu);
    var pickaxe = $("<div/>");
    pickaxe.addClass("pickaxe");
    menu.append(pickaxe);
    var shovel = $("<div/>");
    shovel.addClass("shovel");
    menu.append(shovel);
    var axe = $("<div/>");
    axe.addClass("axe");
    menu.append(axe);
    var empty = $("<div/>");
    empty.addClass("empty");
    menu.append(empty);
    var board = $("<div/>");
    board.addClass("board");
    $("body").append(board);

    //Minecraft.createBoard = function () {
    for (var i = 0; i < Minecraft.boardArr.length; i++) {
        for (var j = 0; j < Minecraft.boardArr[i].length; j++) {
            var pixel = $("<div/>");
            pixel.addClass("pixel")
            pixel.addClass(Minecraft.boardArr[i][j]);
            board.append(pixel);

        }
    }
//}
});
