$(document).ready(function () {
    /**
    * ************************* MODAL***********************************
    */
    var bool = false;
    var modal = $('<div/>');
    modal.addClass('modal');
    $("body").prepend(modal);

    var newGameButton = $('<button/>');
    newGameButton.addClass('newGameButton');
    newGameButton.addClass('modalButton');
    $('.modal').prepend(newGameButton);
    newGameButton.text('New Game');
    $('.newGameButton').on('click', function () {
        $('.modal').css('display', 'none');
    });

    var tutorialButton = $('<button/>');
    tutorialButton.addClass('tutorialButton');
    tutorialButton.addClass('modalButton');
    $('.modal').append(tutorialButton);
    tutorialButton.text('Tutorial');
    $('.tutorialButton').on('click', function () {
        var showTutorial = $('<div/>');
        showTutorial.attr('id', 'myModal');
        $('body').append(showTutorial);

        var modalCOntent = $('<div/>');
        modalCOntent.addClass('modal-content');
        $('#myModal').append(modalCOntent);

        var modalSpan = $('<span/>');
        modalSpan.addClass('close');
        $('.modal-content').append(modalSpan);
        modalSpan.text('X');

        var myTextModal = document.createElement('p');
        var you = document.getElementsByClassName('modal-content')[0];
        you.appendChild(myTextModal);
        myTextModal.innerHTML = `Minecraft is largely about gathering and using the resources from the world around you.\
    <br/> When starting out in Minecraft, you'll immediately need to gather the following:\
    <br/><strong>Dirt</strong> - Perhaps the most common block in the game. Dirt is relatively useless later\
    <br/>in the game, but can be used to create an effective temporary shelter early in the \
    <br/>game. The dirt is very useful as it can also help when you get caught in a deep \
    <br/>hole, which you can easily arrange one by one to create a dirt stair.\
    <br/><strong>Wood blocks</strong> - Hitting trees will yield wood blocks. Wood is necessary for crafting \
    <br/>everything from weapon and tool handles to torches and crafting resources.\
    <br/><strong>Gravel and Sand</strong> - Both of these resources are similar to dirt, and can be used as \
    <br/>floor or wall material. Gravel and sand both fall when no block is placed directly \
    <br/>below them.\
    <br/><strong>Wool</strong> - You can get wool by killing sheep. Wool (three pieces of the same color) \
    <br/>and any type of wooden planks is necessary when creating a bed, which is an \
    <br/>essential piece of equipment if you want to avoid frustration early on in Minecraft.`;

        var modalTut = $('#myModal');

        modalTut.css('display', 'block');

        $('.close').on('click', function () {
            modalTut.css('display', 'none');
        });
        bool = true;
        $('#myModal').click(function () {
            if (bool) {
                modalTut.css('display', 'none');
                showTutorial.empty();
            };
        });
    });
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
    Minecraft.createBoard = function () {
        for (var i = 0; i < Minecraft.boardArr.length; i++) {
            for (var j = 0; j < Minecraft.boardArr[i].length; j++) {
                var pixel = $("<div/>");
                pixel.addClass("pixel")
                pixel.addClass(Minecraft.boardArr[i][j]);
                pixel.click(thisPixel);
                board.append(pixel);

            };
        };
    };

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
    };
    var remplaceTools = function (event) {
        if ($(this).hasClass("rock")) {
            put = "pixel rock";
        }
        else if ($(this).hasClass("green")) {
            put = "pixel green";
        }
        else if ($(this).hasClass("pierre")) {
            put = "pixel pierre";
        }
        else if ($(this).hasClass("trunk")) {
            put = "pixel trunk";
        }
        else if ($(this).hasClass("dirt")) {
            put = "pixel dirt"
        }
        console.log(put);
    };
    var thisPixel = function (event) {
        if (put === "") {
            if (pick === "pickaxe" && $(this).hasClass("rock")) {
                event.target.className = "pixel sky";
                $(".empty").addClass("rock");
                $(".empty.rock").click(remplaceTools);

            }
            // else if(pick === "pickaxe" && $(this).hasClass("green")|| $(this).hasClass("pierre")||$(this).hasClass("trunk")||$(this).hasClass("dirt")){
            //     $(".pickaxe").css("background-color","red")
            //     setTimeout(function(){$(".pickaxe").css("background-color","black")}, 450);
            // }
            else if (pick === "shovel" && $(this).hasClass("dirt")) {
                event.target.className = "pixel sky";
                $(".empty2").addClass("dirt");
                $(".empty2.dirt").click(remplaceTools);

            }
            else if (pick === "shovel" && $(this).hasClass("pierre")) {
                event.target.className = "pixel sky";
                $(".empty3").addClass("pierre");
                $(".empty3.pierre").click(remplaceTools);
            }
            //else if(pick === "shovel" && $(this).hasClass("green")|| $(this).hasClass("rock")||$(this).hasClass("trunk")){
            //$(".shovel").css("background-color","red")
            //setTimeout(function(){$(".shovel").css("background-color","black")}, 450);
            //}
            else if (pick === "axe" && $(this).hasClass("green")) {
                event.target.className = "pixel sky";
                $(".empty4").addClass("green");
                $(".empty4.green").click(remplaceTools);

            }
            else if (pick === "axe" && $(this).hasClass("trunk")) {
                event.target.className = "pixel sky";
                $(".empty5").addClass("trunk");
                $(".empty5.trunk").click(remplaceTools);
            };

        } else {
            if ($(this).hasClass('sky')) {
                if (put === "pixel rock") {
                    event.target.className = "pixel rock";
                    put = "";
                    $(".empty.rock").removeClass();
                }
                else if (put === "pixel dirt") {
                    event.target.className = "pixel dirt";
                    put = "";
                    $(".empty2.dirt").removeClass();

                }
                else if (put === "pixel pierre") {
                    event.target.className = "pixel pierre";
                    put = "";
                    $(".empty3.pierre").removeClass();
                }
                else if (put === "pixel green") {
                    event.target.className = "pixel green";
                    put = "";
                    $(".empty4.green").removeClass();
                }
                else if (put === "pixel trunk") {
                    event.target.className = "pixel trunk";
                    put = "";
                    $(".empty5.trunk").removeClass();
                };
            }
        };
    };

    /**
         * ************************* Create html using js Section ***********************************
         */
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
    var bigEmpty = $("<div/>");
    bigEmpty.addClass("bigEmpty");
    menu.append(bigEmpty);
    var empty = $("<div/>");
    empty.addClass("empty");
    bigEmpty.append(empty);
    var empty2 = $("<div/>");
    empty2.addClass("empty2");
    bigEmpty.append(empty2);
    var bigEmpty2 = $("<div/>");
    bigEmpty2.addClass("bigEmpty2");
    menu.append(bigEmpty2);
    var empty3 = $("<div/>");
    empty3.addClass("empty3");
    bigEmpty2.append(empty3);
    var empty4 = $("<div/>");
    empty4.addClass("empty4");
    bigEmpty2.append(empty4);
    var empty5 = $("<div/>");
    empty5.addClass("empty5");
    menu.append(empty5);
    var board = $("<div/>");
    board.addClass("board");
    $("body").append(board);
    Minecraft.createBoard();

});
