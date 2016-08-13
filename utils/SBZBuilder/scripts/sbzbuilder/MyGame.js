/*
SpongebobZelda Map Editor Game Setup
*/

Game.prototype.init = function(mainCanvas) {
	this.state = "init";
	this.assets = new AssetManager(this,"assets/");
	this.canvas = document.getElementById(mainCanvas);
	this.renderer = GameObjs.renderer = new GraphicsHandler(this.canvas);
	this.controller = new InputManager(this);
	this.assets.loadAssetLib("cursor");
	this.assets.loadAssetLib("skin");
	this.assets.loadAssetLib("tiles");
	console.log("SBZBuilder Init!");
	//viewports...
	this.viewPortMap = {
		x : 196,
		y : 19,
		width : 401,
		height :  241,
	};
	this.currTile = 0;
	this.editMode = "brush";
	this.tileBank = [];
	//this.grid = new BGGrid(this,this.x,this.y); //was -400,-200
}
Game.prototype.setEditMode = function(mode){
	this.editMode = mode;
	this.cursor = this.assets.requestAssetFromLib("cursor","cur",this.editMode,"image");
}
Game.prototype.setCurrentTile = function(tile){
	this.currTile = tile;
}
Game.prototype.tick = function(){
	this.assets.tick();
	if (this.state == "init"){
		if(this.assets.queuecomplete) {
			this.state = "play";
			//console.log("start game!");
			this.UIBG = this.assets.requestAssetFromLib("skin","skn","BG","image");
			this.UISkin = this.assets.requestAssetFromLib("skin","skn","appSkin","image");
			this.cursor = this.assets.requestAssetFromLib("cursor","cur",this.editMode,"image");
			for (var i=0; i < 4; i++) {
				this.tileBank.push(this.assets.requestAssetFromLib("tiles","testTiles","testTile" + i,"image"));
			}
			//console.log(this.tileBG.src);
			var maxX = (32 * 50) - ((8 * 50) - 0);
			var maxY = (32 * 50) - ((5 * 50) - 10);
			var gridSettings = {negXOff:600,negYOff:300,minX:true,minY:true,maxX:maxX,maxY:maxY};
			var tileGridSettings={minX:true,minY:true,maxW:9,maxH:6,maxX:maxX,maxY:maxY};
			this.grid = new BGGrid(this,this.viewPortMap,2,2,600,300,this.UIBG,gridSettings);
			this.tileGrid = new BGGrid(this,this.viewPortMap,32,32,50,50,false,tileGridSettings);
			for (var ix=0; ix < this.tileGrid.tiles.length; ix++) {
				for (var iy=0; iy < this.tileGrid.tiles[ix].length; iy++) {
					var r = Math.floor(Math.random() * 8);
					//console.log(r);
					if (r > 3) {
						//console.log(r);
						this.tileGrid.tiles[ix][iy] = new Tile(this,ix,iy,50,50,this.tileBank[r-4]);
					}
				}
			}
			//this.tileGrid.tiles[0][0] = new Tile(this,0,0,50,50,this.tileBG);
		}
	}
	
	if(this.state == "play") {
		var mx = this.controller.mouseState.mX;
		var my = this.controller.mouseState.mY;
		var speed = 2;
		var dir = {"x":0,"y":0}
		this.mouseTPos = {e:false,x:0,y:0}
		if(
		(mx <= this.viewPortMap.x + (this.viewPortMap.width -1)  && mx >= this.viewPortMap.x) &&
		(my <= this.viewPortMap.y + (this.viewPortMap.height -1) && my >= this.viewPortMap.y)
		) {
			var distX = 20;
			var distY = 15;
			if (mx <= this.viewPortMap.x + distX && mx >= this.viewPortMap.x) dir.x = -1;
			if (mx >= (this.viewPortMap.x + (this.viewPortMap.width - distX - 1)) && mx <= (this.viewPortMap.x + (this.viewPortMap.width - 1))) dir.x = 1;
			if (my <= this.viewPortMap.y + distY && my >= this.viewPortMap.y) dir.y = -1;
			if (my >= (this.viewPortMap.y + (this.viewPortMap.height - distY - 1)) && my <= (this.viewPortMap.y + (this.viewPortMap.height - 1))) dir.y = 1;
			var mx2 = Math.abs(mx -  this.tileGrid.rx);
			var my2 = Math.abs(my -  this.tileGrid.ry);
			this.mouseTPos.e = true;
			this.mouseTPos.x = this.tileGrid.tX + Math.floor(mx2/50);
			this.mouseTPos.y = this.tileGrid.tY + Math.floor(my2/50);
		}
		if (this.mouseTPos.e) {
			if (this.controller.mouseState.down) {
				if (this.editMode == "brush") {
					this.tileGrid.tiles[this.mouseTPos.x][this.mouseTPos.y] = new Tile(this,ix,iy,50,50,this.tileBank[this.currTile]);
				} else if (this.editMode == "erase") {
					this.tileGrid.tiles[this.mouseTPos.x][this.mouseTPos.y] = {draw:function(){}};
				}
			}
		}
		this.grid.x += (dir.x * speed);
		this.grid.y += (dir.y * speed);
		this.tileGrid.x = this.grid.x;
		this.tileGrid.y = this.grid.y;
		//this.grid.x += 1;
		//if (this.grid.x < 0) this.grid.x = 0;
		//if (this.grid.y < 0) this.grid.y = 0;
		this.grid.translatePos();
		this.tileGrid.translatePos();
		
		this.draw();
	}
}

Game.prototype.draw = function(){
	this.renderer.ctx.clearRect(0,0,600,300);
	//bg rendering layer
	/*this.renderer.ctx.drawImage(this.UIBG,this.grid.rx,this.grid.ry);
	this.renderer.ctx.drawImage(this.UIBG,this.grid.rx + 600,this.grid.ry);
	this.renderer.ctx.drawImage(this.UIBG,this.grid.rx,this.grid.ry + 300);
	this.renderer.ctx.drawImage(this.UIBG,this.grid.rx + 600,this.grid.ry + 300);
	*/
	this.grid.draw();
	this.tileGrid.draw();

	//ui skin render layer
	this.renderer.ctx.drawImage(this.UISkin,0,0);
	
	//final render layer
	var cx = Math.round(this.cursor.width/-2);
	var cy = Math.round(this.cursor.height/-2);
	this.renderer.ctx.drawImage(this.cursor,this.controller.mouseState.mX + cx,this.controller.mouseState.mY + cy);
	this.renderer.ctx.fillStyle = "#ffffff";
	//this.renderer.ctx.fillText("grid pos: (" + this.grid.x + "," + this.grid.y + ")",10,10);
	this.renderer.ctx.fillText("tile grid tilepos: (" + this.tileGrid.tX + "," + this.tileGrid.tY + ")",10,10);
	this.renderer.ctx.fillText("mouse tilepos: (" + this.mouseTPos.e + " | " + this.mouseTPos.x + "," + this.mouseTPos.y + ")",10,20);
}