function SBZBuilderUI(parentgame) {
	this.parentgame = parentgame;
	this.controller = this.parentgame.controller;
	this.assets = this.parentgame.assets;
	this.mouseTPos = {e:0,x:0,y:0}
	this.editMode = "brush";

}
SBZBuilderUI.prototype.tick = function() {
	var mx = this.controller.mouseState.mX;
	var my = this.controller.mouseState.mY;
	var vpMap = this.parentgame.viewPortMap;
	var vpMenu = this.parentgame.viewPortMenu;
	var tileGrid = this.parentgame.tileGrid;
	var gamegrid = this.parentgame.grid;
	var menugrid = this.parentgame.menuGrid;
	this.setMouseTPos(mx,my,vpMap,gamegrid);
	var dir = this.getDirection(mx,my,vpMap);
	this.checkInAssetMenu(mx,my,vpMenu,menugrid);
	if (this.mouseTPos.e == 1) {
		this.placeTile();
	}
	if (this.mouseTPos.e == 2) {
		this.selectTile();
	}
	var speed = 2;
	this.parentgame.grid.x += (dir.x * speed);
	this.parentgame.grid.y += (dir.y * speed);
}
SBZBuilderUI.prototype.setMouseTPos = function(mx,my,mapview,grid) {
	if(
		// is mouse x within the x bounds of the map viewport?
		// then, is mouse y within the y bounds of the map viewport?
		(mx <= mapview.x + (mapview.width -1)  && mx >= mapview.x) &&
		(my <= mapview.y + (mapview.height -1) && my >= mapview.y)
	) {
		var mx2 = Math.abs(mx -  grid.rx);
		var my2 = Math.abs(my -  grid.ry);
		this.mouseTPos.e = 1;
		this.mouseTPos.x = grid.tX + Math.floor(mx2/50);
		this.mouseTPos.y = grid.tY + Math.floor(my2/50);
	}
}
SBZBuilderUI.prototype.getDirection = function(mx,my,mapview) {
	var dir = {x:0,y:0}
	var distX = 20;
	var distY = 15;
	// is mouse x on the left scrolling region of the map viewport?
	if (mx <= mapview.x + distX && mx >= mapview.x) {
		dir.x = -1;
			}
	// is mouse x on the right scrolling region of the map viewport?		
	if (mx >= (mapview.x + (mapview.width - distX - 1)) 
	&& mx <= (mapview.x + (mapview.width - 1))) {
				dir.x = 1;
	} 
	// is mouse y on the up scrolling region of the map viewport?
	if (my <= mapview.y + distY && my >= mapview.y) {
		dir.y = -1;
	} 
	// is mouse y on the down scrolling region of the map viewport?
	if (my >= (mapview.y + (mapview.height - distY - 1)) && 
	my <= (mapview.y + (mapview.height - 1))) {
		dir.y = 1;
	}
	return dir;
}
SBZBuilderUI.prototype.checkInAssetMenu = function(mx,my,menuview,menugrid) {
	if (
		(mx <= menuview.x + (menuview.width -1)  && mx >= menuview.x) &&
		(my <= menuview.y + (menuview.height -1) && my >= menuview.y)
	) {
			var mx2 = Math.abs(mx -  menugrid.rx);
			var my2 = Math.abs(my -  menugrid.ry);
			this.mouseTPos.e = 2;
			this.mouseTPos.x = menugrid.tX + Math.floor(mx2 / 50);
			this.mouseTPos.y = menugrid.tY + Math.floor(my2 / 50);
	}
}
SBZBuilderUI.prototype.placeTile = function() {
	if (this.controller.mouseState.down) {
		if (this.editMode == "brush") {
			var g = this.parentgame[this.parentgame.currTile.g];
			var id = this.parentgame.currTile.id;
			// console.log(g,id);
			this.parentgame.setMapTile(this.mouseTPos.x,this.mouseTPos.y,g,id);
		} else if (this.editMode == "erase") {
			this.parentgame.removeMapTile(this.mouseTPos.x,this.mouseTPos.y);
		}
	}
}
SBZBuilderUI.prototype.selectTile = function() {
	if (this.controller.checkMousePress()) {
			// console.log(this.mouseTPos);
		this.parentgame.setCurrentTile({
			id:this.parentgame.menuGrid.tiles[this.mouseTPos.x][this.mouseTPos.y].id,
			g:this.parentgame.menuGrid.tiles[this.mouseTPos.x][this.mouseTPos.y].g
		});
		for (var ix=0; ix < this.parentgame.menuGrid.cols; ix++) {
			for (var iy=0; iy < this.parentgame.menuGrid.rows; iy++) {
				if (this.parentgame.menuGrid.tiles[ix][iy].setMode) {
					this.parentgame.menuGrid.tiles[ix][iy].setMode("off");

				}			
			}
		}
		this.parentgame.currentAsset = this.parentgame.menuGrid.tiles[this.mouseTPos.x][this.mouseTPos.y].imgs.off;
		this.parentgame.menuGrid.tiles[this.mouseTPos.x][this.mouseTPos.y].setMode("on");
	}
}