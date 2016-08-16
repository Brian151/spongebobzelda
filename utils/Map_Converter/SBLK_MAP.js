function loadXML(XML){
	var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      map1 = SBZ1(xmlhttp.responseXML);
    }
  };
  xmlhttp.open("GET", XML, true);
  xmlhttp.send();
}

function SBZ1(xmlMapData){
	var newMap = {
		"meta" : {
			"author": "McEvoy Creative",
			"date" : {
				"month" : "???",
				"day" : "???" ,
				"year" : "2008",
			},
			"version" : 1.3,
			"comment1" : "one of the original maps, now available as JSON",
			"comment2" : "due to ambiguities in the original format, the object data is extremely unoptimized, and could contain errors"
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
		"assetLexicon" : [],
		"matrices" : []
	};
	var map = xmlMapData.getElementsByTagName("m")[0].getElementsByTagName("r");
	var mapDimY = map.length;
	var mapDimX = map[0].getElementsByTagName("c").length;
	newMap.dims.w = mapDimX; newMap.dims.h = mapDimY;
	var lex = xmlMapData.getElementsByTagName("lex");
	var puz = xmlMapData.getElementsByTagName("ps")[0].getElementsByTagName("p");
	var doors = xmlMapData.getElementsByTagName("ds")[0].getElementsByTagName("d");
	var enemies = xmlMapData.getElementsByTagName("es")[0].getElementsByTagName("e");
	var destructs = xmlMapData.getElementsByTagName("des")[0].getElementsByTagName("de");
	var chests = xmlMapData.getElementsByTagName("cs")[0].getElementsByTagName("c");
	var chars = xmlMapData.getElementsByTagName("chs")[0].getElementsByTagName("ch");
	var items = xmlMapData.getElementsByTagName("its")[0].getElementsByTagName("it");
	var events = xmlMapData.getElementsByTagName("evs")[0].getElementsByTagName("ev");
	var wandables = xmlMapData.getElementsByTagName("ws")[0].getElementsByTagName("w");
	
	//parses the main map
	for (var i = 0; i < map.length; i++) {
		var cells = map[i].getElementsByTagName("c");
		//console.log("row " + i + ": " + cells.length);
		for (var i2 = 0; i2 < cells.length; i2++){
			var cell = cells[i2];
			if(cell.hasChildNodes()) {
				var tile = cell.getElementsByTagName("t")[0];
				var objs = cell.getElementsByTagName("o");
				var ev = cell.getElementsByTagName("m")[0];
				var ch = cell.getElementsByTagName("c")[0];
				var it = cell.getElementsByTagName("i")[0];
				
				if (typeof tile !== "undefined" && i2 < newMap.dims.w) {
					var t2 = {"l":0, "rm":-1};
					var tl = tile.getAttribute("l");
					var tr = tile.getAttribute("rm");
					var ma = tile.getAttribute("ma");
					var mb = tile.getAttribute("mb");
					var mc = tile.getAttribute("mc");
					var md = tile.getAttribute("md");
					t2.l = tl; t2.rm = tr;
					if (typeof ma !== "undefined" && typeof ma !== "null" && typeof ma !== "object") {
						t2.ma = ma;
					}
					if (typeof mb !== "undefined" && typeof mb !== "null" && typeof mb !== "object") {
						t2.mb = mb;
					}
					if (typeof mc !== "undefined" && typeof mc !== "null" && typeof mc !== "object") {
						t2.mc = mc;
					}
					if (typeof md !== "undefined" && typeof md !== "null" && typeof md !== "object") {
						t2.md = md;
					}
					var mDupe = false;
					var mLookup = newMap.matrices;
					for (var i3 = 0; i3 < mLookup.length; i3++) {
						var curr = mLookup[i3];
						if(ma == curr.ma && mb == curr.mb && mc == curr.mc && md == curr.md) {
							mDupe = true;
						}
					}
					if (!mDupe) {
						var mNew = {};
						mNew.ma = ma;
						mNew.mb = mb;
						mNew.mc = mc;
						mNew.md = md;
						newMap.matrices.push(mNew);
					}
					newMap.tileData.push(t2);
				}
				
				if (typeof objs[0] !== "undefined") {
					for (var i3 = 0; i3 < objs.length; i3++) {
						var obj = objs[i3];
						var o2 = {"l":0, "c" : 0, "r" : 0 };
						var ol = obj.getAttribute("l");
						var or = obj.getAttribute("rm");
						var ma = obj.getAttribute("ma");
						var mb = obj.getAttribute("mb");
						var mc = obj.getAttribute("mc");
						var md = obj.getAttribute("md");
						var row = i;
						var col = i2;
						var dl = obj.getAttribute("dl");
						var pl = obj.getAttribute("pl");
						var m = obj.getAttribute("m");
						o2.l = ol; o2.rm = or; o2.c = col; o2.r = row;
						if (typeof ma !== "undefined" && typeof ma !== "null" && typeof ma !== "object") {
							o2.ma = ma;
						}
						if (typeof mb !== "undefined" && typeof mb !== "null" && typeof mb !== "object") {
							o2.mb = mb;
						}
						if (typeof mc !== "undefined" && typeof mc !== "null" && typeof mc !== "object") {
							o2.mc = mc;
						}
						if (typeof md !== "undefined" && typeof md !== "null" && typeof md !== "object") {
							o2.md = md;
						}
						if (typeof dl !== "undefined" && typeof dl !== "null" && typeof dl !== "object") {
							o2.dl = dl;
						}
						if (typeof pl !== "undefined" && typeof pl !== "null" && typeof pl !== "object") {
							o2.pl = pl;
						}
						if (typeof m !== "undefined" && typeof m !== "null" && typeof m !== "object") {
							o2.m = m;
						}
						var mDupe = false;
						var mLookup = newMap.matrices;
						for (var i4 = 0; i4 < mLookup.length; i4++) {
							var curr = mLookup[i4];
							if(ma == curr.ma && mb == curr.mb && mc == curr.mc && md == curr.md) {
								mDupe = true;
							}
						}
						if (!mDupe) {
							var mNew = {};
							mNew.ma = ma;
							mNew.mb = mb;
							mNew.mc = mc;
							mNew.md = md;
							newMap.matrices.push(mNew);
						}
						newMap.objects.objects.push(o2);
					}
				}
				
				if (typeof ev !== "undefined") {
					var e2 = {"l":0};
					var el = ev.getAttribute("l");
					var er = ev.getAttribute("rm");
					var row = i;
					var col = i2;
					e2.l = el; e2.rm = er; e2.c = col; e2.r = row;
					newMap.objects.objects.push(e2);
				}
				
				if (typeof ch !== "undefined") {
					var ch2 = {"l":0};
					var cl = ch.getAttribute("l");
					var cr = ch.getAttribute("rm");
					var row = i;
					var col = i2;
					ch2.l = cl; ch2.rm = cr; ch2.c = col; ch2.r = row;
					newMap.objects.objects.push(ch2);
				}
				
				if (typeof it !== "undefined") {
					var it2 = {"l":0};
					var il = it.getAttribute("l");
					var ir = it.getAttribute("rm");
					var row = i;
					var col = i2;
					it2.l = il; it2.rm = ir; it2.c = col; it2.r = row;
					newMap.objects.objects.push(it2);
				}
				
			} else {
				if (i2 < newMap.dims.w) {
					var t2 = {"l":0, "rm":-1};
					newMap.tileData.push(t2);
				}
			}
		}
	}
	
	//parses the enemy data
	for (var i = 0; i < enemies.length; i++) {
		var curr = enemies[i];
		var newEn = {"c" : 0 , "r": 0};
		newEn.r = curr.getAttribute("r"); newEn.c = curr.getAttribute("c");
		var item = curr.getAttribute("i");
		if (typeof item !== "undefined" && typeof item !== "null" && typeof item !== "object") {
			newEn.i = item;
			//alert("enemy item type: " + typeof item);
		}
		newMap.objects.enemies.push(newEn);
	}
	
	//parses the destructable data
	for (var i = 0; i < destructs.length; i++) {
		var curr = destructs[i];
		var newDes = {"c" : 0 , "r": 0};
		newDes.r = curr.getAttribute("r"); newDes.c = curr.getAttribute("c");
		var item = curr.getAttribute("i");
		if (typeof item !== "undefined" && typeof item !== "null" && typeof item !== "object") {
			newDes.i = item;
			//alert("destructable item type: " + typeof item);
		}
		newMap.objects.destructables.push(newDes);
	}
	
	//parses the door data
	for (var i = 0; i < doors.length; i++) {
		var curr = doors[i];
		var newDoor = {"r" : 0 , "c" : 0 , "type" : "" , "doorLink" : 0, "map" : ""};
		newDoor.r = curr.getAttribute("r"); newDoor.c = curr.getAttribute("c");
		newDoor.type = curr.getAttribute("type"); newDoor.doorLink = curr.getAttribute("doorLink");
		newDoor.map = curr.getAttribute("map");
		newMap.objects.doors.push(newDoor);
	}
	
	//parses the puzzle data
	for (var i = 0; i < puz.length; i++) {
		var curr = puz[i];
		var newPuz = {"c" : 0 , "r" : 0 , "spC" : "" , "spR" : 0};
		newPuz.r = curr.getAttribute("r"); newPuz.c = curr.getAttribute("c");
		newPuz.spC = curr.getAttribute("spC"); newPuz.spR = curr.getAttribute("spR");
		newMap.objects.puzzles.push(newPuz);
	}
	
	//parses the chest data
	for (var i = 0; i < chests.length; i++) {
		var curr = chests[i];
		var newChest = {"c" : 0 , "r" : 0};
		newChest.r = curr.getAttribute("r"); newChest.c = curr.getAttribute("c");
		newMap.objects.chests.push(newChest);
	}
	
	//parses the character data
	for (var i = 0; i < chars.length; i++) {
		var curr = chars[i];
		var newChar = {"c" : 0 , "r" : 0};
		newChar.r = curr.getAttribute("r"); newChar.c = curr.getAttribute("c");
		newMap.objects.characters.push(newChar);
	}
	
	//parses the item data
	for (var i = 0; i < items.length; i++) {
		var curr = items[i];
		var newItem = {"c" : 0 , "r" : 0};
		newItem.r = curr.getAttribute("r"); newItem.c = curr.getAttribute("c");
		newMap.objects.items.push(newItem);
	}
	
	//parses the event data
	for (var i = 0; i < events.length; i++) {
		var curr = events[i];
		var newEvt = {"c" : 0 , "r" : 0};
		newEvt.r = curr.getAttribute("r"); newEvt.c = curr.getAttribute("c");
		newMap.objects.events.push(newEvt);
	}
	
	//parses the wandable data
	for (var i = 0; i < wandables.length; i++) {
		var curr = wandables[i];
		var newWandable = {"c" : 0 , "r" : 0 , "spC" : "" , "spR" : 0};
		newWandable.r = curr.getAttribute("r"); newWandable.c = curr.getAttribute("c");
		newMap.objects.wandables.push(newWandable);
	}
	
	//parses the asset dictionary
	for (var i = 0; i < lex.length; i++) {
		var curr = lex[i].getElementsByTagName("d")[0];
		var newDef = {"id" : 0 , "l" : ""};
		newDef.id = curr.getAttribute("id"); newDef.l = curr.getAttribute("l");
		newMap.assetLexicon.push(newDef);
	}
	//adds asset id 0
	var noAsset = {"id" : 0, "l" : "BLANK_TILE"};
	newMap.assetLexicon.push(noAsset);
	
	var output = JSON.stringify(newMap);
	//console.log(output);
	//document.getElementById("display").innerHTML = output; 
	//return newMap;
	//console.log("1: " + newMap.tileData.length);
	SBZ2(newMap);
}

var map1;
//loadXML("patric01a.xml");
var mapsrc = document.getElementById("in");

var parser = new DOMParser();
function readXML() {
	var map1 = parser.parseFromString(mapsrc.value,"text/xml");
	SBZ1(map1);
}

//ref.
function myFunction(xml) {
  var i;
  var xmlDoc = xml;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

//more ref...
/*var txt, parser, xmlDoc;
txt = "<note>" +
"<to>Tove</to>" +
"<from>Jani</from>" +
"<heading>Reminder</heading>" +
"<body>Don't forget me this weekend!</body>" +
"</note>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(txt,"text/xml");

document.getElementById("to").innerHTML =
xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
document.getElementById("from").innerHTML =
xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
document.getElementById("message").innerHTML =
xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;*/
