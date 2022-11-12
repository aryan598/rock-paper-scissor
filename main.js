function getComputerChoice(){
    choice = Math.floor(Math.random()*3);

    switch(choice){
        case 0:
            return 'rock'.toLowerCase();
            break;
        case 1:
            return 'paper'.toLowerCase();
            break;
        case 2:
            return 'scissor'.toLowerCase();
            break;
    };
};

function playRound(playerChoice, computerChoice){
    
    if (playerChoice === 'rock' && computerChoice === 'paper'){
        document.write("You Lose! Paper beats Rock");
    }

    else if (playerChoice === 'paper' && computerChoice === 'scissor'){
        document.write("You Lose! Scissor beats Paper");
    } 
    
    else if (playerChoice === 'scissor' && computerChoice === 'rock'){
        document.write("You Lose! Rock beats Scissor");
    }

    else if (playerChoice === computerChoice){
        document.write("It's a Tie.")
    }

    else {
        document.write(`You Win! ${playerChoice} beats ${computerChoice}`);
    }
    
    return playerChoice,computerChoice;
};



for (let i = 0; i < 5; i++){

    const playerChoice = window.prompt("Enter Your Choice: ").toLowerCase();
    const computerChoice = getComputerChoice();

    playRound(playerChoice,computerChoice);

    
}
