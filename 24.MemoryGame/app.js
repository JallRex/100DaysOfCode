//https://www.youtube.com/watch?v=lhNdUVh3qCc

document.addEventListener('DOMContentLoaded', () => {

//Array with options

    const cardArray = [
        {
          name: 'fries',
          img: 'img/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'img/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'img/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'img/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'img/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'img/hotdog.png'
        },
        {
          name: 'fries',
          img: 'img/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'img/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'img/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'img/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'img/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'img/hotdog.png'
        }
      ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId =  []
let cardsWon =  []

//Board:
function createBoard(){
    for (let i =0; i< cardArray.length; i++){
        const card = document.createElement('img') //replaced var with const*
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener("click", flipCard)
        grid.appendChild(card)
    }
}

//Check for matches*
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        alert('Mismatch, Try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if ( cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratz'
    }

}

//Flip card
function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}



createBoard()
//End of "DOMcontentLoaded"
})