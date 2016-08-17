function MenuBtn(parent,id,img,img2,g) {
	this.parent = parent;
	this.id = id;
	this.g = g;
	this.imgs = {
		off : img,
		on : img2
	};
	this.mode = "off";
}
MenuBtn.prototype.draw = function(x,y) {
	var imgD = this.imgs[this.mode];
	this.parent.renderer.ctx.drawImage(imgD,x,y);
	//console.log(x + " , " + y);
	//console.log(imgD.src);
}
MenuBtn.prototype.setMode = function(m) {
	if (m != "off" && m != "on") m = "off";
	this.mode = m;
}