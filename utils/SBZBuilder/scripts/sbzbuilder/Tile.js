var Tile = function(parent,x,y,w,h,img) {
	this.parent = parent;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.img = img;
}
Tile.prototype.draw = function(x,y) {
	this.parent.renderer.ctx.drawImage(this.img,x,y);
}