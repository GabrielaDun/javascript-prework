function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

  /*drawing a random number */
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
console.log ('Komputer wylosowa: ' + randomNumber);

let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nozyce.');
console.log ('Gracz wspisał: ' + playerInput);

/* translating numbers to words*/
function getMoveName(MoveId){
    if(MoveId == 1){
      return 'kamień';
    } else if (MoveId ==2){
        return 'papier';
    } else if (MoveId ==3){
        return "nozyce"
    }
    else {
      printMessage('Nie znam ruchu o id ' + MoveId + '.');
      return 'nieznany ruch';
    }
  }
let playerMove= getMoveName(playerInput);



function displayResult (computerMove, playerMove){
    printMessage('Zagrałam ' + computerMove + ', a Ty ' + playerMove);
  
    if(computerMove == 'kamień' && playerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if (computerMove=='papier' && playerMove == 'nozyce'){
      printMessage('Ty wygrywasz!');
    }  else if (computerMove=='nozyce' && playerMove=='kamień'){
      printMessage('Ty wygrywasz!');
    } else if ( computerMove == playerMove){
      printMessage (' to mamy remis!');
    } else {
       printMessage ( 'Tym razem przegrywasz!')
    }
}
console.log('Zagrałam' + computerMove + ', a Ty ' + playerMove + displayResult(computerMove, playerMove))