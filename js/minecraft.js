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


    var pick = "";
    var put = "";
    var currentPick = function (event) {
        switch (event.target.className) {
            case "pickaxe":
                pick = "pickaxe";
                break;
            case "shovel":
                pick = "shovel";
                break;
            case "axe":
                pick = "axe";
                break;
        }
    }
    var remplaceTools = function (event) {
        switch (event.target.className) {
            case "empty rock":
                put = "pixel rock";
                break;
            case "empty green":
                put = "pixel green";
                break;
            case "empty pierre":
                put = "pixel pierre";
                break;
            case "empty trunk":
                put = "pixel trunk";
                break;
            case "empty dirt":
                put = "pixel dirt";
                break;
        }
        console.log(put);
    }

    var menu = $("<div/>");
    menu.addClass("menu");
    $("body").append(menu);
    var pickaxe = $("<div/>");
    pickaxe.addClass("pickaxe");
    pickaxe.click(currentPick);
    menu.append(pickaxe);
    var shovel = $("<div/>");
    shovel.addClass("shovel");
    menu.append(shovel);
    shovel.click(currentPick);
    var axe = $("<div/>");
    axe.addClass("axe");
    menu.append(axe);
    axe.click(currentPick);
    var empty = $("<div/>");
    empty.addClass("empty");
    menu.append(empty);
    var empty2 = $("<div/>");
    empty2.addClass("empty2");
    menu.append(empty2);
    var board = $("<div/>");
    board.addClass("board");
    $("body").append(board);


    var thisPixel = function (event) {
        if (put === "") {
            if (pick === "pickaxe" && $(this).hasClass("rock")) {
                event.target.className = "pixel sky";
                $(".empty").addClass("rock");
                $(".empty.rock").click(remplaceTools);

            }
            else if (pick === "shovel" && $(this).hasClass("dirt")) {
                event.target.className = "pixel sky";
                $(".empty2").addClass("dirt");
                $(".empty2.dirt").click(remplaceTools);

            }
            else if (pick === "shovel" && $(this).hasClass("pierre")) {
                event.target.className = "pixel sky";
            }
            else if (pick === "axe" && $(this).hasClass("green")) {
                event.target.className = "pixel sky";
            
            }
            else if (pick === "axe" && $(this).hasClass("trunk")) {
                event.target.className = "pixel sky";
            }

        }else{
            if (put === "pixel rock" && $(this).hasClass('sky')) {
                event.target.className = "pixel rock";
                put ="";
            }
            else if(put === "pixel dirt" && $(this).hasClass('sky')){
                event.target.className = "pixel dirt";
                put ="";
            }
        }
    }


    //Minecraft.createBoard = function () {
    for (var i = 0; i < Minecraft.boardArr.length; i++) {
        for (var j = 0; j < Minecraft.boardArr[i].length; j++) {
            var pixel = $("<div/>");
            pixel.addClass("pixel")
            pixel.addClass(Minecraft.boardArr[i][j]);
            pixel.click(thisPixel);
            board.append(pixel);

        }
    }
    //}

});
