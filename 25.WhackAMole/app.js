//https://www.youtube.com/watch?v=lhNdUVh3qCc&t=699s



const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null



function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')

    })
    let ranndomPosition = square[Math.floor(Math.random() * 9)]
    ranndomPosition.classList.add('mole')

hitPosition = ranndomPosition.id

}

square.forEach(id => {
    id.addEventListener("mouseup", () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})


function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}
moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game over! Results: " + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)