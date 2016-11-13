
var kBoardWidth;
var kBoardHeight;

var kStep;
var side;

var kPixelWidth;
var kPixelHeight;

var yEnd;
var xEnd;

var gCanvasElement;
var gDrawingContext;

var empty      = "#FFFFFF"; // "#F2F2F2";


var aqua = new Image();
aqua.src = 'bricklayercolors/aqua_02.png';
var armygreen = new Image();
armygreen.src = 'bricklayercolors/armygreen_02.png';
var black = new Image();
black.src = 'bricklayercolors/black_02.png';
var blue = new Image();
blue.src = 'bricklayercolors/blue_02.png';
var brightgreen = new Image();
brightgreen.src = 'bricklayercolors/brightgreen_02.png';
var brown = new Image();
brown.src = 'bricklayercolors/brown_02.png';
var coolyellow = new Image();
coolyellow.src = 'bricklayercolors/coolyellow_02.png';
var darkbrown = new Image();
darkbrown.src = 'bricklayercolors/darkbrown_02.png';
var darkgreen = new Image();
darkgreen.src = 'bricklayercolors/darkgreen_02.png';
var darklavender = new Image();
darklavender.src = 'bricklayercolors/darklavender_02.png';
var darkred = new Image();
darkred.src = 'bricklayercolors/darkred_02.png';
var gray = new Image();
gray.src = 'bricklayercolors/gray_02.png';
var grayblue = new Image();
grayblue.src = 'bricklayercolors/grayblue_02.png';
var green = new Image();
green.src = 'bricklayercolors/green_02.png';
var indigo = new Image();
indigo.src = 'bricklayercolors/indigo_02.png';
var lavender = new Image();
lavender.src = 'bricklayercolors/lavender_02.png';
var lightaqua = new Image();
lightaqua.src = 'bricklayercolors/lightaqua_02.png';
var lightblue = new Image();
lightblue.src = 'bricklayercolors/lightblue_02.png';
var lightbrown = new Image();
lightbrown.src = 'bricklayercolors/lightbrown_02.png';
var lightgray = new Image();
lightgray.src = 'bricklayercolors/lightgray_02.png';
var lightgreen = new Image();
lightgreen.src = 'bricklayercolors/lightgreen_02.png';
var lightnougat = new Image();
lightnougat.src = 'bricklayercolors/lightnougat_02.png';
var lightpink = new Image();
lightpink.src = 'bricklayercolors/lightpink_02.png';
var lightroyalblue = new Image();
lightroyalblue.src = 'bricklayercolors/lightroyalblue_02.png';
var mediumnougat = new Image();
mediumnougat.src = 'bricklayercolors/mediumnougat_02.png';
var nougat = new Image();
nougat.src = 'bricklayercolors/nougat_02.png';
var olive = new Image();
olive.src = 'bricklayercolors/olive_02.png';
var orange = new Image();
orange.src = 'bricklayercolors/orange_02.png';
var pink = new Image();
pink.src = 'bricklayercolors/pink_02.png';
var red = new Image();
red.src = 'bricklayercolors/red_02.png';
var reddishviolet = new Image();
reddishviolet.src = 'bricklayercolors/reddishviolet_02.png';
var silver = new Image();
silver.src = 'bricklayercolors/silver_02.png';
var spring = new Image();
spring.src = 'bricklayercolors/spring_02.png';
var stonegray = new Image();
stonegray.src = 'bricklayercolors/stonegray_02.png';
var titanium = new Image();
titanium.src = 'bricklayercolors/titanium_02.png';
var violet = new Image();
violet.src = 'bricklayercolors/violet_02.png';
var warmgold = new Image();
warmgold.src = 'bricklayercolors/warmgold_02.png';
var white = new Image();
white.src = 'bricklayercolors/white_02.png';
var whiteglow = new Image();
whiteglow.src = 'bricklayercolors/whiteglow_02.png';
var yellow = new Image();
yellow.src = 'bricklayercolors/yellow_02.png';


var gridLogs = [];

var gridRedoLogs=[];

var currentColor= black;
var current_id = 1;

var fillColor = empty;
var lineColor = "#ccc"; // "black";

var bleep = new Audio();
bleep.src = 'javascript/click_real_short.mp3';

// =======================================================================================
function pickLEGO(lego) {
    currentColor = lego;
}
// =======================================================================================
function updateGrid(){
    var v              = document.getElementById('size').value;

    var d;

        d = v - side;

    // squares per side
    if (v < 1) {
        alert('Smallest size is 2');
        side = 2;
    }

    if (64 < v) {
        alert('Largest size is 64');
        side = 64;
    }
    else { side = v; }




    //var boardSize  = 500;
    var boardSize;
    var delta = 0.3;

    if (window.innerWidth < window.innerHeight)
    {
        boardSize = window.innerWidth - delta * window.innerWidth ;
    }
    else
    {
        boardSize = window.innerHeight - delta * window.innerHeight;
    }

    if(gridLogs.length!=0) {
        for (i = 0; i < gridLogs.length; i++) {
            gridLogs[i].row = (gridLogs[i].row-1)/kStep ;
            gridLogs[i].column = (gridLogs[i].column-1)/kStep + d;
        }
    }

    kStep = Math.floor(boardSize / side);

    if(gridLogs.length!=0) {
        for (i = 0; i < gridLogs.length; i++) {
            gridLogs[i].row = gridLogs[i].row*kStep + 1;
            gridLogs[i].column = gridLogs[i].column*kStep + 1;
        }
    }


    //size of canvas we want to use
    kPixelWidth  = kStep * side + 1;
    kPixelHeight = kStep * side + 1;

    kBoardWidth  = kPixelWidth;
    kBoardHeight = kPixelHeight;

    gCanvasElement.width  = kPixelWidth ;  // + 2*kStep // the kSteps make room for the pallet
    gCanvasElement.height = kPixelHeight;

    drawBoard();

    if(gridLogs.length!=0){
        drawBoard();
        for(i=0;i<gridLogs.length;i++){
            gDrawingContext.drawImage(gridLogs[i].color,gridLogs[i].row,gridLogs[i].column,kStep-1,kStep-1);
        }
    }
}
//========================================================================================
function undo(){
    if(gridLogs.length!=0){
        gridRedoLogs.push(gridLogs.pop());
        drawBoard();
        for(i=0;i<gridLogs.length;i++){
            gDrawingContext.drawImage(gridLogs[i].color,gridLogs[i].row,gridLogs[i].column,kStep-1,kStep-1);
        }
    }
}
// =======================================================================================
function redo(){
    if (gridRedoLogs.length!=0){
        gridLogs.push(gridRedoLogs.pop());
        drawBoard();
        for(i=0;i<gridLogs.length;i++){
            gDrawingContext.drawImage(gridLogs[i].color, gridLogs[i].row,gridLogs[i].column,kStep-1,kStep-1);
        }
    }
}
//========================================================================================
function GridLog(row,column,color){
    this.row = row;
    this.column = column;
    this.color=color;
}
//========================================================================================
function Cell(row, column) {
    this.row = row;
    this.column = column;
}
// =======================================================================================
function getCursorPalletPosition(e) {
    /* returns Cell with .row and .column properties */
    var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    }
    else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= gCanvasElement.offsetLeft;
    y -= gCanvasElement.offsetTop;
    x = Math.min(x, kBoardWidth * kStep);
    y = Math.min(y, kBoardHeight * kStep);
    var cell = new Cell(y,x);
    return cell;
}

// =======================================================================================
function vitruviaOnClick(e) {
    var cell   = getCursorPalletPosition(e);
    var row    = cell.row;
    var column = cell.column;

    bleep.play();

       if ((column < xEnd - 1) && (row < yEnd - 1) ) {
           var x = Math.floor(column/kStep) * kStep;
           var y = Math.floor(row/kStep) * kStep;

             gDrawingContext.drawImage(currentColor,x+1, y+1, kStep-1, kStep-1); // box lines don't get redrawn with empty color

           gridLogs.push(new GridLog(x+1,y+1,currentColor));
        }
}

// =======================================================================================
function drawLines(color) {
    xEnd = kPixelWidth;
    yEnd = kPixelHeight;
    
    //gDrawingContext.clearRect(0, 0, xEnd, yEnd);
     
    gDrawingContext.beginPath();
    
    /* vertical lines */
    for (var x = 0; x <= xEnd; x += kStep) { 
        gDrawingContext.moveTo(0.5 + x, 0);
        gDrawingContext.lineTo(0.5 + x, yEnd);
    }
    
    /* horizontal lines */
    for (var y = 0; y <= yEnd; y += kStep) {
        gDrawingContext.moveTo(0    , 0.5 + y);
        gDrawingContext.lineTo(xEnd, 0.5 +  y);
    }
    
    /* draw it! */
    gDrawingContext.strokeStyle = color;
    gDrawingContext.stroke();        
    
    gDrawingContext.closePath();    
}

// =======================================================================================
function drawBoard() {

    xEnd = kPixelWidth;
    yEnd = kPixelHeight;
    
    gDrawingContext.clearRect(0, 0, xEnd, yEnd);
     
    gDrawingContext.beginPath();

    // Canvas base color
    gDrawingContext.fillStyle = empty;
    gDrawingContext.rect(0, 0, xEnd, yEnd);
    gDrawingContext.fill();

    drawLines(lineColor);

    gDrawingContext.closePath();
}

// =======================================================================================
function saveCanvas() {

    var canvas = document.getElementById('vitruvia_canvas');
    var a = document.createElement('a');
    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
    a.download = 'pixelArt.jpg';
    a.click();
}


// =======================================================================================
function clearGrid() {
    gridLogs = [];
    drawBoard();
}

// =======================================================================================
function hideGridLines(color) {
    drawLines(color);
}

// =======================================================================================
function initGame() {
    var canvasElement  = document.getElementById("vitruvia_canvas"); 
    var v              = document.getElementById('size').value;
    
    // squares per side
    if (v < 1) { 
        alert('Smallest size is 2');
        side = 2;
    }
    
    if (64 < v) { 
        alert('Largest size is 64');
        side = 64;
    }
    else { side = v; }

    
    
   
    //var boardSize  = 500;
    var boardSize;
    var delta = 0.3;
    
    if (window.innerWidth < window.innerHeight)
    { 
        boardSize = window.innerWidth - delta * window.innerWidth ;
    }
    else
    { 
        boardSize = window.innerHeight - delta * window.innerHeight;
    }

  
    kStep = Math.floor(boardSize / side);
               
    
    //size of canvas we want to use
    kPixelWidth  = kStep * side + 1;
    kPixelHeight = kStep * side + 1;
    
    kBoardWidth  = kPixelWidth;
    kBoardHeight = kPixelHeight;
    
 
    gCanvasElement        = canvasElement;
    gCanvasElement.width  = kPixelWidth ;  // + 2*kStep // the kSteps make room for the pallet
    gCanvasElement.height = kPixelHeight ;// + 2*kStep
    gCanvasElement.addEventListener("click", vitruviaOnClick, false);
    gDrawingContext       = gCanvasElement.getContext("2d");

//    drawPallet();
    drawBoard();

    //if(document.readyState === "Complete")
    //document.getElementById(b1).style.backgroundColor = red;
   // save canvas image as data url (png format by default)
    //var dataURL = canvas.toDataURL();

    // set canvasImg image src to dataURL
    // so it can be saved as an image
    //document.getElementById('vitruvia_canvas').src = dataURL;
    
    // makes save canvas possible
    //saveCanvas();
}

// =======================================================================================
function resizeGrid() {

}




