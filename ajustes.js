/*	=============================================================================
	Pentomino Puzzle
	archivo: ajustes.js
	6/7/2019

*/

//-------------------------------------------------------------------
function HaceConfigLayer(){
	//	if (DEBUG){console.log(' en HaceConfigLayer() ');}

	var simpleText = new Kinetic.Text({
		x: (gStage.getWidth() * 0.4),
		y: (gStage.getHeight() * 0.2),
		text: 'AJUSTES',
		fontSize: SCREEN_X/12,			//	130,
		fontFamily: FONT_NIVEL2,	//	'Calibri',
		fill: '#334D00'
	});

	// to align text in the middle of the screen, we can set the
	// shape offset to the center of the text shape after instantiating it
	//	simpleText.setOffset({
	//		x: simpleText.getWidth() / 2
	//	});


	// add the shapes to the layer
	gConfigLayer.add(simpleText);
	//	console.log('simpleText, agregado');


	gStage.add(gConfigLayer);

};



function haceAjustes() {
//-----------------------------------------------------
//menu de status
//-----------------------------------------------------

//	console.clear();
console.log('--------- haciendo Ajustes ------------');


hiddenAllButton();

//	gStage
gBoardLayer.destroy();
gBackgroundLayer.destroy();
gMessageLayer.destroy();

gInitLayer.destroy();

gHelpLayer.destroy();
gAboutLayer.destroy();
gStatusLayer.destroy();


HaceConfigLayer();

//	visibleStatusBtn()
//	menuBtn.disabled=false;
//	helpBtn.disabled=false;
//	aboutBtn.disabled=false;

menuBtn.style.visibility='visible';			//	menu ppal
nroProbBtn.style.visibility='visible';

document.getElementById('ProblemSelect').style.visibility='visible';

if (DEBUG) { console.log('nProblema: ' + nProblema ); };

document.getElementById('nroProblema').value = nProblema;
document.getElementById('nroProblema').style.visibility='visible';
//	document.getElementById('nroProblema').disabled=false;


}




//----------------------------------
// save nro problema to localstorage
//----------------------------------
function setNroProbl() {

	console.log('en setNroProbl()\nnro de problema antes: ' + nProblema);	
	nProblema = parseInt(document.getElementById('nroProblema').value);	
	setStorage("nroProblema", nProblema);
	console.log('nro de problema fijado: ' + nProblema);
}

//-------------------------------------------
// get nro problema from localstorage
//-------------------------------------------
function getNroProbl()
{
	let nCual = parseInt(getStorage("nroProblema"));

	if(isNaN(nCual) || nCual < 1 || nCual > CANTPROBLEMAS )
	{
		nCual = 1;
	}

	//	if (DEBUG) { 	console.log('nCual: ' + nCual ); 	};

	return nCual

	//		initBoardSize(boardSize, level); //minimum board
}



