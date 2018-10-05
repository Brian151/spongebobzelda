/*
	SpongebobZelda Map Editor Game Object
*/

/* XML ref:
	tiles - t
	objects,puzzles,doors - o
	misc - m
	enemies,characters - c
	items,keyitems - i
*/

Game.prototype.init = function(mainCanvas) {
	this.state = "init";
	this.assets = new AssetManager(this,"assets/");
	this.canvas = document.getElementById(mainCanvas);
	this.renderer = GameObjs.renderer = new GraphicsHandler(this.canvas);
	this.controller = new InputManager(this);
	this.ui = new SBZBuilderUI(this);
	this.assets.loadAssetLib("cursor");
	this.assets.loadAssetLib("UI");
	this.assets.loadAssetLib("tiles");
	this.assets.loadAssetLib("cfg");
	this.assets.loadAssetLib("maps");
	this.assets.loadAssetLib("props");
	console.log("SBZBuilder Init!");
	//viewports...
	this.viewPortMap = {
		x : 196,
		y : 19,
		width : 401,
		height :  241,
	};
	this.viewPortMenu = {
		x : 82,
		y : 23,
		width : 100,
		height : 253
	};
	this.currTile = {};
	this.editMode = "brush";
	this.tileBank = [];
}
Game.prototype.setEditMode = function(mode){
	this.ui.editMode = mode;
	this.cursor = this.assets.requestAssetFromLib("cursor","cur",this.ui.editMode,"image");
}
Game.prototype.setCurrentTile = function(tile){
	this.currTile = tile;
}
Game.prototype.tick = function(){
	this.assets.tick();
	if (this.state == "init"){
		if(this.assets.queuecomplete) {
			this.state = "play";
			this.UIBG = this.assets.requestAssetFromLib("UI","skin","BG","image");
			this.UISkin = this.assets.requestAssetFromLib("UI","skin","appSkin","image");
			this.cursor = this.assets.requestAssetFromLib("cursor","cur",this.editMode,"image");
			var btnsCfg = this.assets.requestAssetFromLib("cfg","config","btns_cfg","txt");
			var offs = JSON.parse(this.assets.requestAssetFromLib("cfg","config","offsets_cfg","txt"));
			var offs_l = JSON.parse(this.assets.requestAssetFromLib("cfg","config","offsets_link_cfg","txt"));
			var mapTest = JSON.parse(this.assets.requestAssetFromLib("maps","maps","map0","txt"));
			btnsCfg = JSON.parse(btnsCfg).btns_tile_dungeon1;
			var tDat = JSON.parse(this.assets.requestAssetFromLib("tiles","testTiles","testTiles_dat","txt"));
			var tDatD1 = JSON.parse(this.assets.requestAssetFromLib("tiles","tiles","dungeon1Tiles_dat","txt"));
			//all original maps are 36 by 36 tiles
			var maxX = (36 * 50) - ((8 * 50) - 0);
			var maxY = (36 * 50) - ((5 * 50) - 10);
			var gridSettings = {negXOff:600,negYOff:300,minX:true,minY:true,maxX:maxX,maxY:maxY};
			var tileGridSettings = {minX:true,minY:true,maxW:9,maxH:6,maxX:maxX,maxY:maxY};
			var menuGridSettings = {minX:true,minY:true,maxW:2,maxH:6};
			this.grid = new BGGrid(this,this.viewPortMap,2,2,600,300,this.UIBG,gridSettings);
			this.tileGrid = new BGGrid(this,this.viewPortMap,36,36,50,50,false,tileGridSettings);
			this.objGrid = new BGGrid(this,this.viewPortMap,36,36,50,50,false,tileGridSettings);
			this.menuGrid = new BGGrid(this,this.viewPortMenu,Math.ceil(btnsCfg.length/2),2,50,50,false,menuGridSettings);
			var ic2 = 0;
			console.log(mapTest);
			for (var iy=0; iy < this.tileGrid.rows; iy++) {
				for (var ix=0; ix < this.tileGrid.cols; ix++) {
					if (ic2 >= mapTest.tileData.length) break;
					var curr = mapTest.tileData[ic2].toString();
					var curr2 = curr.split(".");
					var t = curr2[0];
					var m = 0;
					if (curr2.length >= 2) {
						m = Number(curr2[1]);
						if (m >= 4) m -= 4;
					}
					for (var i3 = 0; i3 < mapTest.assetLexicon.length; i3++) {
						if (mapTest.assetLexicon[i3].id == t) {
							t = mapTest.assetLexicon[i3].l;
							break;
						}
					}
					if (t != "BLANK_TILE") {
						this.tileGrid.tiles[ix][iy] = new Tile(this,ix,iy,50,50,tDatD1,t);
						this.tileGrid.tiles[ix][iy].setMeta(m);
					} //no need to do anything with a blank tile, it doesn't actually exist
					ic2++;
				}
			}
			for (var i=0; i < mapTest.objects.enemies.length; i++) {
				var curr = mapTest.objects.enemies[i];
				// console.log(JSON.stringify(curr));
				var x = curr.c;
				var y = curr.r;
				var l = curr.l;
				for (var i3 = 0; i3 < mapTest.assetLexicon.length; i3++) {
					if (mapTest.assetLexicon[i3].id == l) {
						l = mapTest.assetLexicon[i3].l;
						break;
					}
				}
				var o = offs[offs_l[l]];
				var a = this.assets.requestAssetFromLib("props","LBEnemy",l,"image");
				this.objGrid.tiles[x][y] = new LBAsset(this,o,a,"enemy");
			}
			for (var i=0; i < mapTest.objects.destructables.length; i++) {
				var curr = mapTest.objects.destructables[i];
				var x = curr.c; // cell
				var y = curr.r; // row
				var l = curr.l; // lexicon ID
				for (var i3 = 0; i3 < mapTest.assetLexicon.length; i3++) {
					if (mapTest.assetLexicon[i3].id == l) {
						l = mapTest.assetLexicon[i3].l;
						break;
					}
				}
				//var o = offs[offs_l[l]];
				//var a = this.assets.requestAssetFromLib("props","LBDes",l,"image");
				//this.objGrid.tiles[x][y] = new LBAsset(this,o,a,"destruct");
				console.log(l);
			}
			this.tileDat = tDat;
			this.tileDatD1 = tDatD1;
			var ic = 0;
			for (var iy=0; iy < this.menuGrid.rows; iy++) {
				for (var ix=0; ix < this.menuGrid.cols; ix++) {
					if (ic >= btnsCfg.length) break;
					var btnDat = btnsCfg[ic];
					var btn_off = this.assets.requestAssetFromLib("UI","btn",btnDat.btn,"image");
					var btn_on = this.assets.requestAssetFromLib("UI","btn",btnDat.btn + "_on","image");
					this.menuGrid.tiles[ix][iy] = new MenuBtn(this,btnDat.id,btn_off,btn_on,btnDat.g);
					ic++;
				}
			}
		}
	}
	
	if(this.state == "play") {
		this.stateplaytick();
		this.draw();
	}
}

Game.prototype.draw = function(){
	this.renderer.ctx.clearRect(0,0,600,300);
	//bg rendering layer
	this.grid.draw();
	this.tileGrid.draw();
	this.objGrid.draw();
	//if edit mode is brush, and mouse is inside the map window
	if(this.editMode == "brush" && this.mouseTPos.e == 1 && this.currentAsset) {
		var img = this.currentAsset;
		x = this.tileGrid.rx + ((this.mouseTPos.x - this.tileGrid.tX) * 50)
		y = this.tileGrid.ry + ((this.mouseTPos.y - this.tileGrid.tY) * 50)
		this.renderer.ctx.drawImage(img,x,y);
	}

	//ui render layer
	this.renderer.ctx.fillStyle = "#ffffff";
	this.renderer.ctx.fillRect(81,22,103,255);
	this.menuGrid.draw();
	this.renderer.ctx.drawImage(this.UISkin,0,0);
	
	//final render layer
	var cx = Math.round(this.cursor.width/-2);
	var cy = Math.round(this.cursor.height/-2);
	this.renderer.ctx.drawImage(this.cursor,this.controller.mouseState.mX + cx,this.controller.mouseState.mY + cy);
	this.renderer.ctx.fillStyle = "#ffffff";
}

Game.prototype.stateplaytick = function() {
	var mx = this.controller.mouseState.mX;
		var my = this.controller.mouseState.mY;
		this.ui.tick();
		/*var speed = 2;
		var dir = {"x":0,"y":0}
		this.mouseTPos = {e:0,x:0,y:0}
		this.mouseTPos.x = this.ui.mouseTPos.x;
		this.mouseTPos.y = this.ui.mouseTPos.y;
		this.mouseTPos.e = this.ui.mouseTPos.e;*/
		this.objGrid.x = this.tileGrid.x = this.grid.x;
		this.objGrid.y = this.tileGrid.y = this.grid.y;
		this.grid.translatePos();
		this.tileGrid.translatePos();
		this.objGrid.translatePos();
}

Game.prototype.setMapTile = function(tx,ty,g,id) {
	this.tileGrid.tiles[tx][ty] = new Tile(this,0,0,50,50,g,id);
}

Game.prototype.removeMapTile = function(tx,ty) {
	this.tileGrid.tiles[this.mouseTPos.x][this.mouseTPos.y] = {draw:function(){}};
}