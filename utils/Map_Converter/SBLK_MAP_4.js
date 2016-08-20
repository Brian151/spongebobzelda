function SBZ4(JSONMapData){
	var newMap = {
		"meta" : {
			"author": "McEvoy Creative",
			"date" : {
				"month" : "???",
				"day" : "???" ,
				"year" : "2008",
			},
			"version" : 2.0.5,
			"comment1" : "one of the original maps, now available as JSON",
			"comment2" : "legacy suppport is dropped",
			"comment3" : "Room data is re-structured"
		},
		"dims": {
			"w" : 0,
			"h" : 0
		},
		"tileData" : [],
		"roomData" : [],
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
	newMap.objects.puzzles = JSONMapData.objects.puzzles;
	newMap.objects.doors = JSONMapData.objects.doors;
	newMap.objects.enemies = JSONMapData.objects.enemies;
	newMap.objects.destructables = JSONMapData.objects.destructables;
	newMap.objects.chests = JSONMapData.objects.chests;
	newMap.objects.characters = JSONMapData.objects.characters;
	newMap.objects.items = JSONMapData.objects.items;
	newMap.objects.events = JSONMapData.objects.events;
	newMap.objects.wandables = JSONMapData.objects.wandables;
	newMap.objects.objects = JSONMapData.objects.objects;
	newMap.matrices = JSONMapData.matrices;
	newMap.dims = JSONMapData.dims;
	var roomData1 = JSONMapData.roomData;
	newMap.roomData = JSONMapData.roomData;
	newMap.rD2 = [];
	var tempR = {iDs:[]};
	
	//room data 2D
	//2D array to easily look-up room id's as x and y
	var r2D = [];
	for (var i=0; i < 36; i++) {
		r2D.push([]);
		for (var i2=0; i2 < 36; i2++) {
			r2D[i].push(-1);
		}
	}
	
	//re-structures room data (what a pain...)
	
	//finds room bounding boxes
	var x = 0;
	var y = 0;
	for (var i=0; i < roomData1.length; i++) {
		if (!(i % 36) && i > 0) {
			//console.log("modulo width!");
			x = 0;
			y++;
		}
		var curr = roomData1[i];
		if (curr != -1) {
			if (!tempR["rm_" + curr]) {
				tempR["rm_" + curr] = {x:x,y:y,x2:x,y2:y};
				tempR.iDs.push(curr);
			} else {
				if (x < tempR["rm_" + curr].x) tempR["rm_" + curr].x = x;
				if (y < tempR["rm_" + curr].y) tempR["rm_" + curr].y = y;
				if (x > tempR["rm_" + curr].x2) tempR["rm_" + curr].x2 = x;
				if (y > tempR["rm_" + curr].y2) tempR["rm_" + curr].y2 = y;
			}
		}
		r2D[y][x] = curr;
		x++;
	}
	
	//writes room bounding boxes to new room data section
	for (var i=0; i < tempR.iDs.length; i++) {
		var iD = tempR.iDs[i];
		var curr = tempR["rm_" + iD];
		curr.id = iD;
		newMap.rD2.push(curr);
	}
	
	//initial conversion, creates regions 1x1 tiles in length cuz directly making 
	//a horizontal strip is apparently impossible... >.>
	for(var i=0; i < newMap.rD2.length; i++) {
		var curr = newMap.rD2[i];
		curr.regs = [];
		var id = curr.id;
		for (var iy =curr.y; iy < curr.y2+1; iy++) {
			for(var ix=curr.x; ix < curr.x2+1; ix++) {
				curr2 = r2D[iy][ix];
				//console.log(curr2 + " : " + ix + " , " + iy);
				if (curr2 == id) {
					curr.regs.push({x:ix,y:iy,x2:ix,y2:iy});
				}
			}
		}
	}
	
	//don't need 2D room array anymore...
	r2D = [];
	var rD3 = [];
	
	//convert 1x1 tile regions to horizontal strip regions...
	for(var i=0; i < newMap.rD2.length; i++) {
		var curr = newMap.rD2[i];
		for (var i2=0; i2 < curr.regs.length; i2++) {
			var curr2 = curr.regs[i2];
			if (!curr2.p) {
				curr2.p = true;
				for(var i3=0; i3 < curr.regs.length; i3++) {
					var curr3 = curr.regs[i3];
					var nextX = curr2.x2 + 1;
					if (!curr3.p) {
						if ( 
							(curr3.y == curr2.y) &&
							(curr3.x == nextX)
						) {
							curr3.p = true;
							curr2.x2++;
						}
					}
				}
				rD3.push(curr2);
			}
		}
		curr.regs = rD3;
		rD3 = [];
	}
	
	//combine compatible horizontal strips
	for(var i=0; i < newMap.rD2.length; i++) {
		var curr = newMap.rD2[i];
		for (var i2=0; i2 < curr.regs.length; i2++) {
			var curr2 = curr.regs[i2];
			if (!curr2.p2) {
				curr2.p2 = true;
				for(var i3=0; i3 < curr.regs.length; i3++) {
					var curr3 = curr.regs[i3];
					var nextY = curr2.y2 + 1;
					if (!curr3.p2) {
						if ( 
							(curr3.y == nextY) &&
							(curr3.x == curr2.x) &&
							(curr3.x2 == curr2.x2)
						) {
							curr3.p2 = true;
							curr2.y2++;
						}
					}
				}
				rD3.push(curr2);
			}
		}
		curr.regs = rD3;
		rD3 = [];
	}
	
	//remove p and p2 markers from room region data
	for(var i=0; i < newMap.rD2.length; i++) {
		var curr = newMap.rD2[i];
		for (var i2=0; i2 < curr.regs.length; i2++) {
			var curr2 = curr.regs[i2];
			delete curr2.p;
			delete curr2.p2;
		}
	}
	
	//replace old room data and remove the new room data section
	newMap.roomData = newMap.rD2;
	delete newMap.rD2;
	
	var output = JSON.stringify(newMap);
	//console.log(output);
	document.getElementById("display").value = output;
	//console.log("4: " + newMap.tileData.length);
	//return newMap;
}