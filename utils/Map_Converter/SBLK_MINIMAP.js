var canvas;
var ctx;
var input;
var input2;

function init() {
	canvas = document.getElementById("display");
	ctx = canvas.getContext("2d");
	input = document.getElementById("in");
	input2 = document.getElementById("maptype");
}

init();

function getMap() {
	var out = JSON.parse(input.value);
	return out;
}

function getMapType() {
	return input2.options[input2.selectedIndex].value
}

function MINIMAP(JSONMapData,mapType){
	var newMap = JSONMapData;
	var mT = mapType;
	var tiles = [];
	var tileData = newMap.tileData;
	//alert(tileData.length);
	var lex = newMap.assetLexicon;
	var easyLex = {};
	var mapCols = {
		"w1" : ["#C5D6A5","#BAC848","#000000","#FFFFFF","#FF0000"],
		"d1" : ["#D1ABDA","#8F7BAE","#000000","#FFFFFF","#FF0000"],
		"w2" : ["#A8612E","#2E5780","#000000","#FFFFFF","#FF0000"],
		"d2" : ["#686F2C","#118582","#000000","#FFFFFF","#5D2552"],
		"w3" : ["#A8612E","#80352B","#000000","#FFFFFF","#B9132A"],
		"d3" : ["#B95822","#563DB2","#000000","#FFFFFF","#341616"],
		"b1" : ["#0094FF","#0000FF","#00137F","#00FFFF","#FF0000"]
	};
	var lookupTable = {
	"mcLBTileGround04Lv2": 0,
	"mcLBTileFloorW02Lv2": 4,
	"mcLBTileGround04Lv3": 4,
	"mcLBTileFloorW02Lv3": 4,
	"mcLBTileLairCorner00": 2,
	"mcLBTileLairTopWall00": 2,
	"mcLBTileLairCorner03": 1,
	"mcLBTileLairBottomWall00": 1,
	"mcLBTileLairFloor00": 0,
	"mcLBTileLairFloor00Lv2": 2,
	"mcLBTileLairFloor01Lv2": 2,
	"mcLBTileLairFloor03Lv2": 1,
	"mcLBTileLairFloor07Lv2": 0,
	"mcLBTileLairFloor06Lv2": 1,
	"mcLBTileGround01Lv2": 0,
	"mcLBTileGround01Lv3": 4,
	"mcLBTileGrass00Lv1": 1,
	"mcLBTileGrass03Lv1": 1,
	"mcLBTileFloorW01Lv3": 4,
	"mcLBTileFloorW00Lv2": 4,
	"mcLBTileFloorW00Lv3": 4,
	"mcLBTileGround06Lv2": 1,
	"mcLBTileGround06Lv3": 4,
	"mcLBTileLairFloorTopLv3": 1,
	"mcLBTileLairCorner01": 2,
	"mcLBTileLairCorner02": 1,
	"mcLBTileGround02Lv2": 1,
	"mcLBTileGround02Lv3": 1,
	"mcLBTileGround09Lv3": 4,
	"mcLBTileGround08Lv3": 4,
	"mcLBTileGround12Lv3": 0,
	"mcLBTileLairFloor05Lv2": 1,
	"mcLBTileLairFloor01Lv3": 2,
	"mcLBTileGrass01Lv1": 1,
	"mcLBTileGrass02Lv1": 1,
	"mcLBTileGrass04Lv1": 0,
	"mcLBTileGrass05Lv1": 1,
	"mcLBTileGround00Lv2": 0,
	"mcLBTileGround03Lv2": 1,
	"mcLBTileGround05Lv2": 1,
	"mcLBTileGround00Lv3": 0,
	"mcLBTileGround03Lv3": 4,
	"mcLBTileGround05Lv3": 4,
	"mcLBTileGround07Lv3": 4,
	"mcLBTileGround10Lv3": 1,
	"mcLBTileGround11Lv3": 1,
	"mcLBTileLairCeilling00": 2,
	"mcLBTileLairFloor02Lv2": 0,
	"mcLBTileLairFloor04Lv2": 1,
	"mcLBTileFloorW03Lv2": 4,
	"mcLBTileFloorW04Lv2": 4,
	"mcLBTileFloorW03Lv3": 4,
	"mcLBTileFloorW04Lv3": 4,
	"mcLBTileLairFloor00Lv3": 2,
	"mcLBTileLairFloor02Lv3": 2,
	"mcLBTileLairFloor03Lv3": 1,
	"mcLBTileLairFloor04Lv3": 2,
	"mcLBTileLairFloor06Lv3": 1,
	"mcLBTileLairFloor07Lv3": 1,
	"mcLBTileGroundNew01Lv3": 0,
	"mcLBTileFloorW01Lv2": 4,
	"mcLBTileLairFloor05Lv3": 0
}
	var x = 0;
	var y = 0;
	var w = newMap.dims.w;
	
	for (var i = 0; i < lex.length; i++) {
		var curr = lex[i];
		easyLex["L_" + curr.id] = curr.l;
	}
	
	for (var i = 0; i < tileData.length; i++) {
		var modu = i % w;
		if (i > 0 && modu == 0){
			x = 0;
			y++;
		}
		var curr = tileData[i];	
		var tileID = Math.floor(curr);
		var col = mapCols[mT][3];
		if (tileID > 0) {
			var lT = easyLex["L_" + tileID];
			var cID = lookupTable[lT];
			col = mapCols[mT][cID];
		}
		tiles.push({"x":x ,"y":y ,"c":col});
		x++;
	}
	
	var tempFill = ctx.fillStyle;
	ctx.fillStyle = "#333333";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = tempFill;
	var scale = 8;
	for (var i = 0; i < tiles.length; i++) {
		var curr = tiles[i];
		var tF = ctx.fillStyle;
		ctx.fillStyle = curr.c;
		ctx.fillRect(curr.x * scale,curr.y *scale,scale,scale);
		ctx.fillStyle = tF;
	}
}