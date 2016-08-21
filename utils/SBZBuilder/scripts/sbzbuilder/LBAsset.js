var LBAsset = function(parent,offsets,img,type) {
	this.parent = parent;
	this.oX = offsets.x;
	this.oY = offsets.y;
	this.img = img;
	//console.log(this.img.src);
}
LBAsset.prototype.draw = function(x,y) {
	//this.parent.renderer.ctx.drawImage(this.img,x,y);
	//GraphicsHandler.drawClippedImage(img,x,y,w,h,ix,iy,iw,ih)
	var x2 = x + this.oX;
	var y2 = y + this.oY;
	this.parent.renderer.ctx.drawImage(this.img,x2,y2);
}