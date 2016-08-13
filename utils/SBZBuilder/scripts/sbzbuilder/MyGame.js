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
	this.assets.loadAsset("image","tiles/testTile.png","tile0");
	console.log("SBZBuilder Init!");
	//viewports...
	this.viewPortMap = {
		x : 196,
		y : 19,
		width : 401,
		height :  241,
	};
	this.x = 196;
	this.y = 19;
	this.width = 401;
	this.height = 241;
	//this.grid = new BGGrid(this,this.x,this.y); //was -400,-200
}

Game.prototype.tick = function(){
	this.assets.tick();
	if (this.state == "init"){
		if(this.assets.queuecomplete) {
			this.state = "play";
			//console.log("start game!");
			this.UIBG = this.assets.requestAssetFromLib("skin","skn","BG","image");
			this.UISkin = this.assets.requestAssetFromLib("skin","skn","appSkin","image");
			this.cursor = this.assets.requestAssetFromLib("cursor","cur","brush","image");
			this.tileBG = this.assets.requestAsset("image","tile0");
			//console.log(this.tileBG.src);
			var maxX = (30 * 50) - ((8 * 50) - 0);
			var maxY = (30 * 50) - ((5 * 50) - 10);
			var gridSettings = {negXOff:600,negYOff:300,minX:true,minY:true,maxX:maxX,maxY:maxY};
			var tileGridSettings={minX:true,minY:true,maxW:9,maxH:6,maxX:maxX,maxY:maxY};
			this.grid = new BGGrid(this,this.viewPortMap,2,2,600,300,this.UIBG,gridSettings);
			this.tileGrid = new BGGrid(this,this.viewPortMap,30,30,50,50,false,tileGridSettings);
			for (var ix=0; ix < this.tileGrid.tiles.length; ix++) {
				for (var iy=0; iy < this.tileGrid.tiles[ix].length; iy++) {
					var r = Math.floor(Math.random() * 2);
					//console.log(r);
					if (r) {
						//console.log(r);
						this.tileGrid.tiles[ix][iy] = new Tile(this,ix,iy,50,50,this.tileBG);
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
		if(
		(mx <= this.x + (this.width -1)  && mx >= this.x) &&
		(my <= this.y + (this.height -1) && my >= this.y)
		) {
			if (mx <= this.x + 30 && mx >= this.x) dir.x = -1;
			if (mx >= (this.x + (this.width - 30 - 1)) && mx <= (this.x + (this.width - 1))) dir.x = 1;
			if (my <= this.y + 30 && my >= this.y) dir.y = -1;
			if (my >= (this.y + (this.height - 30 - 1)) && my <= (this.y + (this.height - 1))) dir.y = 1;
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
}