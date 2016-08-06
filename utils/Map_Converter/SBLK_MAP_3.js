var matrixLookup = [
{"ma":null,"mb":null,"mc":null,"md":null,"name": 0},
{"ma":6.123031769111885e-17, "mb":1, "mc":-1, "md":6.123031769111885e-17, "name":"1"},
{"ma":-1.836909530733566e-16, "mb":-1, "mc":1, "md":-1.836909530733566e-16, "name":"3"},
{"ma":-4.28612223837832e-16, "mb":-1, "mc":1, "md":-4.28612223837832e-16, "name":"3"},
{"ma":1, "mb":0, "mc":0, "md":-1, "name":"5"},
{"ma":-1, "mb":1.224606353822377e-16, "mc":-1.224606353822377e-16, "md":-1, "name":"2"}
];

function SBZ3(JSONMapData){
	var newMap = {
		"meta" : {
			"author": "McEvoy Creative",
			"date" : {
				"month" : "???",
				"day" : "???" ,
				"year" : "2008",
			},
			"version" : 1.7,
			"comment1" : "one of the original maps, now available as JSON",
			"comment2" : "This version will be the last with complete legacy compatibility",
			"comment3" : "transformation matrices are no longer supported",
			"comment4" : "rooms are now stored in their own section"
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
	var tileData1 = JSONMapData.tileData;
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
	newMap.matrices = JSONMapData.matrices;
	newMap.dims = JSONMapData.dims;
	
	//moves room data, and re-structures tile data
	for (var i=0; i < tileData1.length; i++) {
		var curr = tileData1[i];
		newMap.roomData.push(Number(curr.rm));
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
			}
		}
		var newTile = curr.l + "." + mMeta;
		
		newMap.tileData.push(Number(newTile));
	}
	
	//removes rooms from enemy data
	for (var i = 0; i < enemies.length; i++) {
		var curr = enemies[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.enemies.push(curr);
	}
	
	//removes rooms from destructable data
	for (var i = 0; i < destructs.length; i++) {
		var curr = destructs[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.destructables.push(curr);
	}
	
	//removes rooms from door data
	for (var i = 0; i < doors.length; i++) {
		var curr = doors[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.doors.push(curr);
	}
	
	
	//removes rooms from puzzle data
	for (var i = 0; i < puz.length; i++) {
		var curr = puz[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.puzzles.push(curr);
	}
	
	
	//removes rooms from chest data
	for (var i = 0; i < chests.length; i++) {
		var curr = chests[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.chests.push(curr);
	}
	
	//removes rooms from character data
	for (var i = 0; i < chars.length; i++) {
		var curr = chars[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.characters.push(curr);
	}
	
	//removes rooms from item data
	for (var i = 0; i < items.length; i++) {
		var curr = items[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.items.push(curr);
	}
	
	//removes rooms from event data
	for (var i = 0; i < events.length; i++) {
		var curr = events[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.events.push(curr);
	}

	//removes rooms from wandable data
	for (var i = 0; i < wandables.length; i++) {
		var curr = wandables[i];
		delete curr.rm;
		
		var mDupe = false;
		var mLookup = matrixLookup;
		var mMeta = 0;
		var ma = curr.ma;
		var mb = curr.mb;
		var mc = curr.mc;
		var md = curr.md;
		for (var i4 = 0; i4 < mLookup.length; i4++) {
			var curr2 = mLookup[i4];
			if(ma == curr2.ma && mb == curr2.mb && mc == curr2.mc && md == curr2.md) {
				mDupe = true;
				mMeta = curr2.name;
				curr.mm = mMeta;
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
			}
		}
		
		newMap.objects.wandables.push(curr);
	}
	
	var output = JSON.stringify(newMap);
	//console.log(output);
	document.getElementById("display").innerHTML = output;
	console.log("3: " + newMap.tileData.length);
	SBZ4(newMap);
}