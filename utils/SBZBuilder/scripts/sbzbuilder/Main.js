var game = null;
var loop = null;
var setTile = function(){}
var setEMode = function(){}

window.onload = function(){
	game = new Game();
	game.init("gameScreen");
	loop = setInterval(function(){game.tick();},game.timing);
	setTile = function(tile){game.setCurrentTile(tile);}
	setEMode = function(mode){game.setEditMode(mode);}
}