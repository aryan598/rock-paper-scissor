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
        console.log("You Lose! Paper beats Rock");
    }

    else if (playerChoice === 'paper' && computerChoice === 'scissor'){
        console.log("You Lose! Scissor beats Paper");
    } 
    
    else if (playerChoice === 'scissor' && computerChoice === 'rock'){
        console.log("You Lose! Rock beats Scissor");
    }

    else if (playerChoice === computerChoice){
        console.log("It's a Tie.")
    }

    else {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    }
};

for (let i = 0; i < 5; i++){

    const playerChoice = window.prompt("Enter Your Choice: ").toLowerCase();
    const computerChoice = getComputerChoice();

    console.log(playRound(playerChoice,computerChoice));
}
