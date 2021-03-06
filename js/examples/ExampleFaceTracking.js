if(nxtjs == null) {

	throw "ExampleFaceTracking.js needs a fully initialized Beyond Reality Face Nxt SDK. Make sure to follow the implementation examples of the JS version of the SDK.";

}

if(nxtjs.ExampleBase == null) {

	throw "ExampleFaceTracking.js uses ExampleBase as base class. Make sure to follow the implementation examples of the JS version of the SDK.";

}

if(createjs == null) {

	throw "ExampleFaceTracking.js uses CreateJS to display its content. Make sure to follow the implementation examples of the JS version of the SDK.";

}



/**

 * Called onload of body.

 */

 var _stage;
 var canvasf;
 var ctxf;
 var pointInts;

 var bitmapWidth = 251;

 var bitmapHeight = 313;

var maskID = 0;
var hatID = 0;
var mustacheID = 0;
var spectacleID = 0;
var tieID = 0;
var faceShape;

var finalX = 0;
var finalY = 0;
var finalW = 0;
var finalH = 0;

var mustacheFinalX = 0;
var mustacheFinalY = 0;
var mustacheFinalW = 0;
var mustacheFinalH = 0;

var hatFinalX = 0;
var hatFinalY = 0;
var hatFinalW = 0;
var hatFinalH = 0;

var spectacleFinalX = 0;
var spectacleFinalY = 0;
var spectacleFinalW = 0;
var spectacleFinalH = 0;

var tieFinalX = 0;
var tieFinalY = 0;
var tieFinalW = 0;
var tieFinalH = 0;

var roundedX = 0;
var roundedY = 0;
var roundedW = 0;
var roundedH = 0;

function calcFinalHatValues(){
	
	switch(hatID){
		case 1:
			hatFinalW = roundedW * 1.75;
			hatFinalH = roundedH;
			hatFinalX = roundedX  - (hatFinalW/5);
			hatFinalY = roundedY - hatFinalH + 5;
		break;
		default:
			hatFinalW = roundedW * 1.5;
			hatFinalH = roundedH * 1.5;
			hatFinalX = roundedX  - (hatFinalW/4);
			hatFinalY = roundedY - hatFinalH + 5;
	}
	
}

function calcFinalMustacheValues(){
	
	switch(mustacheID){
		default:
			mustacheFinalW = roundedW;
			mustacheFinalH = roundedH;
			mustacheFinalX = faceShape.points[41].x - (mustacheFinalW/2);
			mustacheFinalY = faceShape.points[41].y - 3;
	}
		
}

function calcFinalSpectacleValues(){
	
	switch(spectacleID){
		default:
			spectacleFinalW = roundedW;
			spectacleFinalH = roundedH;
			spectacleFinalX = faceShape.points[0].x - (spectacleFinalW/2);
			spectacleFinalY = faceShape.points[0].y + 5;
	}
		
}

function calcFinalTieValues(){
	
	switch(tieID){
		default:
			tieFinalW = roundedW;
			tieFinalH = roundedH;
			tieFinalX = faceShape.points[7].x - (tieFinalW/2);
			tieFinalY = faceShape.points[7].y - (tieFinalH/2);
	}
		
}

function calcFinalMaskValues(){
	switch(maskID){
		case "0":
			finalX = roundedX  * 0.9;
			finalY = roundedY * 0.75;
			finalW = roundedW * 1.25;
			finalH = roundedH * 1.25;		
		break;

		case "1":
			finalX = roundedX * -0.75;
			finalY = roundedY * 0.75;
			finalW = roundedW * 1.75;
			finalH = roundedH * 1.75;		
		break;
		
		case "2":
			finalX = roundedX;
			finalY = roundedY;
			finalW = roundedW;
			finalH = roundedH;		
		break;
		
		case "3":
			finalX = roundedX;
			finalY = roundedY;
			finalW = roundedW;
			finalH = roundedH;		
		break;
			
	}
}

function changeMask(){
	maskID = $("#maskSelection").val();
}

function changeHat(hatNumber){
	hatID = hatNumber;
}

function changeMustache(mustacheNumber){
	mustacheID = mustacheNumber;
}

function changeSpectacle(spectacleNumber){
	spectacleID = spectacleNumber;
}

function changeTie(tieNumber){
	tieID = tieNumber;
}

function getFaceOuterPath(faceshape){
	var buffer = 30;
	var outerFacePoints = [{x:-1, y:-1}, {x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1},{x:-1, y:-1}];
	
	outerFacePoints[0].x = faceShape.points[0].x;
	outerFacePoints[0].y = faceShape.points[0].y;
	outerFacePoints[1].x = faceShape.points[1].x;
	outerFacePoints[1].y = faceShape.points[1].y;
	outerFacePoints[2].x = faceShape.points[2].x;
	outerFacePoints[2].y = faceShape.points[2].y;
	outerFacePoints[3].x = faceShape.points[3].x;
	outerFacePoints[3].y = faceShape.points[3].y;
	outerFacePoints[4].x = faceShape.points[4].x;
	outerFacePoints[4].y = faceShape.points[4].y;
	outerFacePoints[5].x = faceShape.points[5].x;
	outerFacePoints[5].y = faceShape.points[5].y;
	outerFacePoints[6].x = faceShape.points[6].x;
	outerFacePoints[6].y = faceShape.points[6].y;
	outerFacePoints[7].x = faceShape.points[7].x;
	outerFacePoints[7].y = faceShape.points[7].y;
	outerFacePoints[8].x = faceShape.points[8].x;
	outerFacePoints[8].y = faceShape.points[8].y;
	outerFacePoints[9].x = faceShape.points[9].x;
	outerFacePoints[9].y = faceShape.points[9].y;
	outerFacePoints[10].x = faceShape.points[10].x;
	outerFacePoints[10].y = faceShape.points[10].y;
	outerFacePoints[11].x = faceShape.points[11].x;
	outerFacePoints[11].y = faceShape.points[11].y;
	outerFacePoints[12].x = faceShape.points[12].x;
	outerFacePoints[12].y = faceShape.points[12].y;
	outerFacePoints[13].x = faceShape.points[13].x;
	outerFacePoints[13].y = faceShape.points[13].y;
	outerFacePoints[14].x = faceShape.points[14].x;
	outerFacePoints[14].y = faceShape.points[14].y;
	outerFacePoints[15].x = faceShape.points[15].x;
	outerFacePoints[15].y = faceShape.points[15].y-buffer;
	outerFacePoints[16].x = faceShape.points[16].x;
	outerFacePoints[16].y = faceShape.points[16].y-buffer;
	outerFacePoints[17].x = faceShape.points[17].x;
	outerFacePoints[17].y = faceShape.points[17].y-buffer;
	outerFacePoints[18].x = faceShape.points[23].x;
	outerFacePoints[18].y = faceShape.points[23].y-buffer;
	outerFacePoints[19].x = faceShape.points[22].x;
	outerFacePoints[19].y = faceShape.points[22].y-buffer;
	outerFacePoints[20].x = faceShape.points[21].x;
	outerFacePoints[20].y = faceShape.points[21].y-buffer;
	outerFacePoints[21].x = faceShape.points[0].x;
	outerFacePoints[21].y = faceShape.points[0].y;
		
	return outerFacePoints;
}



function initExample() {

	

	// Setup CreateJS: uses the canvas with id '_stage'.

	// See ExampleBase.js

	

	_stage = nxtjs.initCreateJS("_stage");

	_stage.addChild(new nxtjs.ExampleFaceTracking());

	_stage.compositeOperation = "darken";
	
	canvasf = document.getElementById("face");
	ctxf = canvasf.getContext('2d');

}



(function(lib) {



	/**

	 * Uses super class ExampleBase to init BRF, Camera and GUI.

	 * 

	 * Sets tracking mode BRFMode.FACE_TRACKING and its params.

	 * Does not update the candide properties (see onReadyBRF).

	 * 

	 * (And please, don't hide the BRF logo. If you need a 

	 * version without logo, just email us. Thanks!)

	 * 

	 * @author Marcel Klammer, Tastenkunst GmbH, 2014

	 */

	(lib.ExampleFaceTracking = function(

			cameraResolution, brfResolution, brfRoi,

			faceDetectionRoi, screenRect, maskContainer, webcamInput

			) {



		var _this = this;

		var _super = lib.ExampleFaceTracking._super;

		

		

		//image = new Image();

		//console.log("adding image");

    	//image.onload = function(evt){bitmap = new createjs.Bitmap(evt.target);

		//		 								bitmap.regX = 0;

		//										bitmap.regY = 0;
		//										bitmap.alpha = 0;

		//										_stage.addChild(bitmap);

		//										_stage.update();}

        //         image.src ="media/images/FrankensteinHead.png";

		_stage.update();

		

		maskContainer = true;

		webcamInput = true;



		/**

		 * We use the Rectangles that are preselected in ExampleBase.

		 */

		_super.constructor.call(this, cameraResolution, brfResolution, brfRoi,

			faceDetectionRoi, screenRect, maskContainer, webcamInput);



		/**

		 * When BRF is ready, we can set its params and BRFMode.

		 * 

		 * In this example we want to do face tracking, 

		 * so we set tracking mode to BRFMode.FACE_TRACKING.

		 */

		_this.onReadyBRF = function(event) {



			// The following settings are completely optional.

			// BRF is by default set up to do the complete tracking

			// (including candide and its actionunits).

			_this._brfManager.setFaceDetectionVars(5.0, 1.0, 14.0, 0.06, 6, false);

			_this._brfManager.setFaceDetectionROI(

					_this._faceDetectionRoi.x, _this._faceDetectionRoi.y,

					_this._faceDetectionRoi.width, _this._faceDetectionRoi.height);

			_this._brfManager.setFaceTrackingVars(80, 500, 1);



			// If you don't need 3d engine support or don't want to use

			// the candide vertices, you can turn that feature off, 

			// which saves CPU cycles.

			_this._brfManager.candideEnabled = false;

			_this._brfManager.candideActionUnitsEnabled = false;



			// Face Tracking? Face Tracking!

			_this._brfManager.mode = lib.BRFMode.FACE_TRACKING;

			

			// Set BRF ready and start, if camera is ready, too.

			_this._brfReady = true;

			_this.start();

		};



		_this.updateGUI = function() {



			_this._draw.clear();

			//bitmap.regX = 9999;

			//bitmap.regY = 9999;

			// Get the current BRFState and faceShape.

			var state = _this._brfManager.state;

			faceShape = _this._brfManager.faceShape;



			// Draw BRFs region of interest, that got analysed:

			lib.DrawingUtils.drawRect(_this._draw, _this._brfRoi, false, 1.0, "#acfeff", 1.0);



			if(state == lib.BRFState.FACE_DETECTION) {

				// Last update was face detection only,

				// draw the face detection roi and lastDetectedFace:

				lib.DrawingUtils.drawRect(_this._draw, _this._faceDetectionRoi, false, 1.0, "#ffff00", 1.0);



				// And draw the one result, that got calculated from lastDetectedFaces.

				var rect = _this._brfManager.lastDetectedFace;

				if(rect != null && rect.width != 0) {

					lib.DrawingUtils.drawRect(_this._draw, rect, false, 3.0, "#ff7900", 1.0);

				}

			} else if(state == lib.BRFState.FACE_TRACKING_START || state == lib.BRFState.FACE_TRACKING) {

				// The found face rectangle got analysed in detail

				// draw the faceShape and its bounds:

				//lib.DrawingUtils.drawTriangles(_this._draw, faceShape.faceShapeVertices, faceShape.faceShapeTriangles);

				//lib.DrawingUtils.drawTrianglesAsPoints(_this._draw, faceShape.faceShapeVertices);

				//lib.DrawingUtils.drawRect(_this._draw, faceShape.bounds);

					//for(var i=0;i<faceShape.points.length;i++){

						//pointInts[i].x = faceShape.points[i].x;

						//pointInts[i].y = faceShape.points[i].y;

					//}

				 //bitmap.regX = faceShape.points[0].x + faceShape.translationX + faceShape.scale;

				 //bitmap.regY = faceShape.points[0].y + faceShape.translationY + faceShape.scale;

				 //bitmap.regX = -.185 * faceShape.points[0].x;

				 //bitmap.regY = -.185 * faceShape.points[0].y;

				 //bitmap.scaleX = faceShape.bounds.width/bitmapWidth;
				 //bitmap.scaleX = faceShape.scale/180;
				 //bitmap.scaleY = faceShape.scale/180;

				 //bitmap.scaleY = faceShape.bounds.height/bitmapHeight;

				 //bitmap.regX = -faceShape.points[0].x - bitmapWidth/2 +40; 

				 //bitmap.regY = -faceShape.points[0].y + bitmapHeight/2 -30;
				 
				 //bitmap.regX = -faceShape.points[0].x - bitmapWidth/2; 
				 //bitmap.regY = -faceShape.points[0].y + bitmapHeight/2;
				 
				 //bitmap.x = faceShape.points[1].x; 
				 //bitmap.y = faceShape.points[30].y;
				 //trace();
				 //bitmap.regX = 0;
				 //bitmap.regY = 0;
				 //bitmap.alpha=1;
				 //bitmap.scaleX = faceShape.points[39].x-faceShape.points[1].x/bitmap.getBounds().width;
				 //bitmap.scaleY = faceShape.points[39].y-faceShape.points[30].y/bitmap.getBounds().height;
				 //bitmap.rotation = faceShape.rotationX;

				 //_stage.update();

				//var sx = 0;
				//var sy = 0;
				//var sWidth = 454;
				//var sHeight = 512;
				//var dx = bitmap.x;
				//var dy = bitmap.y;
				//var dWidth = ;
				//var dHeight = ;

				//_this._draw.drawImage(bitmap, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
				//_this._draw.drawImage(bitmap,dx,dy);
				
				/*for (var key in _this._draw) {
  					if (_this._draw.hasOwnProperty(key)) {
    					console.log(key + " -> " + _this._draw[key]);
  					}
				}*/
				
				
				
				var canvasg = document.getElementById("_mirror");
				var ctx = canvasg.getContext('2d');
				roundedX = Math.round(faceShape.bounds.x);
				roundedY = Math.round(faceShape.bounds.y);
				roundedW = Math.round(faceShape.bounds.width);
				roundedH = Math.round(faceShape.bounds.height);
				
				calcFinalMaskValues();
			
				ctxf.save();
			
				ctxf.clearRect(0,0,600,500);
				ctxf.fillStyle = "#ffff00";
				ctxf.globalAlpha = 1;
				ctxf.globalCompositeOperation = "original";
				
				var faceOuterPath = getFaceOuterPath(faceShape);
				
				ctxf.beginPath();
				ctxf.moveTo(faceOuterPath[0].x,faceOuterPath[0].y);
				
				for(var i = 1;i<faceOuterPath.length; i++){
					ctxf.lineTo(faceOuterPath[i].x,faceOuterPath[i].y);	
				}
				
				ctxf.clip();
				
				ctxf.drawImage(document.getElementById("_stage"),faceShape.bounds.x,faceShape.bounds.y,faceShape.bounds.width,faceShape.bounds.height, 300 - (faceShape.bounds.width/2) - faceShape.bounds.x , 240-(faceShape.bounds.height/2) - faceShape.bounds.y,faceShape.bounds.width,faceShape.bounds.height);
				//ctxf.drawImage(document.getElementById("_stageUnFiltered"), -faceShape.bounds.x, -faceShape.bounds.y);
				ctxf.drawImage(document.getElementById("_stage"), 0, 0);
			
				ctxf.restore();
			
				canvasf.style.left = (300 - (faceShape.bounds.width/2) - faceShape.bounds.x) +"px";
				canvasf.style.top = (240-(faceShape.bounds.height/2) - faceShape.bounds.y) + 50 + "px";
				
				canvasg.style.left = (300 - (faceShape.bounds.width/2) - faceShape.bounds.x) +"px";
				canvasg.style.top = (240-(faceShape.bounds.height/2) - faceShape.bounds.y) + 50 + "px";
				
				//clear canvas
				ctx.clearRect(0,0,600,500);
				ctx.fillStyle = "#ffff00";
				ctx.globalAlpha = 1;
				ctx.globalCompositeOperation = "orginal";
				
				//Hat
				if(hatID > 0){
					calcFinalHatValues();
					var hat = document.getElementById("hat" + hatID);//scale y position (.75) and height (1.25) to better fit face
					ctx.drawImage(hat,roundedX - roundedW/2, roundedY - roundedH*1.4, roundedW*2, (roundedW*2/hat.width) *hat.height);
				}
				
				//Mustache
				if(mustacheID > 0){
					calcFinalMustacheValues();
					var mustache = document.getElementById("mustache" + mustacheID);//scale y position (.75) and height (1.25) to better fit face
					ctx.drawImage(mustache,mustacheFinalX, mustacheFinalY - ((roundedW/mustache.width)*mustache.height/3), mustacheFinalW, (roundedW/mustache.width)*mustache.height);
				}
				
				//Spectacle
				if(spectacleID > 0){
					calcFinalSpectacleValues();
					var spectacle = document.getElementById("spectacle" + spectacleID);//scale y position (.75) and height (1.25) to better fit face
					ctx.drawImage(spectacle,spectacleFinalX +(roundedW/2), spectacleFinalY -(roundedH/2), spectacleFinalW, spectacle.height * (spectacleFinalW/spectacle.width));
				}
				
				//Tie
				if(tieID > 0){
					calcFinalTieValues();
					var tie = document.getElementById("tie" + tieID);//scale y position (.75) and height (1.25) to better fit face
					ctx.drawImage(tie,tieFinalX -(roundedW/2), tieFinalY + (roundedH/2), roundedW*2, (roundedW*2/tie.width)*tie.height);
				}
			}

		};



	}).inheritsFrom(lib.ExampleBase);



})(nxtjs);