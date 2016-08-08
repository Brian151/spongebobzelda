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
	console.log("SBZBuilder Init!");
	//the serious stuff happens in a small area...
	this.x = 196;
	this.y = 19;
	this.width = 401;
	this.height = 241;
	this.grid = new BGGrid(this,this.x,this.y); //was -400,-200
	
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
		}
	}
	
	if(this.state == "play") {
		var mx = this.controller.mouseState.mX;
		var my = this.controller.mouseState.mY;
		var speed = 2;
		var dir = {"x":0,"y":0}
		if (mx <= this.x + 30 && mx >= this.x) dir.x = -1;
		if (mx >= (this.x + (this.width - 30 - 1)) && mx <= (this.x + (this.width - 1))) dir.x = 1;
		if (my <= this.y + 30 && my >= this.y) dir.y = -1;
		if (my >= (this.y + (this.height - 30 - 1)) && my <= (this.y + (this.height - 1))) dir.y = 1;
		this.grid.x += (dir.x * speed);
		this.grid.y += (dir.y * speed);
		if (this.grid.x < 0) this.grid.x = 0;
		if (this.grid.y < 0) this.grid.y = 0;
		this.grid.translatePos();
		
		this.draw();
	}
}

Game.prototype.draw = function(){
	this.renderer.ctx.clearRect(0,0,600,300);
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
	this.renderer.ctx.fillStyle = "#ffffff";
	this.renderer.ctx.fillText("grid pos: (" + this.grid.x + "," + this.grid.y + ")",10,10);
}