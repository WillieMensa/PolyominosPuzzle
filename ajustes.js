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

	gConfigLayer.add(simpleText);


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
//	gStatusLayer.destroy();


HaceConfigLayer();

//	visibleStatusBtn()
//	menuBtn.disabled=false;
//	helpBtn.disabled=false;
//	aboutBtn.disabled=false;

//	document.getElementById('ProblemSelect').style.cssText = 
//		"top:" + (STAGE_OFFSET_Y + 0.6 * STAGE_Y) + "px; left:" + 
//		(STAGE_OFFSET_X + 0.33 * STAGE_X) + "px; position: absolute; font:" + (16) + "px roboto white";
//	document.getElementById('ProblemSelect').style.visibility='visible';
//	document.getElementById('ProblemSelect').style.disabled=false;


if (DEBUG) {	console.log('ProblemSelect.style.cssText: ' + document.getElementById('ProblemSelect').style.cssText)}

//	document.getElementById('nroProblema').style.cssText = "font: bold 20px roboto grey";
nroProblema.value = nProblema;
//	document.getElementById('nroProblema').style.value = parseInt(nProblema);
//	document.getElementById('nroProblema').style.defaultValue = nProblema;
//	document.getElementById('nroProblema').style.color = "red";
nroProblema.disabled=false;
nroProblema.visibility='visible';
nroProbBtn.visibility='visible';

if (DEBUG) { console.log('nProblema: ' + nProblema +
	'\nnroProblema.Value: ' + nroProblema.value ); };

//	nroProblema.value = nProblema;
//	document.getElementById('nroProblema').value = nProblema;
menuBtn.style.visibility='visible';			//	menu ppal
//	nroProbBtn.style.visibility='visible';
//	nroProblema.style.visibility='visible';
//	nroProblema.disabled=false;


}




//----------------------------------
// save nro problema to localstorage
//----------------------------------
function setNroProbl() {

var n = document.getElementById('nroProblema').style.value;

	console.log('en setNroProbl()\nnro de problema antes: ' + nProblema + ', ' + n );	
	nProblema = parseInt( document.getElementById('nroProblema').value);	
	console.log('nro de problema fijado: ' + nProblema);

	setStorage("nroProblemaStored", nProblema);
	console.log('nro de problema fijado: ' + nProblema);
}

//-------------------------------------------
// get nro problema from localstorage
//-------------------------------------------
function getNroProbl()
{
	//	let nCual = parseInt(getStorage("nroProblemaStored"));
	let nCual = getStorage("nroProblemaStored");

	if(isNaN(nCual) || nCual < 1 || nCual > CANTPROBLEMAS )
	{
		nCual = 1;
	}

	//	if (DEBUG) { 	console.log('nCual: ' + nCual ); 	};

	return nCual

	//		initBoardSize(boardSize, level); //minimum board
}



