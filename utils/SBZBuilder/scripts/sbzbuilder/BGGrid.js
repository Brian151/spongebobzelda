var BGGrid = function(parent,x,y) {
	this.parent = parent;
	this.x = x;
	this.y = y;
	this.rx = this.x;
	this.ry = this.y;
	this.translatePos();
}
BGGrid.prototype.translatePos = function() {
	var x2 = this.x - (Math.ceil((this.x / 600)) * 600);
	var y2 = this.y - (Math.ceil((this.y / 300)) * 300);
	console.log("[BG GRID] : width % x = " + (600 % x2));
	console.log("[BG GRID] : height % y = " + (300 % y2));
	console.log((Math.ceil((this.x / 600)) * 600));
	positiveX = (this.x >= 0);
	positiveY = (this.y >= 0);
	console.log("[BG GRID] : x is positive : " + positiveX);
	console.log("[BG GRID] : y is positive : " + positiveY);
	if (positiveX){x2 = this.x - (Math.floor((this.x / 600)) * 600)}
	if (positiveY){y2 = this.y - (Math.floor((this.y / 300)) * 300)}
	var rxo = (600 - (600 % x2)) * -1;
	var ryo = (300 - (300 % y2)) * -1;
	if (x2 == 0) rxo = 0;
	if (y2 == 0) ryo = 0;
	if (positiveX){rxo *= -1;rxo -= 600}
	if (positiveY){ryo *= -1;ryo -= 300}
	console.log("[BG GRID] : render x offset : " + rxo);
	console.log("[BG GRID] : render y offset : " + ryo);
	this.rx = this.parent.x + rxo;
	this.ry = this.parent.y + ryo;
}