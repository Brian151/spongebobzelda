﻿package 
{
    import AssetData.*;
    import gameplay.*;

    public class AssetData extends Object
    {
        public static const sTYPE_TILE:String = "tile";
        public static const sTYPE_MISC:String = "misc";
        public static const sLINK_OUTDOOR:String = "outdoor";
        public static const sLINK_PUZZLE_SLOT:String = "puzzleSlot";
        public static const sLINK_PUZZLE:String = "puzzle";
        public static const sSIDE_RIGHT:String = "right";
        public static const sTYPE_OBJECT:String = "object";
        public static const sSIDE_LEFT:String = "left";
        public static const sBLOCKER_FULL:String = "blockerFull";
        public static const sLINK_INDOOR:String = "indoor";
        public static const sBLOCKER_NOT_ROOM:String = "blockerNotRoom";
        private static var aAssetData:Array;
        public static const sBLOCKER_HALF:String = "blockerHalf";
        public static const sTYPE_ITEM:String = "item";
        public static const sSIDE_UP:String = "up";
        public static const sSIDE_DOWN:String = "down";
        public static const sTYPE_CHARACTER:String = "character";
        public static const sBLOCKER_NONE:String = "blockerNone";

        public function AssetData()
        {
            return;
        }// end function

        public static function getItemAssetDataByID(param1:uint) : Object
        {
            var _loc_2:Number = NaN;
            var _loc_4:Object = null;
            var _loc_3:* = aAssetData.length;
            _loc_2 = 0;
            while (_loc_2 < _loc_3)
            {
                
                if (aAssetData[_loc_2].sID == param1 && aAssetData[_loc_2].sType == sTYPE_ITEM)
                {
                    _loc_4 = aAssetData[_loc_2];
                    break;
                }
                _loc_2 = _loc_2 + 1;
            }
            if (_loc_4 == null)
            {
                trace("ERROR : No data for this asset", "Item:", param1);
            }
            return _loc_4;
        }// end function

        public static function getAssetData(param1:String) : Object
        {
            var _loc_2:Number = NaN;
            var _loc_4:Object = null;
            var _loc_3:* = aAssetData.length;
            _loc_2 = 0;
            while (_loc_2 < _loc_3)
            {
                
                if (aAssetData[_loc_2].sLBLinkage == param1 || aAssetData[_loc_2].sLinkage == param1)
                {
                    _loc_4 = aAssetData[_loc_2];
                    break;
                }
                _loc_2 = _loc_2 + 1;
            }
            if (_loc_4 == null)
            {
                trace("ERROR : No data for this asset", param1);
            }
            return _loc_4;
        }// end function

        public static function initAssetData() : void
        {
            aAssetData = new Array();
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGrass00Lv1", sLinkage:"mcLBTileGrass00Lv1", bRandomMatrix:true, bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGrass01Lv1", sLinkage:"mcLBTileGrass01Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGrass02Lv1", sLinkage:"mcLBTileGrass02Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGrass03Lv1", sLinkage:"mcLBTileGrass03Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGrass04Lv1", sLinkage:"mcLBTileGrass04Lv1", bRandomMatrix:true, bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGrass05Lv1", sLinkage:"mcLBTileGrass05Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall00Lv1", sLinkage:"mcLBObjectWall00Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall01Lv1", sLinkage:"mcLBObjectWall01Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall02Lv1", sLinkage:"mcLBObjectWall02Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall03Lv1", sLinkage:"mcLBObjectWall03Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall04Lv1", sLinkage:"mcLBObjectWall04Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall05Lv1", sLinkage:"mcLBObjectWall05Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall06Lv1", sLinkage:"mcLBObjectWall06Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall07Lv1", sLinkage:"mcLBObjectWall07Lv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon00Lv1", sLinkage:"mcGameObjectDungeon00Lv1", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon01Lv1", sLinkage:"mcGameObjectDungeon01Lv1", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon02Lv1", sLinkage:"mcGameObjectDungeon02Lv1", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeonSquidLv1", sLinkage:"mcGameObjectDungeonSquidLv1", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeonSandyLv1", sLinkage:"mcGameObjectDungeonSandyLv1", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround00Lv2", sLinkage:"mcLBTileGround00Lv2", bRandomMatrix:true, bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround01Lv2", sLinkage:"mcLBTileGround01Lv2", bRandomMatrix:true, bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround02Lv2", sLinkage:"mcLBTileGround02Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround03Lv2", sLinkage:"mcLBTileGround03Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround04Lv2", sLinkage:"mcLBTileGround04Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround05Lv2", sLinkage:"mcLBTileGround05Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround06Lv2", sLinkage:"mcLBTileGround06Lv2", bRandomMatrix:true, bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall00Lv2", sLinkage:"mcLBObjectWall00Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall01Lv2", sLinkage:"mcLBObjectWall01Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall02Lv2", sLinkage:"mcLBObjectWall02Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall03Lv2", sLinkage:"mcLBObjectWall03Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall04Lv2", sLinkage:"mcLBObjectWall04Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall05Lv2", sLinkage:"mcLBObjectWall05Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall06Lv2", sLinkage:"mcLBObjectWall06Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall07Lv2", sLinkage:"mcLBObjectWall07Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall08Lv2", sLinkage:"mcLBObjectWall08Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon00Lv2", sLinkage:"mcGameObjectDungeon00Lv2", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon01Lv2", sLinkage:"mcGameObjectDungeon01Lv2", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon02Lv2", sLinkage:"mcGameObjectDungeon02Lv2", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround00Lv3", sLinkage:"mcLBTileGround00Lv3", bRandomMatrix:true, bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround01Lv3", sLinkage:"mcLBTileGround01Lv3", bRandomMatrix:true, bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGroundNew01Lv3", sLinkage:"mcTileGroundNew01Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround02Lv3", sLinkage:"mcLBTileGround02Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround03Lv3", sLinkage:"mcLBTileGround03Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround04Lv3", sLinkage:"mcLBTileGround04Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround05Lv3", sLinkage:"mcLBTileGround05Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround06Lv3", sLinkage:"mcLBTileGround06Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround07Lv3", sLinkage:"mcLBTileGround07Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround08Lv3", sLinkage:"mcLBTileGround08Lv3", bRandomMatrix:true, bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround09Lv3", sLinkage:"mcLBTileGround09Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround10Lv3", sLinkage:"mcLBTileGround10Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround11Lv3", sLinkage:"mcLBTileGround11Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileGround12Lv3", sLinkage:"mcLBTileGround12Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall00Lv3", sLinkage:"mcLBObjectWall00Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall01Lv3", sLinkage:"mcLBObjectWall01Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall02Lv3", sLinkage:"mcLBObjectWall02Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall03Lv3", sLinkage:"mcLBObjectWall03Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall04Lv3", sLinkage:"mcLBObjectWall04Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall05Lv3", sLinkage:"mcLBObjectWall05Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall06Lv3", sLinkage:"mcLBObjectWall06Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall07Lv3", sLinkage:"mcLBObjectWall07Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectWall08Lv3", sLinkage:"mcLBObjectWall08Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon00Lv3", sLinkage:"mcGameObjectDungeon00Lv3", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon01Lv3", sLinkage:"mcGameObjectDungeon01Lv3", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDungeon02Lv3", sLinkage:"mcGameObjectDungeon02Lv3", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectCavern00Lv3", sLinkage:"mcGameObjectCavern00Lv3", bRotatable:false, bFlipable:false});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairCorner00", sLinkage:"mcLBTileLairCorner00", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairCorner01", sLinkage:"mcLBTileLairCorner01", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairCorner02", sLinkage:"mcLBTileLairCorner02", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairCorner03", sLinkage:"mcLBTileLairCorner03", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairTopWall00", sLinkage:"mcLBTileLairTopWall00", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairBottomWall00", sLinkage:"mcLBTileLairBottomWall00", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor00", sLinkage:"mcLBTileLairFloor00", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairCeilling00", sLinkage:"mcLBTileLairCeilling00", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBObjectRoomBlockLv1", sLinkage:"mcLBObjectRoomBlockLv1", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor00Lv2", sLinkage:"mcLBTileLairFloor00Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor01Lv2", sLinkage:"mcLBTileLairFloor01Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor02Lv2", sLinkage:"mcLBTileLairFloor02Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor03Lv2", sLinkage:"mcLBTileLairFloor03Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor04Lv2", sLinkage:"mcLBTileLairFloor04Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor05Lv2", sLinkage:"mcLBTileLairFloor05Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor06Lv2", sLinkage:"mcLBTileLairFloor06Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor07Lv2", sLinkage:"mcLBTileLairFloor07Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW00Lv2", sLinkage:"mcLBTileFloorW00Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW01Lv2", sLinkage:"mcLBTileFloorW01Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW02Lv2", sLinkage:"mcLBTileFloorW02Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW03Lv2", sLinkage:"mcLBTileFloorW03Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW04Lv2", sLinkage:"mcLBTileFloorW04Lv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBObjectRoomBlockLv2", sLinkage:"mcLBObjectRoomBlockLv2", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloorTopLv3", sLinkage:"mcLBTileLairFloorTopLv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor00Lv3", sLinkage:"mcLBTileLairFloor00Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor01Lv3", sLinkage:"mcLBTileLairFloor01Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor02Lv3", sLinkage:"mcLBTileLairFloor02Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor03Lv3", sLinkage:"mcLBTileLairFloor03Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor04Lv3", sLinkage:"mcLBTileLairFloor04Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor05Lv3", sLinkage:"mcLBTileLairFloor05Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor06Lv3", sLinkage:"mcLBTileLairFloor06Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileLairFloor07Lv3", sLinkage:"mcLBTileLairFloor07Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW00Lv3", sLinkage:"mcLBTileFloorW00Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW01Lv3", sLinkage:"mcLBTileFloorW01Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW02Lv3", sLinkage:"mcLBTileFloorW02Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW03Lv3", sLinkage:"mcLBTileFloorW03Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBTileFloorW04Lv3", sLinkage:"mcLBTileFloorW04Lv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_TILE, sLBLinkage:"mcLBObjectRoomBlockLv3", sLinkage:"mcLBObjectRoomBlockLv3", bRotatable:true, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectChest", sLinkage:"mcGameObjectChest", bUnique:true, bContainer:true, bRotatable:false, bFlipable:false, sID:Data.uCHEST_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectChestKey", sLinkage:"mcGameObjectChestKey", bUnique:true, bContainer:true, bRotatable:false, bFlipable:false, sID:Data.uCHEST_KEY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectChestKill", sLinkage:"mcGameObjectChestKill", bUnique:true, bContainer:true, bRotatable:false, bFlipable:false, sID:Data.uCHEST_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectTree00Lv1", sLinkage:"mcGameObjectTree00Lv1", bUnique:false, bRotatable:false, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectTree01Lv1", sLinkage:"mcGameObjectTree01Lv1", bUnique:false, bRotatable:false, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectTree02Lv1", sLinkage:"mcGameObjectTree02Lv1", bUnique:false, bRotatable:false, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectTree03Lv1", sLinkage:"mcGameObjectTree03Lv1", bUnique:false, bRotatable:false, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct00Lv1", sLinkage:"mcGameObjectDestruct00Lv1", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_SOLID});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct01Lv1", sLinkage:"mcGameObjectDestruct01Lv1", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_SOLID});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct02Lv1", sLinkage:"mcGameObjectDestruct02Lv1", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_SOLID});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct03Lv1", sLinkage:"mcGameObjectDestruct03Lv1", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_SOLID});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct04Lv1", sLinkage:"mcGameObjectDestruct04Lv1", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct05Lv1", sLinkage:"mcGameObjectDestruct05Lv1", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_ORGANIC});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectTree00Lv2", sLinkage:"mcGameObjectTree00Lv2", bUnique:false, bRotatable:false, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectRock00Lv2", sLinkage:"mcGameObjectRock00Lv2", bUnique:false, bRotatable:false, bFlipable:true});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct00Lv2", sLinkage:"mcGameObjectDestruct00Lv2", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_SOLID});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct01Lv2", sLinkage:"mcGameObjectDestruct01Lv2", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_SOLID});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct02Lv2", sLinkage:"mcGameObjectDestruct02Lv2", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_SOLID});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct03Lv2", sLinkage:"mcGameObjectDestruct03Lv2", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct04Lv2", sLinkage:"mcGameObjectDestruct04Lv2", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct05Lv2", sLinkage:"mcGameObjectDestruct05Lv2", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct06Lv2", sLinkage:"mcGameObjectDestruct06Lv2", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_ORGANIC});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct00Lv3", sLinkage:"mcGameObjectDestruct00Lv3", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct01Lv3", sLinkage:"mcGameObjectDestruct01Lv3", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct02Lv3", sLinkage:"mcGameObjectDestruct02Lv3", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct03Lv3", sLinkage:"mcGameObjectDestruct03Lv3", bUnique:false, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct04Lv3", sLinkage:"mcGameObjectDestruct04Lv3", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_SOLID});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDestruct05Lv3", sLinkage:"mcGameObjectDestruct05Lv3", bUnique:false, bDestructable:true, bRotatable:false, bFlipable:true, sID:Data.uDESTRUCTABLE_EXPLOSIVE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectLavaBridge00Lv3", sLinkage:"mcObjectLavaBridge", bUnique:false, bUnder:true, bWandable:true, bRotatable:true, bFlipable:true, sID:Data.uWANDABLE_LAVA});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLv1", sLinkage:"mcGameObjectDoorLv1", sMaskLinkage:"mcLBObjectDoorMaskLv1", bRotatable:false, bFlipable:false, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorMLv1", sLinkage:"mcGameObjectDoorLv1", sMaskLinkage:"mcLBObjectDoorMaskLv1", bRotatable:false, bFlipable:false, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectLairDoorLv1", sLinkage:"mcGameObjectLairDoorLv1", sMaskLinkage:"mcLBObjectLairDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectLairDoorMLv1", sLinkage:"mcGameObjectLairDoorLv1", sMaskLinkage:"mcLBObjectLairDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLairLv1", sLinkage:"mcGameObjectDoorLairLv1", sMaskLinkage:"mcLBObjectDoorMaskLv1", bRotatable:false, bFlipable:false, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_LAIR});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLairMLv1", sLinkage:"mcGameObjectDoorLairLv1", sMaskLinkage:"mcLBObjectDoorMaskLv1", bRotatable:false, bFlipable:false, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_LAIR});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyLv1", sLinkage:"mcGameObjectDoorKeyLv1", sMaskLinkage:"mcLBObjectLairDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KEY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyMLv1", sLinkage:"mcGameObjectDoorKeyLv1", sMaskLinkage:"mcLBObjectLairDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KEY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKillLv1", sLinkage:"mcGameObjectDoorKillLv1", sMaskLinkage:"mcLBObjectLairDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKillMLv1", sLinkage:"mcGameObjectDoorKillLv1", sMaskLinkage:"mcLBObjectLairDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyKillLv1", sLinkage:"mcGameObjectDoorKeyKillLv1", sMaskLinkage:"mcLBObjectDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KEY_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyKillMLv1", sLinkage:"mcGameObjectDoorKeyKillLv1", sMaskLinkage:"mcLBObjectDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KEY_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorMapBorder", sLinkage:"mcGameObjectDoorMapBorder", sMaskLinkage:null, bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorBossLv1", sLinkage:"mcGameObjectDoorBossLv1", sMaskLinkage:"mcGameObjectDoorBossLv1_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_BOSS});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorBossMLv1", sLinkage:"mcGameObjectDoorBossLv1", sMaskLinkage:"mcGameObjectDoorBossLv1_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_BOSS});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorEpisodeMLv1", sLinkage:"mcGameObjectDoorEpisodeLv1", sMaskLinkage:"mcGameObjectDoorEpisodeLv1_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_EPISODE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSecretLv1", sLinkage:"mcGameObjectDoorSecretLv1", sMaskLinkage:"mcLBObjectLairDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_SECRET});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSecretMLv1", sLinkage:"mcGameObjectDoorSecretLv1", sMaskLinkage:"mcLBObjectLairDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_SECRET});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLv2", sLinkage:"mcGameObjectDoorLv2", sMaskLinkage:"mcLBObjectDoor01MaskLv2", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorMLv2", sLinkage:"mcGameObjectDoorLv2", sMaskLinkage:"mcLBObjectDoor01MaskLv2", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectLairDoorLv2", sLinkage:"mcGameObjectLairDoorLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectLairDoorMLv2", sLinkage:"mcGameObjectLairDoorLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLairLv2", sLinkage:"mcGameObjectDoorLairLv2", sMaskLinkage:"mcLBObjectDoor01MaskLv2", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_LAIR});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLairMLv2", sLinkage:"mcGameObjectDoorLairLv2", sMaskLinkage:"mcLBObjectDoor01MaskLv2", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_LAIR});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyLv2", sLinkage:"mcGameObjectDoorKeyLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KEY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyMLv2", sLinkage:"mcGameObjectDoorKeyLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KEY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKillLv2", sLinkage:"mcGameObjectDoorKillLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKillMLv2", sLinkage:"mcGameObjectDoorKillLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyKillLv2", sLinkage:"mcGameObjectDoorKeyKillLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KEY_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyKillMLv2", sLinkage:"mcGameObjectDoorKeyKillLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KEY_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLairLv2", sLinkage:"mcGameObjectDoorLairLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_LAIR});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorBossLv2", sLinkage:"mcGameObjectDoorBossLv2", sMaskLinkage:"mcGameObjectDoorBossLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_BOSS});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorBossMLv2", sLinkage:"mcGameObjectDoorBossLv2", sMaskLinkage:"mcGameObjectDoorBossLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_BOSS});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorEpisodeMLv2", sLinkage:"mcGameObjectDoorEpisodeLv2", sMaskLinkage:"mcLBObjectDoor01MaskLv2", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_EPISODE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSecretLv2", sLinkage:"mcGameObjectDoorSecretLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_SECRET});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSecretMLv2", sLinkage:"mcGameObjectDoorSecretLv2", sMaskLinkage:"mcGameObjectLairDoorLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_SECRET});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSandyMLv2", sLinkage:"mcGameObjectDoorSandyLv2", sMaskLinkage:"mcGameObjectDoorSandyLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_SANDY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSquidwardMLv2", sLinkage:"mcGameObjectDoorSquidwardLv2", sMaskLinkage:"mcGameObjectDoorSandyLv2_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_SQUIDWARD});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLv3", sLinkage:"mcGameObjectDoorLv3", sMaskLinkage:"mcLBObjectDoor01MaskLv3", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorMLv3", sLinkage:"mcGameObjectDoorLv3", sMaskLinkage:"mcLBObjectDoor01MaskLv3", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectLairDoorLv3", sLinkage:"mcGameObjectLairDoorLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectLairDoorMLv3", sLinkage:"mcGameObjectLairDoorLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_NORMAL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLairLv3", sLinkage:"mcGameObjectDoorLairLv3", sMaskLinkage:"mcLBObjectDoor01MaskLv3", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_LAIR});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLairMLv3", sLinkage:"mcGameObjectDoorLairLv3", sMaskLinkage:"mcLBObjectDoor01MaskLv3", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_LAIR});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyLv3", sLinkage:"mcGameObjectDoorKeyLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KEY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyMLv3", sLinkage:"mcGameObjectDoorKeyLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KEY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKillLv3", sLinkage:"mcGameObjectDoorKillLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKillMLv3", sLinkage:"mcGameObjectDoorKillLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyKillLv3", sLinkage:"mcGameObjectDoorKeyKillLv3", sLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_KEY_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorKeyKillMLv3", sLinkage:"mcGameObjectDoorKeyKillLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_KEY_KILL});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorLairLv3", sLinkage:"mcGameObjectDoorLairLv3", sMaskLinkage:"mcLBObjectDoorMaskLv1", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_LAIR});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorBossLv3", sLinkage:"mcGameObjectDoorBossLv3", sMaskLinkage:"mcGameObjectDoorBossLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_BOSS});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorBossMLv3", sLinkage:"mcGameObjectDoorBossLv3", sMaskLinkage:"mcGameObjectDoorBossLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_BOSS});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorEpisodeMLv3", sLinkage:"mcGameObjectDoorEpisodeLv3", sMaskLinkage:"mcGameObjectDoorEpisodeLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_EPISODE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSecretLv3", sLinkage:"mcGameObjectDoorSecretLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_INDOOR, sID:Data.uDOOR_SECRET});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSecretMLv3", sLinkage:"mcGameObjectDoorSecretLv3", sMaskLinkage:"mcGameObjectLairDoorLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_SECRET});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSandyMLv3", sLinkage:"mcGameObjectDoorSandyLv3", sMaskLinkage:"mcGameObjectDoorSandyLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_SANDY});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBObjectDoorSquidwardMLv3", sLinkage:"mcGameObjectDoorSquidwardLv3", sMaskLinkage:"mcGameObjectDoorSandyLv3_mask", bRotatable:true, bFlipable:true, sLinkType:sLINK_OUTDOOR, sID:Data.uDOOR_SQUIDWARD});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusEnergy", sLinkage:"mcGameBonusEnergy", bRotatable:false, bFlipable:false, sID:ItemID.uHEARTH});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusEnergyBig", sLinkage:"mcGameBonusEnergyBig", bRotatable:false, bFlipable:false, sID:ItemID.uHEALTH_BOTTLE});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusKey", sLinkage:"mcGameBonusKey", bRotatable:false, bFlipable:false, sID:ItemID.uDOOR_KEY});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusRupee1", sLinkage:"mcGameBonusRupee1", bRotatable:false, bFlipable:false, sID:ItemID.uPEBBLE_1});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusRupee5", sLinkage:"mcGameBonusRupee5", bRotatable:false, bFlipable:false, sID:ItemID.uPEEBLES_5});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusRupee10", sLinkage:"mcGameBonusRupee10", bRotatable:false, bFlipable:false, sID:ItemID.uPEEBLES_10});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusSwordLv1", sLinkage:"mcGameBonusSwordLv1", bRotatable:false, bFlipable:false, sID:ItemID.uSWORD_LV_1});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusSwordLv2", sLinkage:"mcGameBonusSwordLv2", bRotatable:false, bFlipable:false, sID:ItemID.uSWORD_LV_2});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusShieldLv1", sLinkage:"mcGameBonusShieldLv1", bRotatable:false, bFlipable:false, sID:ItemID.uSHIELD_LV_1});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusShieldLv2", sLinkage:"mcGameBonusShieldLv2", bRotatable:false, bFlipable:false, sID:ItemID.uSHIELD_LV_2});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusArrowLv1", sLinkage:"mcGameBonusArrowLv1", sEngin:"Item", bRotatable:false, bFlipable:false, sID:ItemID.uSEA_URCHIN});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusArrowLv2", sLinkage:"mcGameBonusArrowLv2", bRotatable:false, bFlipable:false, sID:ItemID.uVOLCANIC_URCHIN});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusWand", sLinkage:"mcGameBonusWand", bRotatable:false, bFlipable:false, sID:ItemID.uWAND});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusFork", sLinkage:"mcGameBonusFork", bRotatable:false, bFlipable:false, sID:ItemID.uFORK});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusBoomerang", sLinkage:"mcGameBonusBoomerang", bRotatable:false, bFlipable:false, sID:ItemID.uBOOMERANG});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusKeyBoss", sLinkage:"mcGameBonusKeyBoss", bRotatable:false, bFlipable:false, sID:ItemID.uBOSS_CHAMBER_KEY});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusKeyLair1", sLinkage:"mcGameBonusKeyLair1", bRotatable:false, bFlipable:false, sID:ItemID.uBOSS_DUNGEON_KEY_1});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusKeyLair2", sLinkage:"mcGameBonusKeyLair2", bRotatable:false, bFlipable:false, sID:ItemID.uBOSS_DUNGEON_KEY_2});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusBigHeart", sLinkage:"mcGameBonusBigHeart", bRotatable:false, bFlipable:false, sID:ItemID.uHEART_CONTAINER});
            aAssetData.push({sType:sTYPE_ITEM, sLBLinkage:"mcLBBonusTool", sLinkage:"mcGameBonusTool", bRotatable:false, bFlipable:false, sID:ItemID.uSANDY_TOOLS});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBCharacterSB", sLinkage:"mcGameCharacterSB", bRotatable:false, bFlipable:false, bEnemy:false, sID:Data.uCHARACTER_SPONGEBOB});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBCharacterSandy", sLinkage:"mcSandy", bRotatable:false, bFlipable:false, bEnemy:false, sID:Data.uCHARACTER_SANDY});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBCharacterPatrick", sLinkage:"mcPatrick", bRotatable:false, bFlipable:false, bEnemy:false, sID:Data.uCHARACTER_PATRICK});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBCharacterSquidward", sLinkage:"mcSquidward", bRotatable:false, bFlipable:false, bEnemy:false, sID:Data.uCHARACTER_SQUIDWARD});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBCharacterKrab", sLinkage:"mcKrab", bRotatable:false, bFlipable:false, bEnemy:false, sID:Data.uCHARACTER_KRAB});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBPuzzleBlockLv1", sLinkage:"mcGamePuzzleBlockLv1", bRotatable:false, bFlipable:false, sLinkType:sLINK_PUZZLE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBPuzzleBlockLv2", sLinkage:"mcGamePuzzleBlockLv2", bRotatable:false, bFlipable:false, sLinkType:sLINK_PUZZLE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBPuzzleBlockLv3", sLinkage:"mcGamePuzzleBlockLv3", bRotatable:false, bFlipable:false, sLinkType:sLINK_PUZZLE});
            aAssetData.push({sType:sTYPE_OBJECT, sLBLinkage:"mcLBPuzzleBlockSlot", sLinkage:"mcLBPuzzleBlockSlot", bRotatable:false, bFlipable:false, sLinkType:sLINK_PUZZLE_SLOT});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyJellyfish1", sLinkage:"mcGameEnemyJellyfish1", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_JELLYFISH_LIGHT});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyJellyfish2", sLinkage:"mcGameEnemyJellyfish2", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_JELLYFISH_MID});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyJellyfish3", sLinkage:"mcGameEnemyJellyfish3", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_JELLYFISH_HIGH});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyEel", sLinkage:"mcGameEnemyEel", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_EEL});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyRock", sLinkage:"mcGameEnemyRock", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uBOSS_GASEOUS_ROCK});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemySponge1", sLinkage:"mcGameEnemySpongeSpit", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_SPONGE_SPIT});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemySponge2", sLinkage:"mcGameEnemySpongeDouble", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_SPONGE_DOUBLE});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemySponge3", sLinkage:"mcGameEnemySpongeWall", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_SPONGE_WALL});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemySeaweed_Up", sLinkage:"mcGameEnemySeaweedPuppet", bRotatable:false, bFlipable:false, sSide:sSIDE_UP, bEnemy:true, sID:Data.uENEMY_SEAWEED});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemySeaweed_Right", sLinkage:"mcGameEnemySeaweedPuppet", bRotatable:false, bFlipable:false, sSide:sSIDE_RIGHT, bEnemy:true, sID:Data.uENEMY_SEAWEED});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemySeaweed_Down", sLinkage:"mcGameEnemySeaweedPuppet", bRotatable:false, bFlipable:false, sSide:sSIDE_DOWN, bEnemy:true, sID:Data.uENEMY_SEAWEED});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemySeaweed_Left", sLinkage:"mcGameEnemySeaweedPuppet", bRotatable:false, bFlipable:false, sSide:sSIDE_LEFT, bEnemy:true, sID:Data.uENEMY_SEAWEED});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemySlug", sLinkage:"mcGameEnemySeaSlug", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uBOSS_SEA_SLUG});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyFish1", sLinkage:"mcGameEnemyLanternFish01", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_LANTERN_CALM});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyFish2", sLinkage:"mcGameEnemyLanternFish02", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_LANTERN_HUNGRY});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyFish3", sLinkage:"mcGameEnemyLanternFish03", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uENEMY_LANTERN_AGGRESSIVE});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyGolem", sLinkage:"mcGameEnemyLavaGolem", bRotatable:false, bFlipable:true, bEnemy:true, sID:Data.uENEMY_LAVAL_GOLEM});
            aAssetData.push({sType:sTYPE_CHARACTER, sLBLinkage:"mcLBEnemyInvader", sLinkage:"mcGameEnemyLavaInvader", bRotatable:false, bFlipable:false, bEnemy:true, sID:Data.uBOSS_LAVA_INVADER});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventGap1", sLinkage:"mcLBEventGap1", bRotatable:false, bFlipable:false, sBlocker:sBLOCKER_NONE, sID:Data.uEVENT_GAP1});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventGap2", sLinkage:"mcLBEventGap2", bRotatable:false, bFlipable:false, sBlocker:sBLOCKER_NONE, sID:Data.uEVENT_GAP2});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventGap3", sLinkage:"mcLBEventGap3", bRotatable:false, bFlipable:false, sBlocker:sBLOCKER_NONE, sID:Data.uEVENT_GAP3});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventTutorial", sLinkage:"mcGameObjectDoorMapBorder", bRotatable:false, bFlipable:false, sBlocker:sBLOCKER_NONE, sID:Data.uEVENT_TUTORIAL});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventIntro", sLinkage:"mcGameObjectDoorMapBorder", bRotatable:false, bFlipable:false, sBlocker:sBLOCKER_NONE, sID:Data.uEVENT_INTRO});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventPuzzleSolved", sLinkage:"mcGameObjectDoorMapBorder", bRotatable:false, bFlipable:false, sBlocker:sBLOCKER_NONE, sID:Data.uEVENT_PUZZLE_SOLVED});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventFullBlock", sLinkage:"mcLBEventFullBlock", bRotatable:false, bFlipable:false, sBlocker:sBLOCKER_FULL});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventHalfBlock", sLinkage:"mcLBEventHalfBlock", bRotatable:true, bFlipable:true, sBlocker:sBLOCKER_HALF});
            aAssetData.push({sType:sTYPE_MISC, sLBLinkage:"mcLBEventRoomBlock", sLinkage:"mcLBEventRoomBlock", bRotatable:false, bFlipable:false, sBlocker:sBLOCKER_NOT_ROOM});
            return;
        }// end function

    }
}
