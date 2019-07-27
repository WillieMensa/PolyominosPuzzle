/*	=============================================================================
	Pentomino Puzzle
	archivo: status.js
	6/7/2019

*/

//-----------------------------------------------------
//menu de status
//-----------------------------------------------------
function pantallaStatus() {
//borra la pantalla

console.log('--------- Pantalla Sttus ------------');

clearStageLayer();

hiddenAllButton();
gBoardLayer.destroy();
gBackgroundLayer.destroy();
gMessageLayer.destroy();
gInitLayer.destroy();

HaceStatusLayer();

//------------------------
//	visibleStatusBtn()
//		menuBtn.visible = true;
//		aboutBtn.visible = true;
//		helpBtn.visible = true;

//		menuBtn.disabled=false;
//		helpBtn.disabled=false;
//		aboutBtn.disabled=false;
//--------------------------
	menuBtn.style.visibility='visible';			//	menu ppal

}



//==========================================================================
function	HaceStatusLayer()	{

	//	if (DEBUG)	{	console.log(' en HaceStatusLayer()');	}

	var simpleText = new Kinetic.Text({
		x: gStage.getWidth() / 2,
		y: (gStage.getHeight() * 0.2),
		text: 'STATUS\nLAYER',
		fontSize: SCREEN_X/12,			//	130,
		fontFamily: FONT_NIVEL2,	//	'Calibri',
		fill: '#334D00'
	});

	// to align text in the middle of the screen, we can set the
	// shape offset to the center of the text shape after instantiating it
	simpleText.setOffset({
		x: simpleText.getWidth() / 2
	});


	// add the shapes to the layer
	gStatusLayer.add(simpleText);
	//	console.log('simpleText, agregado');

	//	gStatusLayer.setScale( STAGE_SCALE );	

	gStage.add(gStatusLayer);

};



//--------------------
// visible buttons in status layer
//	function visibleStatusBtn()
//	{
//		menuBtn.visible = true;
//		aboutBtn.visible = true;
//		helpBtn.visible = true;
//	
//		menuBtn.disabled=false;
//		helpBtn.disabled=false;
//		aboutBtn.disabled=false;
//	}


