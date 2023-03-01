function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = 'kamień';


let roundNumber = Math.floor(Math.random()* 3 + 1);
console.log('Wylosowana liczba to '+roundNumber);

if(roundNumber == 1){
	computerMove=('kamień');
} else if (roundNumber== 2){
    computerMove=('papier')
} else {
    computerMove=('nozyce')
} 

let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nozyce.');
console.log ('Gracz wspisał: ' + playerInput);
let playerMove= 'nieznany ruch';

if (playerInput =='1'){
    playerMove= 'kamień';
} else if (playerInput=='2'){
    playerMove= 'papier';
} else if ( playerInput=='3'){
    playerMove= 'nozyce';
} 
printMessage ('Twój ruch to: '+playerMove);


let gameOutput = ', to wygrywasz!'

if ( computerMove == 'kamień' && playerMove == 'papier'){
    gameOutput = ', to wygrywasz!';
} else if ( computerMove == 'papier' && playerMove == 'nozyce'){
    gameOutput = ', to wygrywasz!';
} else if ( computerMove == 'nozyce' && playerMove == 'kamień'){
    gameOutput = ', to wygrywasz!';
} else if ( computerMove == 'kamień' && playerMove == 'papier'){
    gameOutput = ', to wygrywasz!';
} else if ( computerMove == 'papier' && playerMove == 'nozyce'){
    gameOutput = ', to wygrywasz!';
} else if ( computerMove == playerMove){
    gameOutput = ', to jest remis!';
} else {
    gameOutput = ', to przegrywasz!'
}
printMessage ('Zagrełem ' + computerMove +'! Jeśli Twój ruch to '+ playerMove + gameOutput);