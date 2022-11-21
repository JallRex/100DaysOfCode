

//dummy code


const options = ["rock", "paper", "scissor"]
let pcChoice = 0
let playerChoice = 0
let pScore = 0
let pcScore = 0


const playerScore = document.querySelector(".p-Score")
const pc = document.querySelector(".pc")

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
}

function paper (){
    //Paper choice
    maths()
    playerChoice = 1
    logging()
    check()
    changeScore()
}

function scissor(){
    //Scissor choice
    maths()
    playerChoice = 2
    check()
    logging()
    changeScore()
}

function changeScore(){
    playerScore.innerHTML = "Player score: " + pScore + " :: " + "PC Score: " + pcScore
    pc.innerHTML = "PC selected: " + options[pcChoice]
}

function resetScore(){
    pScore = 0
    pcScore = 0
    changeScore()
}


function maths(){
    pcChoice = Math.floor(Math.random() * options.length)
    // pcChoice = 2
}


function check(){
    // Player selects the same as PC*
    if(playerChoice === pcChoice){
        console.log("Failed, both selected the same value")
        
    }
    // Player selects Rock *
    if(playerChoice === 0 && pcChoice === 1){
        console.log("Player Looses")
        pcScore ++
        
    }
    if(playerChoice === 0 && pcChoice === 2){
        console.log("Player Wins")
        pScore ++
        
    }
    // Player selects Paper *
    if(playerChoice === 1 && pcChoice === 0){
        console.log("Player wins")
        pScore ++
        
    }
    if(playerChoice === 1 && pcChoice === 2){
        console.log("Player Looses")
        pcScore ++
        
    }
    // Player selects Scissor *
    if(playerChoice === 2 && pcChoice === 0){
        console.log("Player Looses")
        pcScore ++
        
    }
    if(playerChoice === 2 && pcChoice === 1){
        console.log("Player wins")
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

// add score to the page
// fix css stuff!
// add PC choice after player selected
// "play" button that unhides rock, paper, scissor
// Add hide / unhide to reset button
// Add alert?

//remove console.log(s)