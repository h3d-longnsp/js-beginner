let mySave = ["sdxz", "sgsg", "sgww34"]
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    mySave.push(inputEl.value)
    console.log(mySave)
})

let listItems = ""
for (let i=0; i < mySave.length; i++) {
    listItems += "<li>" + mySave[i] + "</li>"
}

ulEl.innerHTML = listItems

