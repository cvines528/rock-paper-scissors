let choices = ['rock', 'paper', 'scissors'];
const computerSelection = computerPlay();
let userScore = 0;
let compScore = 0;

function computerPlay() {
   let randomizer = Math.floor(Math.random() * choices.length);
   let compchoice = choices[randomizer];
   
   return compchoice;
}

function round(playerSelection, computerSelection) {

    if(playerSelection === 'rock') {
        if(computerSelection === 'rock') {
            console.log('its a tie')
        } else if(computerSelection === 'paper') {
            console.log('you lose')
            return compScore += 1;
        } else {
            console.log('you win!')
            userScore += 1;
        }
    } else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            console.log('you win!')
            compScore += 1;
        } else if(computerSelection === 'paper') {
            console.log('its a tie')
        } else {
            console.log('you lose')
            compScore += 1;
        }
    } else if (playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            console.log('you lose')
            compScore += 1
        } else if(computerSelection === 'paper') {
            console.log('you win')
            userScore += 1;
        } else {
            console.log('its a tie')
            
        }
    }
}

function game() {
    
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt('Chose rock, paper, or scissors.');
        round(playerSelection, computerSelection);
        console.log(`user: ${userScore}`);
        console.log(`computer: ${compScore}`);
    }
    if (userScore > compScore) {
        console.log('User Wins!')
    } else if (userScore < compScore) {
        console.log('Computer Wins =(')
    } else {
        console.log('its a tie play another set!')
        game();
    }
}
game()