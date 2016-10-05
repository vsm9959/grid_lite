
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

var red        = "#B40404";
var green      = "#04B404";
var blue       = "#2E64FE";
var yellow     = "#D7DF01";
var white      = "#FFFFFF"; // "#F2F2F2";
var black      = "#000000";
var blueviolet = "#8A2BE2";

var palletSize = 50;

var gridLogs = [];

var currentColor= black;
var current_id = 1;

var fillColor = white;
var lineColor = "#ccc"; // "black";

var bleep = new Audio();
bleep.src = 'javascript/click_real_short.mp3';

// =======================================================================================
// =======================================================================================
function pickColor(id) {

    current_id = id;
    /*if(id==1) {
        currentColor = document.getElementById('stampColor').value;
        return currentColor;
    } else {
        currentColor = white;
        return currentColor;
    }*/
}
// =======================================================================================
function updateGrid(){
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

    if(gridLogs.length!=0) {
        for (i = 0; i < gridLogs.length; i++) {
            gridLogs[i].row = (gridLogs[i].row-1)/kStep;
            gridLogs[i].column = (gridLogs[i].column-1)/kStep;
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
            gDrawingContext.fillStyle = gridLogs[i].color;
            gDrawingContext.fillRect(gridLogs[i].row,gridLogs[i].column,kStep-1,kStep-1);
        }
    }
}
//========================================================================================
function undo(){
    if(gridLogs.length!=0){
        gridLogs.pop();
        drawBoard();
        for(i=0;i<gridLogs.length;i++){
            gDrawingContext.fillStyle = gridLogs[i].color;
            gDrawingContext.fillRect(gridLogs[i].row,gridLogs[i].column,kStep-1,kStep-1);
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

    if(current_id == 1)
        currentColor = document.getElementById('stampColor').value;
    else
        currentColor = white;
    
    fillColor  = currentColor;
    

       if ((column < xEnd - 1) && (row < yEnd - 1) ) {
           var x = Math.floor(column/kStep) * kStep;
           var y = Math.floor(row/kStep) * kStep;
            
            gDrawingContext.fillStyle = fillColor;

             gDrawingContext.fillRect(x+1, y+1, kStep-1, kStep-1); // box lines don't get redrawn with empty color

           gridLogs.push(new GridLog(x+1,y+1,fillColor));
        }
//    }
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
    gDrawingContext.fillStyle = white;    
    gDrawingContext.rect(0, 0, xEnd, yEnd);
    gDrawingContext.fill();

    drawLines(lineColor);

    gDrawingContext.closePath();
}

// =======================================================================================
function saveCanvas() {
    
    
// http://weworkweplay.com/play/saving-html5-canvas-as-image/    
    
var canvas = document.getElementById('vitruvia_canvas'),
    ctx    = canvas.getContext('2d'),
    mirror = document.getElementById('mirror');


    canvas.width = mirror.width = window.innerWidth;
    canvas.height = mirror.height = window.innerHeight;

    var button = document.getElementById('btn-download');
    button.addEventListener('click', function (e) {
        var dataURL = canvas.toDataURL('image/png');
        button.href = dataURL;
    });  
}


// =======================================================================================
function clearGrid() {
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
    
   // save canvas image as data url (png format by default)
    //var dataURL = canvas.toDataURL();

    // set canvasImg image src to dataURL
    // so it can be saved as an image
    //document.getElementById('vitruvia_canvas').src = dataURL;
    
    // makes save canvas possible
    //saveCanvas();
}

// =======================================================================================





