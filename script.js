
let curr_result = document.querySelector(".current")
let humScore = document.querySelector(".humScore");
let compScore = document.querySelector(".compScore");
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





function playRound(humChoice , compChoice){


    if(humChoice === compChoice){

        curr_result.textContent = "The game is drawn.";
        return 0;
    }
    else if(humChoice === "rock" && compChoice === "paper"){
        curr_result.textContent = "You lose ! Paper beats Rock";
        return -1;
    }

    else if(humChoice === "rock" && compChoice === "scissor"){

        curr_result.textContent = "You win ! Rock beats Scissor";
        return 1;
    }

    else if(humChoice === "paper" && compChoice === "rock"){

        curr_result.textContent = "You Win ! Paper beats Rock";
        return 1;
    }

    else if(humChoice === "paper" && compChoice === "scissor"){

        curr_result.textContent = "You Lose ! Scissor beats Paper";
        return -1;

    }
    else if(humChoice === "scissor" && compChoice === "rock")
    {
        curr_result.textContent = "You Lose ! Rock beats Scissor";
        return -1; 

    }
    else if(humChoice === "scissor" && compChoice === "paper"){

        curr_result.textContent = "You Win ! Scissor beats Paper";
        return 1; 
}}

let buttons = document.querySelectorAll("button");
function extract(e){

    return e.target.value; 
}
let humWin = 0 , comWin = 0 ; 

function playGame(e){

    let humanChoice = e.target.value;

    let compChoice = computerChoice();


    if(humWin < 5 && comWin < 5){

        let res = playRound(humanChoice , compChoice);

        if(res === 1){
            humWin++;
        }
        else if(res === -1){
            comWin++;
        }
    }

    humScore.textContent = humWin;
    compScore.textContent = comWin;

    if(humWin === 5){

        curr_result.textContent = "You Won !";



}
if(comWin === 5){

    curr_result.textContent = "Computer Won !";



}




    

}
buttons.forEach(

    (button) => {
        button.addEventListener("click", playGame);
    }

)



