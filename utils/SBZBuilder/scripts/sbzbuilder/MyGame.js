/*
SpongebobZelda Map Editor Game Setup
*/

Game.prototype.init = function(mainCanvas) {
	this.state = "init";
	this.assets = new AssetManager(this,"assets/");
	this.canvas = document.getElementById(mainCanvas);
	this.renderer = GameObjs.renderer = new GraphicsHandler(this.canvas);
	this.controller = new InputManager(this);
	this.assets.loadAsset("image","skin/LBMain.png","MainSkin");
	this.assets.loadAsset("image","skin/LBGuide.png","BGSkin");
	this.assets.loadAsset("image","cursor/brush.png","CUR_BRUSH");
	console.log("SBZBuilder Init!");
	//the serious stuff happens in a small area...
	this.x = 196;
	this.y = 19;
	this.width = 401;
	this.height = 241;
	this.grid = new BGGrid(this,-400,-200);
	
}

Game.prototype.tick = function(){
	this.assets.tick();
	if (this.state == "init"){
		if(this.assets.queuecomplete) {
			this.state = "play";
			//console.log("start game!");
			this.UIBG = this.assets.requestAsset("image","BGSkin");
			this.UISkin = this.assets.requestAsset("image","MainSkin");
			this.cursor = this.assets.requestAsset("image","CUR_BRUSH");
		}
	}
	
	if(this.state == "play") {
		this.draw();
	}
}

Game.prototype.draw = function(){
	//bg rendering layer
	this.renderer.ctx.drawImage(this.UIBG,this.grid.rx,this.grid.ry);
	this.renderer.ctx.drawImage(this.UIBG,this.grid.rx + 600,this.grid.ry);
	this.renderer.ctx.drawImage(this.UIBG,this.grid.rx,this.grid.ry + 300);
	this.renderer.ctx.drawImage(this.UIBG,this.grid.rx + 600,this.grid.ry + 300);
	

	//ui skin render layer
	this.renderer.ctx.drawImage(this.UISkin,0,0);
	
	//final render layer
	var cx = Math.round(this.cursor.width/-2);
	var cy = Math.round(this.cursor.height/-2);
	this.renderer.ctx.drawImage(this.cursor,this.controller.mouseState.mX + cx,this.controller.mouseState.mY + cy);
}