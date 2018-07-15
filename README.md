# PolyominosPuzzle02

### Versiones
12/7/2018 - Version 0.2.0	-	El objetivo ahora es desarrollar una aplicacion que corra en windows y en Android

9/7/2018 - Version 0.1.0	-	Primer version funcional para resolver el problema een tablero 8 x 8.
21/6/2018 - Versión 0.0.2	-	Iniciamos la conversión a un puzzle de pentominos en tablero de 8 x 8.
19/6/2018 - Versión 0.0.1 

### Fuentes
Desarrollado a partir de Polyomino Puzzle & Solver, codigo creado por Simon Hung
Utiliza (por ahora) [KineticJS](http://kineticjs.com).

### Descripcion
Pentominos Puzzle is a one player game. An opportunity for mental exercise and fun at the same time.
What does it consist of?
Hay un tablero cuadrado de 64 celdillas, 8 filas y ocho columnas. Cuatro celdillas se presentan ocupadas. El jugador debe colocar los doce pentominos de forma tal que cubran el resto del tablero.
Cada disposición diferentes de las celdillas ocupadas previamente da lugar a un problema. Los problemas son identificados numéricamente. El jugador puede seguir esa secuencia numérica o elegir los problemas arbitrariamente. Cada problema resuelto le suma puntos a su haber.
En caso de tener dificultades para encontrar la solución el jugador puede solicitar ayuda. Esta consiste en la colocacion de una pieza por parte de la aplicación y le restará un punto al finalizar el problema.
	
### Generalidades
Españolización del original. La utlizaré como master para volver en caso de no funcionar las variantes que se vayan planteando.
El objetivo es crear un puzzle con pentominos en una tablero de 8 x 8 utilizando los doce pentominos y ocupando previamente 4 cuadraditos con cuadróminos o cuatro cuadraditos independientes.

## Funcionamiento de la aplicación
La ocupación de celdas fijas, cudróminos o cuadraditos separados, define diferentes problemas. Estos serán identificados / codificados para tener una secuencia fija para el jugador.
Los problemas se iran desarrollando secuencialmente (o siguiendo el orden que elija el jugador).
Se deberá llevar una tabla de registro donde se guarden los problemas resueltos por el jugador, los puntos obtenidos en cada caso y el total de puntos acumulados.
También debería presentarse una tabla de clasificación general de acuerdo a los puntos obtenidos.

En cada problema el jugador tendrá la posibilidad de solicitar ayuda. Por cada ayuda solicitada se descontará un punto del total posible. Se podrán solicitar hasta una máximo de x ayudas (por ejemplo: 8)
De forma tal que el jugador esté obligado a resolver, al menos, un problema más simple y justifique los puntos que obtenga.

Tabla de clasificación general y tabla de logros personal.

El cuadrómino o los cuadraditos estarán programados previamente. Cada disposición da lugar a un problema diferente; tendrá asignado un número o codigo. Creo que para los jugadores es mejor presentarlos ordenados numericamente.
El jugador podrá seguir la secuencia numérica o elegir los numeros arbitrariamente.


### ----------------------------------
## Internals

Las celdas del tablero estan inicializadas con un cero. 
gBoardState es la variable que guarda el estado de las celdas del tablero: 
	0: libres
	99: ocupadas por la pieza 99


Las soluciones vienen en una clase ()generalmente identificada como result) que tiene
	totalAnswer
	elapsedTime
	solvedBoard: un arreglo de tres dimensiones: solvedBoard[totalAnswer][x][y]
	op


### Etapa preparacion del puzzle

Las funciones que siguen se ejecutan en la etapa preparatoria

####	function createBoard(boardX, boardY)		
	genera / crea un tablero nuevo con sus celdas inicializadas a cero

####	gBoardState = createBoard(SCREEN_BOARD_X, SCREEN_BOARD_Y); //external function
####	clearPolyInsertOrder(); //for hints 
####	randomBlock(gBlockGroup); //external function
####	randomBlockStyle(gBlockGroup); //external function
####	randomPolyInitPos(gBlockGroup.length - numOfFixedBlocks);
	
####	clearFixedBlock();



En averiguacion:
Como se inserta cada poliomino. Donde queda registrado el poliomino utilizado y las celdas ocupadas???


### Referencias

*[Polyomino wiki](https://en.wikipedia.org/wiki/Polyomino)

*[Pentomino wiki](https://en.wikipedia.org/wiki/Pentomino)

*[Tetromino wiki](https://en.wikipedia.org/wiki/Tetromino)

## <a target="_blank" href="http://simonsays-tw.com/web/Polyomino/game/polyomino.html">Polyomino solver</a>

## <a target="_blank" href="http://simonsays-tw.com/web/Polyomino/game/pentomino.puzzle.html">Play Polyomino Puzzle game online</a>

### Referencias citadas en la aplicacion de Simon Hung

Window size and scrolling:
	http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

Manejo de colores
	https://www.w3schools.com/colors/colors_picker.asp
	http://www.colorhexa.com/

block colors: 
	http://en.wikipedia.org/wiki/File:Pentomino_Puzzle_Solutions.svg	  

just for fixed: chrome sets cursor to text while dragging, why?
	http://stackoverflow.com/questions/2745028/chrome-sets-cursor-to-text-while-dragging-why

Solucion problema poliominos: 
	http://godel.hws.edu/xJava/PentominosSolver/index.html

Fuentes del pentomino solver en java:
	http://godel.hws.edu/xJava/PentominosSolver/source/

clear select options reference: 
	http://www.somacon.com/p542.php


