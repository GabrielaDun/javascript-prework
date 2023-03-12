{
  const playGame = function (playerInput){

    const clearMessages = function(){
      document.getElementById('messages').innerHTML = '';
    }

    const printMessage = function (msg){
      const div = document.createElement('div');
      div.innerHTML = msg;
      document.getElementById('messages').appendChild(div);
    }

      /*drawing a random number */
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    console.log ('Komputer wylosowa: ' + randomNumber);

  
    /* translating numbers to words*/

    const playerMove= getMoveName(playerInput);

    function getMoveName(moveId){
        if (moveId ==1){
            return 'kamień';
        } else if (moveId ==2){
            return 'papier';
        } else if (moveId ==3){
            return 'nozyce';
        }
        else {
          printMessage('Nie znam ruchu o id ' + moveId + '.');
            return 'nieznany ruch';
        }
      }


    const displayResult = function (computerMove, playerMove){
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
    console.log('Zagrałam ' + computerMove + ', a Ty ' + playerMove )
    displayResult (computerMove, playerMove);
  }

  document.getElementById('play-rock').addEventListener('click', function (){
      playGame(1); 
  });
  document.getElementById('play-paper').addEventListener('click', function (){
      playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
      playGame(3);
  });
}