// document.getElementById("count-elem").innerText = 5

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(count)

// let myAge = 23
// let ratio = 7
// let dogAge = myAge * ratio
// console.log(dogAge)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    count = 0
    countEl.textContent = 0
}