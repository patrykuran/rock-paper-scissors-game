var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame); //newGame to funkcja? gdzie ją definujemy, uzywamy? //

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { 
	playerPick('rock')   // playerPick to funkcja z linii 68? //
});
pickPaper.addEventListener('click', function() { 
	playerPick('paper')
});
pickScissors.addEventListener('click', function() {
	playerPick('scissors') 
});

var gameState = 'notStarted' // ended , started //  // co to za zmienna? object? //
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
	switch(gameState) {
		case 'started':
				newGameElem.style.display = 'none';
				pickElem.style.display = 'block';
				resultsElem.style.display = 'block';
			break;
		case 'ended':
				newGameBtn.innerText = 'Jeszcze raz';
		case 'notStarted':
		default:
				newGameElem.style.display = 'block';
				pickElem.style.display = 'none';
				resultsElem.style.display = 'none';
	}
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza'); //'imię gracza' to placeholder?//
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    	setGamePoints();
  }

}

function playerPick(playerPick) {  // ten drugi playerPick odwołuje się do "playerPick('rock')/('paper')/('scissors'), linia 10, 13, 16? //
    console.log(playerPick); // po wpisaniu dalszego kodu juz w konsoli nie wyświetla, czemu? //
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)]; // nawiasem kwadratowym wyciągamy index z computerPick? / dlaczego *3? //
} // >0,3 da w zaokrągleniu 0; >0,5< da 1; 0,51< da 2 ? //

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

	var winnerIs = 'player';

	if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
        playerResultElem.innerHTML = "Remis!";
        computerResultElem.innerHTML = "Remis!";
    } else if (
    	(computerPick == 'rock' &&  playerPick == 'scissors') ||
    	(computerPick == 'scissors' &&  playerPick == 'paper') ||
    	(computerPick == 'paper' &&  playerPick == 'rock')) {

    	winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
    	playerResultElem.innerHTML = "Wygrana!";
    	player.score++;
    } else if (winnerIs == 'computer') {
    	computerResultElem.innerHTML = "Wygrana!";
    	computer.score++;
    }

    setGamePoints();
    gameFinished();
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

console.log(player.score, computer.score);

function gameFinished() {
    if (player.score == 10) {
        alert("Wygrał " + player.name + "!")
    } else if (computer.score == 10) {
        alert("Wygrał komputer!")
    }
    gameState = 'notStarted'
    setGameElements();
    }
}
