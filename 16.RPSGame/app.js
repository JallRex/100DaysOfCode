

//Function nightmare! 
//Attempt at building without guidance or plan, testing as much as possible


const options = ["rock", "paper", "scissor"]
let pcChoice = 0
let playerChoice = 0
let pScore = 0
let pcScore = 0


const playerScore = document.querySelector(".p-Score")
const pc = document.querySelector(".pc")
const btnTxt = document.querySelector(".btnTxt")

const rocky = document.querySelector(".rock-btn").addEventListener("click",rock)
const papery = document.querySelector(".paper-btn").addEventListener("click",paper)
const scissory = document.querySelector(".scissor-btn").addEventListener("click",scissor)
const reset = document.querySelector(".resetScore").addEventListener("click",resetScore)

function rock(){
    //Rock choice
    maths()
    playerChoice = 0
    logging()
    check()
    changeScore()
    tryAgain()
}

function paper (){
    //Paper choice
    maths()
    playerChoice = 1
    logging()
    check()
    changeScore()
    tryAgain()
}

function scissor(){
    //Scissor choice
    maths()
    playerChoice = 2
    check()
    logging()
    changeScore()
    tryAgain()
}

function changeScore(){
    playerScore.innerHTML = pScore + " <s><b>|</b></s> " + pcScore
    pc.innerHTML = options[pcChoice]
}

function resetScore(){
    pScore = 0
    pcScore = 0
    changeScore()
    pc.innerHTML = ""
    tryAgain()
    
}

function tryAgain(){
    if (playerChoice === pcChoice){

    btnTxt.innerHTML = "Try again"
    }
    if (playerChoice !== pcChoice){
        btnTxt.innerHTML = "Choose:"
    }
}

function maths(){
    pcChoice = Math.floor(Math.random() * options.length)
    // pcChoice = 2
}


function check(){
    // Player selects the same as PC*
    if(playerChoice === pcChoice){
        tryAgain();
    }
    // Player selects Rock *
    if(playerChoice === 0 && pcChoice === 1){
        pcScore ++
        
    }
    if(playerChoice === 0 && pcChoice === 2){
        pScore ++
        
    }
    // Player selects Paper *
    if(playerChoice === 1 && pcChoice === 0){
        pScore ++
        
    }
    if(playerChoice === 1 && pcChoice === 2){
        pcScore ++
        
    }
    // Player selects Scissor *
    if(playerChoice === 2 && pcChoice === 0){
        pcScore ++
        
    }
    if(playerChoice === 2 && pcChoice === 1){
        pScore ++
        
    }

}


//Debugging:

function logging(){
    // console.log("........")
    // console.log("Player:  " + options[playerChoice])
    // console.log("PC:  " + options[pcChoice])
    // console.log("------")
}






