function SBZ2(JSONMapData){
	var newMap = {
		"meta" : {
			"author": "McEvoy Creative",
			"date" : {
				"month" : "???",
				"day" : "???" ,
				"year" : "2008",
			},
			"version" : 1.5,
			"comment1" : "one of the original maps, now available as JSON",
			"comment2" : "This version still utilizes the transformation matrixes"
		},
		"dims": {
			"w" : 0,
			"h" : 0
		},
		"tileData" : [],
		"objects" : {
			"doors" : [],
			"enemies" : [],
			"characters" : [],
			"chests" : [],
			"puzzles" : [],
			"items" : [],
			"events" : [],
			"wandables" : [],
			"destructables" : [],
			"objects" : []
		},
		"assetLexicon" : []
	};
	newMap.tileData = JSONMapData.tileData;
	newMap.assetLexicon = JSONMapData.assetLexicon;
	var puz = JSONMapData.objects.puzzles;
	var doors = JSONMapData.objects.doors;
	var enemies = JSONMapData.objects.enemies;
	var destructs = JSONMapData.objects.destructables;
	var chests = JSONMapData.objects.chests;
	var chars = JSONMapData.objects.characters;
	var items = JSONMapData.objects.items;
	var events = JSONMapData.objects.events;
	var wandables = JSONMapData.objects.wandables;
	var objs = JSONMapData.objects.objects;
	var marked = [];
	newMap.matrices = JSONMapData.matrices;
	newMap.dims = JSONMapData.dims;
	
	
	//consolidates the enemy data
	for (var i = 0; i < enemies.length; i++) {
		var curr = enemies[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isEnemy = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("Enemy");
					if (search >= 0) {isEnemy = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isEnemy) {
				var en2 = Object.assign({},curr,curr2);
				newMap.objects.enemies.push(en2);
				marked.push(i2);
				break;
			}
		}
	}
	
	//consolidates the destructable data
	for (var i = 0; i < destructs.length; i++) {
		var curr = destructs[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isDestruct = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				//console.log(curr2.l + " , " + temp.id + " , " + temp.l);
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("Destruct");
					
					if (search >= 0) {isDestruct = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isDestruct) {
				var des2 = Object.assign({},curr,curr2);
				newMap.objects.destructables.push(des2);
				marked.push(i2);
				break;
			}
		}
	}
	
	//consolidates the door data
	for (var i = 0; i < doors.length; i++) {
		var curr = doors[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isDoor = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				//console.log(curr2.l + " , " + temp.id + " , " + temp.l);
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("Door");
					
					if (search >= 0) {isDoor = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isDoor) {
				door2 = Object.assign({},curr,curr2);
				newMap.objects.doors.push(door2);
				marked.push(i2);
				break;
			}
		}
	}
	
	
	//consolidates the puzzle data
	for (var i = 0; i < puz.length; i++) {
		var curr = puz[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isPuzzle = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("PuzzleBlock");
					if (search >= 0) {isPuzzle = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isPuzzle) {
				var puz2 = Object.assign({},curr,curr2);
				newMap.objects.puzzles.push(puz2);
				marked.push(i2);
				break;
			}
		}
	}
	
	
	//consolidates the chest data
	for (var i = 0; i < chests.length; i++) {
		var curr = chests[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isChest = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("Chest");
					if (search >= 0) {isChest = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isChest) {
				var chest2 = Object.assign({},curr,curr2);
				newMap.objects.chests.push(chest2);
				marked.push(i2);
				break;
			}
		}
	}
	
	//consolidates the character data
	for (var i = 0; i < chars.length; i++) {
		var curr = chars[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isChar = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("Character");
					if (search >= 0) {isChar = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isChar) {
				var char2 = Object.assign({},curr,curr2);
				newMap.objects.characters.push(char2);
				marked.push(i2);
				break;
			}
		}
	}
	
	//consolidates the item data
	for (var i = 0; i < items.length; i++) {
		var curr = items[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isItem = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("Bonus");
					if (search >= 0) {isItem = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isItem) {
				var item2 = Object.assign({},curr,curr2);
				newMap.objects.items.push(item2);
				marked.push(i2);
				break;
			}
		}
	}
	
	//consolidates the event data
	for (var i = 0; i < events.length; i++) {
		var curr = events[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isEvent = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("Event");
					if (search >= 0) {isEvent = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isEvent) {
				var event2 = Object.assign({},curr,curr2);
				newMap.objects.events.push(event2);
				marked.push(i2);
				break;
			}
		}
	}

	//consolidates the wandable data
	for (var i = 0; i < wandables.length; i++) {
		var curr = wandables[i];
		for (var i2 = 0; i2 < objs.length; i2++) {
			var curr2 = objs[i2];
			var isWandable = false;
			for (var i3 = 0; i3 < newMap.assetLexicon.length; i3++){
				var temp = newMap.assetLexicon[i3];
				if (temp.id == curr2.l) {
					var search = temp.l.lastIndexOf("LavaBridge");
					if (search >= 0) {isWandable = true;}
					break;
				}
			}
			if (curr2.r == curr.r && curr2.c == curr.c && isWandable) {
				var wand2 = Object.assign({},curr,curr2);
				newMap.objects.wandables.push(wand2);
				marked.push(i2);
				break;
			}
		}
	}
	
	//marks specified objects for deletion, their number came up!
	for (var i = 0; i < marked.length; i++){
		var current = marked[i];
		objs[current].targetedForExtermination = true;
	}
	
	//deletes the marked objects
	for (var i = objs.length - 1; i >= 0; i--) {
		var current = objs[i];
		if (current.targetedForExtermination) {
			objs.splice(i,1);
		}
	}
	
	newMap.objects.objects = objs;
	
	var output = JSON.stringify(newMap);
	//console.log(output);
	//document.getElementById("display").innerHTML = output;
	//return newMap;
	console.log("2: " + newMap.tileData.length);
	SBZ3(newMap);
}