/*
note: this is an array of polarity matrices.
it was created based on a trend discovered in
variants of the transform matrix, where the
poles are always consistent for a certain angle.
(including if it's been flipped, and which flip was performed)
effectively, this should be able to translate any given matrix
to meta-data.

only 8 variants exist in SBLK:
0 0
1 90
2 180
3 270
4 0 [f]
5 90 [f]
6 180 [f]
7 270 [f]

mb and mc are the only values that may ever be 0.
*/

var matrixLookup = [
{"ma":null,"mb":null,"mc":null,"md":null,"name": 0},
{"ma":1,"mb":0,"mc":0,"md":1,"name": 0},
{"ma":1,"mb":-1,"mc":1,"md":1,"name": 0},
{"ma":1, "mb":1, "mc":-1, "md":1, "name": 1},
{"ma":-1, "mb":1, "mc":-1, "md":-1, "name": 2},
{"ma":-1, "mb":-1, "mc":1, "md":-1, "name": 3}, // neg, neg, pos, NEG! read your dang notes right...
{"ma":-1,"mb":0,"mc":0,"md":1,"name": 4},
{"ma":-1,"mb":1,"mc":1,"md":1,"name": 4},
{"ma":-1,"mb":-1,"mc":-1,"md":1,"name": 5},
{"ma":1,"mb":-1,"mc":-1,"md":-1,"name": 6},
{"ma":1,"mb":0,"mc":0,"md":-1,"name": 6},
{"ma":1,"mb":1,"mc":1,"md":-1,"name": 7},
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
	//newMap.matrices = JSONMapData.matrices;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				break;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
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
			var mbz = (curr2.mb == 0);
			var mcz = (curr2.mc == 0);
			var man = (curr2.ma < 0);
			var mbn = (curr2.mb < 0);
			var mcn = (curr2.mc < 0);
			var mdn = (curr2.md < 0);
			var man2 = (ma < 0);
			var mbn2 = (mb < 0);
			var mcn2 = (mc < 0);
			var mdn2 = (md < 0);
			var mam = (man == man2)
			var mbm = ( (mbn == mbn2) || ( mbz && (mb == 0)) );
			var mcm = ( (mcn == mcn2) || ( mcz && (mc == 0)) );
			var mdm = (mdn == mdn2);
			if (mam && mbm && mcm && mdm) {
				mMeta = curr2.name;
				
				delete curr.ma;
				delete curr.mb;
				delete curr.mc;
				delete curr.md;
				break;
			}
		}
		curr.mm = mMeta;
		newMap.objects.wandables.push(curr);
	}
	
	var output = JSON.stringify(newMap);
	//console.log(output);
	//document.getElementById("display").value = output;
	//console.log("3: " + newMap.tileData.length);
	SBZ4(newMap);
}