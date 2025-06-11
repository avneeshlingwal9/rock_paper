function computerChoice(){
    let num = Math.floor(Math.random() * 3)

    switch(num){

        case 0:
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
        
    }
    return "";

}

function humanChoice(){
    
    let choice = prompt("Enter your choice: ");
    return choice.toLowerCase();
}

function playRound(humChoice , compChoice){


    if(humChoice === compChoice){

        console.log("The game is drawn.");
        return 0;
    }
    else if(humChoice === "rock" && compChoice === "paper"){
        console.log("You lose ! Paper beats Rock");
        return -1;
    }

    else if(humChoice === "rock" && compChoice === "scissor"){

        console.log("You win ! Rock beats Scissor");
        return 1;
    }

    else if(humChoice === "paper" && compChoice === "rock"){

        console.log("You Win ! Paper beats Rock");
        return 1;
    }

    else if(humChoice === "paper" && compChoice === "scissor"){

        console.log("You Lose ! Scissor beats Paper");
        return -1;

    }
    else if(humChoice === "scissor" && compChoice === "rock")
{
    console.log("You Lose ! Rock beats Scissor");
    return -1; 
}
else if(humChoice === "scissor" && compChoice === "paper"){

    console.log("You Win ! Scissor beats Paper");
    return 1; 
}
    

}

function playGame(){
    let compWin = 0 , humWin = 0 ; 
    for(let i = 0 ; i < 5 ; i++){
        let humChoice = humanChoice();
        let compChoice = computerChoice();
        let winner = playRound(humChoice , compChoice);
        if(winner === -1){
            compWin++;
        }
        else if(winner === 1){
            humWin++;
        }

    }

    if(compWin === humWin){
        console.log("Game Drawn");
    }

    else if(compWin > humWin){
        console.log("You Lose the game.");
    }
    else{

        console.log("You Won the game.");

    }

}

playGame();