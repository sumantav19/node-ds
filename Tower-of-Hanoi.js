// Tower of Hanoi is a mathematical puzzle. It consists of three poles and
 // a number of disks of different sizes which can slide onto any poles. The puzzle
 //  starts with the disk in a neat stack in ascending order of size in one pole, 
 //  the smallest at the top thus making a conical shape. The objective of the puzzle
 //   is to move all the disks from one pole (say ‘source pole’) to another pole 
 //   (say ‘destination pole’) with the help of third pole (say auxiliary pole).

// The puzzle has the following two rules:

//       1. You can’t place a larger disk onto smaller disk
//       2. Only one disk can be moved at a time

// We’ve already discussed recursive solution for Tower of Hanoi. We have also seen 
// that, for n disks, total 2n – 1 moves are required.
const Stack = require('./Stack').Stack;
var diskNumber = process.argv[2],
	sourcePole = new Stack(), 
	destinationPole = new Stack(), 
	auxiliaryPole = new Stack();


//put ring in the source Stack
for (var i = diskNumber; i >= 1; i-- ){
	sourcePole.push(diskNumber);
}
sourcePole.printall();


// 1. Calculate the total number of moves required i.e. "pow(2, n)
//    - 1" here n is number of disks.
var numberOfMoves = Math.pow( 2 , diskNumber ) - 1;

var hanoiTower = function( auxiliaryPole, destinationPole, sourcePole, counter, numberOfMoves ){
	// if( counter <= numberOfMoves ){
	// 	destinationPole.push( sourcePole.pop() );
	// 	switch ( counter % 3) {
	// 	//      if i%3 == 0:
	// 	//         legal movement top disk between auxiliary pole 
	// 	//         and destination pole
	// 		case 0 :
	// 			hanoiTower ( auxiliaryPole, destinationPole, sourcePole, counter++, numberOfMoves );
	// 		break;
	// 	//  for i = 1 to total number of moves:
	// 	//      if i%3 == 1:
	// 	// 	legal movement of top disk between source pole and 
	// 	//         destination pole
	// 		case 1 :
	// 			hanoiTower ( sourcePole, destinationPole, auxiliaryPole, counter++, numberOfMoves );
	// 		break;
	// 	//      if i%3 == 2:
	// 	// 	legal movement top disk between source pole and 
	// 	//         auxiliary pole	
	// 		case 2 :
	// 			hanoiTower ( sourcePole, auxiliaryPole, destinationPole, counter++, numberOfMoves );
	// 		break;
	// 	}
	// }
	// destinationPole.printall();
	while( counter < numberOfMoves ){
		swtich (counter%3){
			case 0 : 
				destinationPole.push(auxiliaryPole.pop());
				break;
			case 1 :
				destinationPole.push(sourcePole.pop());
				break;
			case 2 :
				sourcePole.push(auxiliaryPole.pop());

		}
	}
}


debugger;
// 2. If number of disks (i.e. n) is even then interchange destination 
//    pole and auxiliary pole.
if( diskNumber % 2 === 1 ){

	hanoiTower( sourcePole, auxiliaryPole, destinationPole, 1, numberOfMoves );
} else {
	hanoiTower( sourcePole, destinationPole, auxiliaryPole, 1, numberOfMoves );
}