let player = {
    name: "Dami",
    chips: 245
}

let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el") - id
let sumEl = document.querySelector(".sum-el") // class
let cardEl = document.querySelector("#cards-el") // class
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCards() {
    let card = Math.floor(Math.random() * 13) + 1
    if (card === 1)
        return 11
    else if (card > 10)   
        return 10     
    else
        return card
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards = [firstCard, secondCard] // array - ordered list of items
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum 
    cardEl.textContent = "Cards: "
    for (let i=0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    cardEl.textContent
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        // stricly equal
        message = "You've got Blackjack."
        hasBlackJack = true
    } else  {
        message = "You're out of the game."
        isAlive = false
    }
    messageEl.textContent = message   
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let thirdCard = getRandomCards()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}