//	kinetic_grilla.js
//	grilla para depurar con kinetic.js
//	solo para depurar
//	20/7/2019

////////////////////////////////////////////////////////////////////////////////////////

function DibujaGrilla() {

	var	screenWidth = document.body.clientWidth;
	var	screenHeight = document.body.clientHeight;

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	c.width	 = 0.9 * screenWidth ;
	c.height = 0.9 * screenHeight;

	ctx.moveTo(0, 0);
	ctx.lineTo(200, 100);
	ctx.stroke();


}