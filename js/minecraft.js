$(document).ready(function (){

var boardArr =[
    ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","white","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky","sky","white","white","white","white","sky","white","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky","white","white","white","white","white","white","white","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","sky","white","white","sky","sky","sky","sky","sky","sky","green","green","green","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","green","green","green","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","green","green","green","sky","sky","sky"],
    ["sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","trunk","sky","sky","sky","sky"],
    ["sky","sky","sky","sky","green","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","trunk","sky","sky","sky","sky"],
    ["sky","sky","sky","green","green","green","sky","sky","sky","sky","sky","sky","rock","rock","sky","trunk","sky","sky","sky","rock"],
    ["pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre","pierre"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
];
var board = $("#board");
for (var i = 0; i < boardArr.length; i++){
    for(var j=0; j < boardArr[i].length; j++){
        var pixel =$("<div/>");
        pixel.addClass(boardArr[i][j]);
        pixel.attr("type", "button");
        board.append(pixel);

    }
}
});
var change_pixel = function () {
    currentPixel = "sky";
    currentPixelIndicator = $('.currentPixel_indicator');
    currentPixelIndicator.addClass(currentPixel);
    };

var curent_pixel = function(){
    var boxClicked = $(this);
boxClicked.addClass(ticTacToe.currentPlayer);
}
}
