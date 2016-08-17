var Tile = function(parent,x,y,w,h,dat,type) {
	this.parent = parent;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.subTypes = [];
	//console.log(type);
	var r = dat.regions[dat.tiles[type].r];
	var tempWidth = dat.dims.w;
	var tempHeight = dat.dims.h;
	var w2 = r.w;
	var h2 = r.w;
	var tempX = r.x * dat.dims.w;
	var tempY = r.y * dat.dims.h;
	//console.log(type + " | " + tempX + " , " + tempY);
	for (var iy=0; iy < h2; iy++) {
		for (var ix=0; ix < w2; ix++) {
			var tX2 = (ix * tempWidth) + tempX;
			var tY2 = (iy * tempHeight) + tempY;
			this.subTypes.push({x:tX2,y:tY2,w:tempWidth,h:tempHeight});
		}
	}
	this.currSub = this.subTypes[0];
	this.meta = 0;
	//console.log(type + " | " + tempX + " , " + tempY + "   " + JSON.stringify(this.subTypes));
	this.img = this.parent.assets.requestAssetFromLib("tiles","testTiles",dat.img,"image");
}
Tile.prototype.draw = function(x,y) {
	//this.parent.renderer.ctx.drawImage(this.img,x,y);
	//GraphicsHandler.drawClippedImage(img,x,y,w,h,ix,iy,iw,ih)
	var ix = this.currSub.x;
	var iy = this.currSub.y;
	var iw = this.currSub.w;
	var ih = this.currSub.h;
	this.parent.renderer.drawClippedImage(this.img,x,y,this.width,this.height,ix,iy,iw.ih);
}
Tile.prototype.rotate = function() {
	this.meta++;
	if (this.meta >= this.subTypes.length) this.meta = 0;
	this.currSub = this.subTypes[this.meta];
}
Tile.prototype.setMeta = function(m) {
	var tM = m;
	if (tM >= this.subTypes.length) tM = 0;
	this.meta = tM;
	this.currSub = this.subTypes[this.meta];
}
Tile.prototype.flip = function(mode){
	if(this.subTypes.length == 4) {
		if (mode == "h") {
			switch (this.meta) {
				case 0 : {
					this.meta = 1;
					break;
				}
				case 1 : {
					this.meta = 0;
					break;
				}
				case 2 : {
					this.meta = 3;
					break;
				}
				case 3 : {
					this.meta = 2;
					break;
				}
			}
		} else if (mode == "v") {
			switch (this.meta) {
				case 0 : {
					this.meta = 3;
					break;
				}
				case 1 : {
					this.meta = 2;
					break;
				}
				case 2 : {
					this.meta = 1;
					break;
				}
				case 3 : {
					this.meta = 0;
					break;
				}
			}
		}
		this.currSub = this.subTypes[this.meta];
	}
}