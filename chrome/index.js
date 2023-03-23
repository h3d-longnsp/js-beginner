let mySave = ["sdxz", "sgsg", "sgww34"]
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    mySave.push(inputEl.value)
    console.log(mySave)
})

for (let i=0; i < mySave.length; i++) {
    // ulEl.innerHTML += "<li>" + mySave[i] + "</li>"
    const li = document.createElement("li")
    li.textContent = mySave[i]
    ulEl.append(li)
}



