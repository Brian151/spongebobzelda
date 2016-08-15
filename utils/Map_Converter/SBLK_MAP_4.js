function SBZ4(JSONMapData){
	var newMap = {
		"meta" : {
			"author": "McEvoy Creative",
			"date" : {
				"month" : "???",
				"day" : "???" ,
				"year" : "2008",
			},
			"version" : 2.0,
			"comment1" : "one of the original maps, now available as JSON",
			"comment2" : "legacy suppport is dropped",
			"comment3" : "Room data is re-structured, although horribly unoptimized"
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
	
	//re-structures room data (totally broken...)
	/*var rx = 0;
	var ry = 0;
	var ri = 0;
	var prev = "nothing";
	for (var i = 0; i < roomData1.length; i++) {
		var curr = roomData1[i];
		var fR2 = false;
		var modu = i % newMap.dims.w;
		if (i > 0 && modu == 0){
			rx = 0;
			ry++;
			prev = "row";
		}
		if (curr >= 0) {
			var foundRoom = false;
			fR2 = true;
			for (var i2 = 0; i2 < newMap.roomData.length; i2++) {
				if (newMap.roomData[i2].id == curr) {
					foundRoom = true;
					if (rx < newMap.roomData[i2].x) {
						newMap.roomData[i2].x = rx;
					}
					if (rx > newMap.roomData[i2].x2) {
						newMap.roomData[i2].x2 = rx;
					}
					if (ry < newMap.roomData[i2].y) {
						newMap.roomData[i2].y = ry;
					}
					if (ry > newMap.roomData[i2].y2) {
						newMap.roomData[i2].y2 = ry;
					}
					if (curr != prev) {
						newMap.roomData[i2].ri++;
						var nZ = {
							"x" : rx,
							"y" : ry,
							"x2" : rx,
							"y2" : ry
						}; //nZ.t = false;
						newMap.roomData[i2].reg.push(nZ);
					}
					ri = newMap.roomData[i2].ri;
					newMap.roomData[i2].reg[ri].x2 = rx;
				}
			}
			if (!foundRoom && fR2) {
				var nRoom = {"id":curr , "x":rx , "y":ry , "x2":rx , "y2":ry , "reg":[]};
				ri = 0;
				var nZ2 = {
					"x" : rx,
					"y" : ry,
					"x2" : rx,
					"y2" : ry,
				}; //nZ2.t = false;
				nRoom.reg.push(nZ2);
				nRoom.ri = ri;
				newMap.roomData.push(nRoom);
			}
			
		}
		prev = curr;
	}
	
	//cleans the ri counter from room data
	for (var i = 0; i < newMap.roomData.length; i++) {
		delete newMap.roomData[i].ri;
	}*/
	
	/* not working
	//attempts to optimize room data
	for (var i = 0; i < newMap.roomData.length; i++) {
		var curr = newMap.roomData[i];
		for (var i2; i2 < curr.reg.length; i2++) {
			var curr2 = curr.reg[i2];
			var x0 = curr2.x;
			var y1 = curr2.y + 1;
			var xMAX = curr2.x2;
			if (!curr2.t) {
				for (var i3 = 0; i3 < curr.reg.length; i3++) {
					var curr3 = curr.reg[i3];
					if (curr3.x == x0 && curr3.y == y1 && curr3.x2 == xMAX && !curr3.t) {
						curr3.t = true;
						curr2.y2 = curr3.y2;
					}
				}
			}
		}
	}
	
	for (var i = 0; i < newMap.roomData.length; i++) {
		var curr = newMap.roomData[i].reg;
		for (var i2 = curr.length - 1; i2 >= 0; i2--) {
			var curr2 = curr[i2];
			if (curr2.t) {
				curr.splice(i2,1);
			}
		}
	}
	*/
	
	var output = JSON.stringify(newMap);
	//console.log(output);
	document.getElementById("display").value = output;
	console.log("4: " + newMap.tileData.length);
	//return newMap;
}