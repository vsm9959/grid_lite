
var kBoardWidth;
var kBoardHeight;

var kStep;
var side = 4;

var kPixelWidth;
var kPixelHeight;

var yEnd;
var xEnd;

var gCanvasElement;
var gDrawingContext;

var blDataPoints = [];

/*var empty      = "#FFFFFF";*/ // "#F2F2F2";
var empty      = "#ACB3BF";

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

var recentId = 1;
var r1 = "#000000";
var r2 = "#0d69ab";
var r3 = "#cc0000";
var r4 = "#287f46";

var outputFormat = "PLAIN";
// =============================================================================================
function changeOutputFormat(){
    var x = document.getElementById("output_format");
    outputFormat = x.options[x.selectedIndex].text;
    updateGrid(0);
    if(outputFormat == "LEGO"){
        document.getElementById('aquaLEGO').innerHTML           = "<img class = 'LEGO' src='bricklayercolors/aqua_02.png'>";
        document.getElementById('armygreenLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/armygreen_02.png'>";
        document.getElementById('blackLEGO').innerHTML          = "<img class = 'LEGO' src='bricklayercolors/black_02.png'>";
        document.getElementById('blueLEGO').innerHTML           = "<img class = 'LEGO' src='bricklayercolors/blue_02.png'>";
        document.getElementById('brightgreenLEGO').innerHTML    = "<img class = 'LEGO' src='bricklayercolors/brightgreen_02.png'>";
        document.getElementById('brownLEGO').innerHTML          = "<img class = 'LEGO' src='bricklayercolors/brown_02.png'>";
        document.getElementById('coolyellowLEGO').innerHTML     = "<img class = 'LEGO' src='bricklayercolors/coolyellow_02.png'>";
        document.getElementById('darkbrownLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/darkbrown_02.png'>";
        document.getElementById('darkgreenLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/darkgreen_02.png'>";
        document.getElementById('darklavenderLEGO').innerHTML   = "<img class = 'LEGO' src='bricklayercolors/darklavender_02.png'>";
        document.getElementById('darkredLEGO').innerHTML        = "<img class = 'LEGO' src='bricklayercolors/darkred_02.png'>";
        document.getElementById('grayLEGO').innerHTML           = "<img class = 'LEGO' src='bricklayercolors/gray_02.png'>";
        document.getElementById('grayblueLEGO').innerHTML       = "<img class = 'LEGO' src='bricklayercolors/grayblue_02.png'>";
        document.getElementById('greenLEGO').innerHTML          = "<img class = 'LEGO' src='bricklayercolors/green_02.png'>";
        document.getElementById('indigoLEGO').innerHTML         = "<img class = 'LEGO' src='bricklayercolors/indigo_02.png'>";
        document.getElementById('lavenderLEGO').innerHTML       = "<img class = 'LEGO' src='bricklayercolors/lavender_02.png'>";
        document.getElementById('lightaquaLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/lightaqua_02.png'>";
        document.getElementById('lightblueLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/lightblue_02.png'>";
        document.getElementById('lightbrownLEGO').innerHTML     = "<img class = 'LEGO' src='bricklayercolors/lightbrown_02.png'>";
        document.getElementById('lightgrayLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/lightgray_02.png'>";
        document.getElementById('lightgreenLEGO').innerHTML     = "<img class = 'LEGO' src='bricklayercolors/lightgreen_02.png'>";
        document.getElementById('lightnougatLEGO').innerHTML    = "<img class = 'LEGO' src='bricklayercolors/lightnougat_02.png'>";
        document.getElementById('lightpinkLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/lightpink_02.png'>";
        document.getElementById('lightroyalblueLEGO').innerHTML = "<img class = 'LEGO' src='bricklayercolors/lightroyalblue_02.png'>";
        document.getElementById('mediumnougatLEGO').innerHTML   = "<img class = 'LEGO' src='bricklayercolors/mediumnougat_02.png'>";
        document.getElementById('nougatLEGO').innerHTML         = "<img class = 'LEGO' src='bricklayercolors/nougat_02.png'>";
        document.getElementById('oliveLEGO').innerHTML          = "<img class = 'LEGO' src='bricklayercolors/olive_02.png'>";
        document.getElementById('orangeLEGO').innerHTML         = "<img class = 'LEGO' src='bricklayercolors/orange_02.png'>";
        document.getElementById('pinkLEGO').innerHTML           = "<img class = 'LEGO' src='bricklayercolors/pink_02.png'>";
        document.getElementById('redLEGO').innerHTML            = "<img class = 'LEGO' src='bricklayercolors/red_02.png'>";
        document.getElementById('reddishvioletLEGO').innerHTML  = "<img class = 'LEGO' src='bricklayercolors/reddishviolet_02.png'>";
        document.getElementById('silverLEGO').innerHTML         = "<img class = 'LEGO' src='bricklayercolors/silver_02.png'>";
        document.getElementById('springLEGO').innerHTML         = "<img class = 'LEGO' src='bricklayercolors/spring_02.png'>";
        document.getElementById('stonegrayLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/stonegray_02.png'>";
        document.getElementById('titaniumLEGO').innerHTML       = "<img class = 'LEGO' src='bricklayercolors/titanium_02.png'>";
        document.getElementById('violetLEGO').innerHTML         = "<img class = 'LEGO' src='bricklayercolors/violet_02.png'>";
        document.getElementById('warmgoldLEGO').innerHTML       = "<img class = 'LEGO' src='bricklayercolors/warmgold_02.png'>";
        document.getElementById('whiteLEGO').innerHTML          = "<img class = 'LEGO' src='bricklayercolors/white_02.png'>";
        document.getElementById('whiteglowLEGO').innerHTML      = "<img class = 'LEGO' src='bricklayercolors/whiteglow_02.png'>";
        document.getElementById('yellowLEGO').innerHTML         = "<img class = 'LEGO' src='bricklayercolors/yellow_02.png'>";


    }else{
        document.getElementById('aquaLEGO').innerHTML           = "";
        document.getElementById('armygreenLEGO').innerHTML      = "";
        document.getElementById('blackLEGO').innerHTML          = "";
        document.getElementById('blueLEGO').innerHTML           = "";
        document.getElementById('brightgreenLEGO').innerHTML    = "";
        document.getElementById('brownLEGO').innerHTML          = "";
        document.getElementById('coolyellowLEGO').innerHTML     = "";
        document.getElementById('darkbrownLEGO').innerHTML      = "";
        document.getElementById('darkgreenLEGO').innerHTML      = "";
        document.getElementById('darklavenderLEGO').innerHTML   = "";
        document.getElementById('darkredLEGO').innerHTML        = "";
        document.getElementById('grayLEGO').innerHTML           = "";
        document.getElementById('grayblueLEGO').innerHTML       = "";
        document.getElementById('greenLEGO').innerHTML          = "";
        document.getElementById('indigoLEGO').innerHTML         = "";
        document.getElementById('lavenderLEGO').innerHTML       = "";
        document.getElementById('lightaquaLEGO').innerHTML      = "";
        document.getElementById('lightblueLEGO').innerHTML      = "";
        document.getElementById('lightbrownLEGO').innerHTML     = "";
        document.getElementById('lightgrayLEGO').innerHTML      = "";
        document.getElementById('lightgreenLEGO').innerHTML     = "";
        document.getElementById('lightnougatLEGO').innerHTML    = "";
        document.getElementById('lightpinkLEGO').innerHTML      = "";
        document.getElementById('lightroyalblueLEGO').innerHTML = "";
        document.getElementById('mediumnougatLEGO').innerHTML   = "";
        document.getElementById('nougatLEGO').innerHTML         = "";
        document.getElementById('oliveLEGO').innerHTML          = "";
        document.getElementById('orangeLEGO').innerHTML         = "";
        document.getElementById('pinkLEGO').innerHTML           = "";
        document.getElementById('redLEGO').innerHTML            = "";
        document.getElementById('reddishvioletLEGO').innerHTML  = "";
        document.getElementById('silverLEGO').innerHTML         = "";
        document.getElementById('springLEGO').innerHTML         = "";
        document.getElementById('stonegrayLEGO').innerHTML      = "";
        document.getElementById('titaniumLEGO').innerHTML       = "";
        document.getElementById('violetLEGO').innerHTML         = "";
        document.getElementById('warmgoldLEGO').innerHTML       = "";
        document.getElementById('whiteLEGO').innerHTML          = "";
        document.getElementById('whiteglowLEGO').innerHTML      = "";
        document.getElementById('yellowLEGO').innerHTML         = "";
    }

}
// =============================================================================================
function pickBlColorHex(pth){
    switch(pth){
        case aqua.src:{
            return '#36aebf';
        }
            break;
        case armygreen.src:{
            return '#789081';
        }
            break;
        case black.src:{
            return '#000000';
        }
            break;
        case blue.src:{
            return '#0d69ab';
        }
            break;
        case brightgreen.src:{
            return '#4b974a';
        }
            break;
        case brown.src:{
            return '#a05f34';
        }
            break;
        case coolyellow.src:{
            return '#fdf38c';
        }
            break;
        case darkbrown.src:{
            return '#694027';
        }
            break;
        case darkgreen.src:{
            return '#27462c';
        }
            break;
        case darklavender.src:{
            return '#ac78ba';
        }
            break;
        case darkred.src:{
            return '#7b2e2f';
        }
            break;
        case gray.src:{
            return '#635f61';
        }
            break;
        case grayblue.src:{
            return '#74869c';
        }
            break;
        case green.src:{
            return '#287f46';
        }
            break;
        case indigo.src:{
            return '#203a56';
        }
            break;
        case lavender.src:{
            return '#e1d5ed';
        }
            break;
        case lightaqua.src:{
            return '#adc3c0';
        }
            break;
        case lightblue.src:{
            return '#6e99c9';
        }
            break;
        case lightbrown.src:{
            return '#d7c599';
        }
            break;
        case lightgray.src:{
            return '#a3a2a4';
        }
            break;
        case lightgreen.src:{
            return '#a4bd46';
        }
            break;
        case lightnougat.src:{
            return '#f6d7b3';
        }
            break;
        case lightpink.src:{
            return '#e4adc8';
        }
            break;
        case lightroyalblue.src:{
            return '#9fc3e9';
        }
            break;
        case mediumnougat.src:{
            return '#cc702a';
        }
            break;
        case nougat.src:{
            return '#cc8e68';
        }
            break;
        case olive.src:{
            return '#6b8e23';
        }
            break;
        case orange.src:{
            return '#da8540';
        }
            break;
        case pink.src:{
            return '#cd6298';
        }
            break;
        case red.src:{
            return '#cc0000';
        }
            break;
        case reddishviolet.src:{
            return '#923978';
        }
            break;
        case silver.src:{
            return '#898788';
        }
            break;
        case spring.src:{
            return '#c4d18b';
        }
            break;
        case stonegray.src:{
            return '#e5e4de';
        }
            break;
        case titanium.src:{
            return '#575857';
        }
            break;
        case violet.src:{
            return '#342b75';
        }
            break;
        case warmgold.src:{
            return '#aa7f2e';
        }
            break;
        case white.src:{
            return '#ffffff';
        }
            break;
        case whiteglow.src:{
            return '#d9d9d9';
        }
            break;
        case yellow.src:{
            return '#f5cd2f';
        }
            break;
    }
    return "#E1E1D1";
}
// ============================================================================================
function pickBlColor(pth){
    switch (pth){
        case aqua.src:{
            return "AQUA";
        }
        break;
        case armygreen.src:{
            return "ARMYGREEN";
        }
            break;
        case black.src:{
            return "BLACK";
        }
            break;
        case blue.src:{
            return "BLUE";
        }
            break;
        case brightgreen.src:{
            return "BRIGHTGREEN";
        }
            break;
        case brown.src:{
            return "BROWN";
        }
            break;
        case coolyellow.src:{
            return "COOLYELLOW";
        }
            break;
        case darkbrown.src:{
            return "DARKBROWN";
        }
            break;
        case darkgreen.src:{
            return "DARKGREEN";
        }
            break;
        case darklavender.src:{
            return "DARKLAVENDER";
        }
            break;
        case darkred.src:{
            return "DARKRED";
        }
            break;
        case gray.src:{
            return "GRAY";
        }
            break;
        case grayblue.src:{
            return "GRAYBLUE";
        }
            break;
        case green.src:{
            return "GREEN";
        }
            break;
        case indigo.src:{
            return "INDIGO";
        }
            break;
        case lavender.src:{
            return "LAVENDER";
        }
            break;
        case lightaqua.src:{
            return "LIGHTAQUA";
        }
            break;
        case lightblue.src:{
            return "LIGHTBLUE";
        }
            break;
        case lightbrown.src:{
            return "LIGHTBROWN";
        }
            break;
        case lightgray.src:{
            return "LIGHTGRAY";
        }
            break;
        case lightgreen.src:{
            return "LIGHTGREEN";
        }
            break;
        case lightnougat.src:{
            return "LIGHTNOUGAT";
        }
            break;
        case lightpink.src:{
            return "LIGHTPINK";
        }
            break;
        case lightroyalblue.src:{
            return "LIGHTROYALBLUE";
        }
            break;
        case mediumnougat.src:{
            return "MEDIUMNOUGAT";
        }
            break;
        case nougat.src:{
            return "NOUGAT";
        }
            break;
        case olive.src:{
            return "OLIVE";
        }
            break;
        case orange.src:{
            return "ORANGE";
        }
            break;
        case pink.src:{
            return "PINK";
        }
            break;
        case red.src:{
            return "RED";
        }
            break;
        case reddishviolet.src:{
            return "REDDISHVIOLET";
        }
            break;
        case silver.src:{
            return "SILVER";
        }
            break;
        case spring.src:{
            return "SPRING";
        }
            break;
        case stonegray.src:{
            return "STONEGRAY";
        }
            break;
        case titanium.src:{
            return "TITANIUM";
        }
            break;
        case violet.src:{
            return "VIOLET";
        }
            break;
        case warmgold.src:{
            return "WARMGOLD";
        }
            break;
        case white.src:{
            return "WHITE";
        }
            break;
        case whiteglow.src:{
            return "WHITEGLOW";
        }
            break;
        case yellow.src:{
            return "YELLOW";
        }
            break;
    }
    return "EMPTY";
}
// ===========================================================================================
function BlDataPoint(x,y){
    this.x = x;
    this.y = y;
}
// =============================================================================================
function isBlPointOccupied(xb,yb) {
    if(blDataPoints.length!=0) {
        for (var k = 0; k < blDataPoints.length; k++) {
            if (xb == blDataPoints[k].x) {
                if (yb == blDataPoints[k].y) {
                    return false;
                }
            }
        }
    }
    return true;
}
// ==========================================================================================
function loadBL() {
    var blData="";
    var a;
    var b;

    if (side > 4){
        alert("Grid size should be four or less for downloading bl files");
        return 100;
    } else {
        blData+= "open Level_3;";
        blData+= "\r\n";
        blData+= "\r\n";
        blData+= "build2D (32,32);";
        blData+= "\r\n";
        blData+= "\r\n";
        for (var i=(gridLogs.length-1);i>=0;i--){
            if (gridLogs[i].row < gCanvasElement.width) {
                if (gridLogs[i].column < gCanvasElement.height) {
                    if (gridLogs[i].column > 0) {
                        if (gridLogs[i].row > 0) {
                            a = Math.floor((gridLogs[i].row + 1) / kStep) ;
                            b = Math.floor(side - ((gridLogs[i].column + 1) / kStep));
                            if(isBlPointOccupied(a,b)){
                                blData += "put2D ";
                                blData += "(1,1) ";
                                blData += pickBlColor(gridLogs[i].color) + " ";
                                blData += "(" + a + "," ;
                                blData += b + ")";
                                blData += ";" + "\r\n";
                                blDataPoints.push(new BlDataPoint(a,b));
                            }
                        }
                    }
                }
            }
        }
    }
    blData+= "\r\n";
    blData+= 'show2D "mybl"; ';
    blDataPoints = [];
    return blData;
}
// ================================================================================================================
function loadBlLite() {
    var blData="";
    var a;
    var b;
    var count = 0;

    if (side > 4){
        alert("Grid size should be four or less for downloading bl files");
        return 100;
    } else {
        blData+= '<xml xmlns="http://www.w3.org/1999/xhtml">';
        blData+= "\r\n";
        blData+= '<block type="openLevel3" x="33" y="17">';
        blData+= "\r\n";

        blData+= '<value name="semi_or_epsilon">';
        blData+= "\r\n";
        blData+= '<block type="bwhat"></block>';
        blData+= "\r\n";
        blData+= '</value>';
        blData+= "\r\n";
        blData+= "<next>";
        blData+= "\r\n";

        blData+= '<block type="bbuild">';
        blData+= "\r\n";
        blData+= '<field name="size">(4,4)</field>';
        blData+= "\r\n";
        blData+= '<value name="semi_or_epsilon">';
        blData+= "\r\n";
        blData+= '<block type="bwhat"></block>';
        blData+= "\r\n";
        blData+= '</value>';
        blData+= "\r\n";
        blData+= "<next>";

        blData+= "\r\n";
        blData+= "\r\n";
        for (var i=(gridLogs.length-1);i>=0;i--){
            if (gridLogs[i].row < gCanvasElement.width) {
                if (gridLogs[i].column < gCanvasElement.height) {
                    if (gridLogs[i].column > 0) {
                        if (gridLogs[i].row > 0) {
                            a = Math.floor((gridLogs[i].row + 1) / kStep) ;
                            b = Math.floor(side - ((gridLogs[i].column + 1) / kStep));
                            if(isBlPointOccupied(a,b)){
                                blData += '<block type="put2D">';
                                blData+= "\r\n";
                                blData += '<field name="xSize">1</field>';
                                blData+= "\r\n";
                                blData += '<field name="zSize">1</field>';
                                blData+= "\r\n";
                                blData += '<field name="brick">';
                                blData += pickBlColorHex(gridLogs[i].color);
                                blData += '</field>';
                                blData+= "\r\n";
                                blData += '<field name="xArg">' + a + "</field>" ;
                                blData+= "\r\n";
                                blData += '<field name="zArg">' + b + "</field>" ;
                                blData+= "\r\n";
                                blDataPoints.push(new BlDataPoint(a,b));
                                blData+= '<value name="semi_or_epsilon">';
                                blData+= "\r\n";
                                blData+= '<block type="bwhat"></block>';
                                blData+= "\r\n";
                                blData+= '</value>';
                                blData+= "\r\n";
                                blData+= "<next>";
                                blData+= "\r\n";
                                count++;
                            }
                        }
                    }
                }
            }
        }
    }

    blData+='<block type="show">';
    blData+= "\r\n";
    blData+= '<field name="artifact">"thing"</field>';
    blData+= "\r\n";
    blData+= '<value name="semi_or_epsilon">';
    blData+= "\r\n";
    blData+= '<block type="bwhat"></block>';
    blData+= "\r\n";
    blData+= '</value>';
    blData+= "\r\n";
    blData+= '</block>';
    blData+= "\r\n";

    for (var lite=0; lite<count; lite++){
        blData+= "</next>";
        blData+= "\r\n";
        blData+= '</block>';
        blData+= "\r\n";
    }


    blData+= "</next>";
    blData+= "\r\n";
    blData+= '</block>';
    blData+= "\r\n";
    blData+= "</next>";
    blData+= "\r\n";
    blData+= '</block>';
    blData+= "\r\n";
    blData+= '</xml>';
    blDataPoints = [];
    return blData;
}
// =======================================================================================
function createBlLite() {
    var blFile = loadBlLite();
    if (blFile == 100){
        return;
    }
    var a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(blFile);
    a.setAttribute("download", "grid.xml");
    a.click();
}
// =======================================================================================
function createBL() {
    var blFile = loadBL();
    if (blFile == 100){
        return;
    }
    var a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(blFile);
    a.setAttribute("download", "grid.bl");
    a.click();
}
// =========================================================================================
function loadGridJSON() {
        var pixelLogs = [];
        gridLogs = [];
        var newSide = 0;
        var files = document.getElementById('selectFiles').files;
        if (files.length <= 0) {
            return false;
        }
        var fr = new FileReader();

        fr.onload = function(e) {
            pixelLogs = JSON.parse(e.target.result);
            newSide = loadPixelLogs(pixelLogs);
            side = newSide+1;
            document.getElementById('size').innerHTML = side;
            if(side < 8){
                side = 8;
            }
            updateGrid(0);
        };

        fr.readAsText(files.item(0));
}
// ==========================================================================================
function loadPixelLogs(data){
    var max = 0;
    for(var i=0;i<data.length;i++){
        if(data[i].row>max){
            max = data[i].row;
        }
        if(data[i].column>max){
            max = data[i].column;
        }
    }
    kStep = Math.floor(kPixelWidth/max);
    console.log(kStep);
    for( i=0;i<data.length;i++){
        gridLogs.push(new GridLog(data[i].row*kStep+1,data[i].column*kStep+1,data[i].color));
        console.log(data[i].row*kStep);
    }
    return max;
}
// ==========================================================================================
function createPixels(){
    var pixelLogs = [];
    for(var i=0 ;i<gridLogs.length; i++){
        pixelLogs.push(new GridLog(Math.floor(gridLogs[i].row/kStep),Math.floor(gridLogs[i].column/kStep),gridLogs[i].color));
    }
    return pixelLogs;
}
// =======================================================================================
function createPixelArtJSON() {
    var pixelLogs = createPixels();
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pixelLogs));

    var a = document.createElement('a');
    a.setAttribute("href",     dataStr     );
    a.setAttribute("download", "grid.json");
    a.click();
}
// ==========================================================================================
function incrementGrid() {
    side++;

    if (side < 2) {
        alert('Smallest size is 2');
        side = 2;
    }else if (side > 64) {
        alert('Largest size is 64');
        side = 64;
    }else {
        document.getElementById("size").innerHTML = side;
        updateGrid(1);
    }
}
// =======================================================================================
function decrementGrid() {
    side--;
    if (side < 2) {
        alert('Smallest size is 2');
        side = 2;
    }else if (side >64) {
        alert('Largest size is 64');
        side = 64;
    }else {
        document.getElementById("size").innerHTML = side;
        updateGrid(-1);
    }
}
// =======================================================================================
function setCurrentColor(lego) {
    currentColor = lego;
}
// =======================================================================================
function updateGrid(d){
    var v              = side;
    var temp = new Image();

    if (v < 1) {
        alert('Smallest size is 2');
        side = 2;
    }

    if (64 < v) {
        alert('Largest size is 64');
        side = 64;
    }
    else { side = v; }

    var boardSize;
    var delta = 0.2;

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
            gridLogs[i].row = Math.floor((gridLogs[i].row-1)/kStep) ;
            gridLogs[i].column = Math.floor((gridLogs[i].column-1)/kStep) + d;
        }
    }

    kStep = Math.floor(boardSize / side);

    if(gridLogs.length!=0) {
        for (i = 0; i < gridLogs.length; i++) {
            gridLogs[i].row = Math.floor(gridLogs[i].row*kStep) + 1;
            gridLogs[i].column = Math.floor(gridLogs[i].column*kStep) + 1;
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
            temp.src= gridLogs[i].color;
            if (gridLogs[i].color == empty){
                gDrawingContext.fillStyle = empty;
                gDrawingContext.fillRect(gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            } else if (outputFormat == "LEGO"){
                gDrawingContext.drawImage(temp, gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            } else {
                gDrawingContext.fillStyle = pickBlColorHex(temp.src);
                gDrawingContext.fillRect( gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            }
        }
    }
}
//========================================================================================
function undo(){
    var temp = new Image();
    if(gridLogs.length!=0){
        gridRedoLogs.push(gridLogs.pop());
        drawBoard();
        for(i=0;i<gridLogs.length;i++){
            temp.src = gridLogs[i].color;
            if(gridLogs[i].color == empty){
                gDrawingContext.fillStyle = gridLogs[i].color;
                gDrawingContext.fillRect(gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            } else if (outputFormat == "LEGO") {
                gDrawingContext.drawImage(temp, gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            } else {
                gDrawingContext.fillStyle = pickBlColorHex(temp.src);
                gDrawingContext.fillRect( gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            }
        }
    }
}
// =======================================================================================
function redo(){
    var temp = new Image();
    if (gridRedoLogs.length!=0){
        gridLogs.push(gridRedoLogs.pop());
        drawBoard();
        for(i=0;i<gridLogs.length;i++){
            temp.src = gridLogs[i].color;
            if(gridLogs[i].color == empty){
                gDrawingContext.fillStyle = gridLogs[i].color;
                gDrawingContext.fillRect(gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            } else  if (outputFormat == "LEGO") {
                gDrawingContext.drawImage(temp, gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            } else {
                gDrawingContext.fillStyle = pickBlColorHex(temp.src);
                gDrawingContext.fillRect( gridLogs[i].row, gridLogs[i].column, kStep - 1, kStep - 1);
            }
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
    var x;
    var y;
    var rect = gCanvasElement.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    x = Math.min(x, kBoardWidth * kStep);
    y = Math.min(y, kBoardHeight * kStep);
    var cell = new Cell(y,x);
    return cell;
}
// =======================================================================================
function updateRecentColor() {
    var tem;
    var tcolor;
    var terminate = true;
    tcolor = currentColor;
    if ((r1 == pickBlColorHex(currentColor.src))||(r2 == pickBlColorHex(currentColor.src))||(r3 == pickBlColorHex(currentColor.src))||r4 == pickBlColorHex(currentColor.src)){
        terminate = false;
    }
    if(recentId == 4){
        recentId = 0;
    }
    if((currentColor != empty)&&terminate){
        recentId++;
        if(recentId == 1) {
            r1 = pickBlColorHex(currentColor.src);
        }
        if(recentId == 2) {
            r2 = pickBlColorHex(currentColor.src);
        }
        if(recentId == 3) {
            r3 = pickBlColorHex(currentColor.src);
        }
        if(recentId == 4) {
            r4 = pickBlColorHex(currentColor.src);
        }
        tem = document.getElementById("recent"+recentId.toString());
        tem.style.backgroundColor = pickBlColorHex(currentColor.src);
        tem.onclick = function () {
            setCurrentColor(tcolor);
        }
    }
}
// =======================================================================================
function vitruviaOnClick(e) {
    var cell   = getCursorPalletPosition(e);
    var row    = cell.row;
    var column = cell.column;

    bleep.play();
    updateRecentColor();

       if ((column < xEnd - 1) && (row < yEnd - 1) ) {
           var x = Math.floor(column/kStep) * kStep;
           var y = Math.floor(row/kStep) * kStep;

           if(currentColor == empty){
               gDrawingContext.fillStyle = currentColor;
               gDrawingContext.fillRect(x+1, y+1, kStep-1, kStep-1);
           } else if(outputFormat == "LEGO") {
               gDrawingContext.drawImage(currentColor, x + 1, y + 1, kStep - 1, kStep - 1); // box lines don't get redrawn with empty color
           } else {
               gDrawingContext.fillStyle = pickBlColorHex(currentColor.src);
               gDrawingContext.fillRect(x+1,y+1,kStep-1,kStep -1);
           }

           if(currentColor == empty){
               gridLogs.push(new GridLog(x+1,y+1,currentColor));
           } else {
               gridLogs.push(new GridLog(x + 1, y + 1, currentColor.src));
           }
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
    var v              = side;
    
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
    var delta = 0.2;
    
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

}




