function openRulesModal() {
    document.getElementById('rulesModal').style.display = 'block';
}

function closeRulesModal() {
    document.getElementById('rulesModal').style.display = 'none';
}



window.onclick = function (event) {
    const modal = document.getElementById('rulesModal');
    if (event.target === modal) {
        closeRulesModal();
    }
};


document.addEventListener('DOMContentLoaded', () => {
    let playerScore = parseInt(localStorage.getItem('playerScore'), 10) || 0;
    let computerScore = parseInt(localStorage.getItem('computerScore'), 10) || 0;
    console.log('Initial Scores - Player Score:', playerScore, 'Computer Score:', computerScore);
    updateScore();

    window.playGame = function (playerChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];


        const result = compareChoices(playerChoice, computerChoice);
        console.log(result);
        if (result === 'You win!') {
            playerScore++;
            console.log(playerScore)
            document.getElementById('nextButton').style.display = 'block';
        } else if (result === 'You lose!') {
            computerScore++;
            console.log(computerScore)
            document.getElementById('nextButton').style.display = 'none';
        }

        localStorage.setItem('playerScore', playerScore);
        localStorage.setItem('computerScore', computerScore);
       
        updateScore();
   
        displayResult(playerChoice, computerChoice, result);
    
    }

    function compareChoices(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function displayResult(player, computer, result) {
        const gameZone = document.getElementById('gameZone');
        const resultZone = document.getElementById('resultZone');
        const playerChoiceImage = document.getElementById('playerChoiceImage');
        const computerChoiceImage = document.getElementById('computerChoiceImage');
       
        gameZone.style.display = 'none';
        resultZone.style.display = 'flex';
   
        

        playerChoiceImage.src = `./assets/${player}.png`;
        computerChoiceImage.src = `./assets/${computer}.png`;

        document.getElementById('playerResultCircle').style.backgroundImage = `url('./assets/${getResultImage(result, 'player')}.png')`;

        document.getElementById('computerResultCircle').style.backgroundImage = `url('./assets/${getResultImage(result, 'computer')}.png')`;

        if (result === 'You win!') {
            applyRingRipple('player',result);
            nextButton.style.display = 'flex';
            console.log("app ring p")
        } else if (result === 'You lose!') {
            applyRingRipple('computer',result);
            console.log("app ring c")
        } else if(result ==="It's a tie!"){
            applyRingRipple('player',result);
            applyRingRipple('computer',result);
            nextButton.style.display = 'none';
           
        }

        const resultText = document.querySelector('.result-text h1');
        resultText.textContent = result;

    }
   
    function applyRingRipple(winner,result) {
        const winnerCircle = document.getElementById(`${winner}ResultCircle`);
       

        const existingRings = document.querySelectorAll('.ring-ripple');
         existingRings.forEach(ring => ring.remove());
        const existingRings2 = winnerCircle.querySelectorAll('.ring-ripple');
        existingRings2.forEach(ring => ring.remove());
        console.log(result);
        if (result !== "It's a tie!") {
        for (let i = 0; i < 3; i++) {
            const ringRipple = document.createElement('div');
            ringRipple.className = 'ring-ripple animate-ripple';
            winnerCircle.appendChild(ringRipple);
        }}

      
    }

    function getResultImage(result, winner) {
        if (result === 'You win!') {
            return winner === 'player' ? 'winbg' : 'loosbg'; 
        } else if (result === "It's a tie!") {
            return 'tiebg'; 
        } else if (result === 'You lose!') {
            return winner === 'computer' ? 'winbg' : 'loosbg'; 
        }
    }

    function updateScore() {
        playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
        computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

        const playerScoreElement = document.getElementById('playerScore');
        const computerScoreElement = document.getElementById('computerScore');

        if (playerScoreElement && computerScoreElement) {
            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;
            console.log('Updated Scores - Player Score:', playerScore, 'Computer Score:', computerScore);
        } else {
            console.error('Score elements not found.');
        }
        console.log('Updated Scores - Player Score:', playerScore, 'Computer Score:', computerScore);
    }

    window.playAgain = function () {
        const gameZone = document.getElementById('gameZone');
        const resultZone = document.getElementById('resultZone');
        
        gameZone.style.display = 'flex';
        resultZone.style.display = 'none';
        const nextButton = document.getElementById('nextButton');
        if (nextButton) {
            nextButton.addEventListener('click', showNextPage);
        }
        
    }


    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', showNextPage);

    function showNextPage() {
        window.location.href = 'winningPage.html';

    }

    window.openRulesModal = openRulesModal;

    window.closeRulesModal = closeRulesModal;

  
    window.onclick = function (event) {
        const modal = document.getElementById('rulesModal');
        if (event.target === modal) {
            closeRulesModal();
        }
    };
   
});

// for winningpage
document.addEventListener('DOMContentLoaded', () => {
    const pAButton = document.getElementById('pAButton');
    pAButton.addEventListener('click', pA);

    function pA() {
        window.location.href = 'index.html';
    }
});