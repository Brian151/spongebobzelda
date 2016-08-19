WIP Map editor for Spongebob: Invasion of the Lava King
made by Brian151 (github)
coded in HTML + JavaScript
assets copyright Nicklodeon and McEvoy Creative 2008-2016

extra technologies: 
unnamed HTML5 Game Library (also coded by Brian151)

status:
early dev, starting to add core features

features:
[scrollable BG grid]
100% operational - locked to min X and Y of 0, however
move mouse close to edge of screen to scroll
[custom mouse cursor] 
(very WIP...)
[asset librabries]
(format extremely WIP)
internal structure and implementation currently very hacky
[debug stuff]
...
[tilemap]
early map importer stage, loaded from a converted version of patrick01a.sbz
scroll map down a bit till you see some tiles, than scroll right
{There are some blank tiles where there should not be.
The source of this is undetermined, but I'm guessing it's in the map decoder.
I haven't the faintest idea why this happens...
Debugging in the map converter revealed some map rows to be longer than 36 tiles
I've known of this for a while, as it affected me when making the minimap tool.
I know of no way to resolve this, short of manually editing each and every afflicted map.}
[editing]
choose between 'brush' or 'erase'
choose any of the tiles from epsiode 1 dungeon tileset
[import]
tiles only
hard-coded to patrick01a.sbz
(note : map data entirely different format than original map, 
DO NOT COPY INTO DATA FOLDER)
next:
make tile buttons change states, and respond only to single clicks...
clean-up code...majorly...
editing enemies
button class changes