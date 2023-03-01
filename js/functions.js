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
	printMessage('Kamień');
} else if (roundNumber==2){
    printMessage('Nozyce')
} else {
    printMessage('Papier')
} 
let playerInput = prompt ('Wybierz swój ruch! 1: kamień, 2: papier, 3:nozyce.');
console.log ('Gracz wspisał: ' + playerInput);
let playerMove= 'nieznany ruch';

if (playerInput =='1'){
    playerMove= 'Kamień';
} else if (playerInput=='2'){
    playerMove= 'Nozyce';
} else if ( playerInput=='3'){
    playerMove= 'Papier';
} 
printMessage ('Twój ruch to: '+playerMove);

printMessage ('Zagrełem ' + computerMove +'! Jeśli Twój ruch to '+ playerMove +', to wygrywasz!');

