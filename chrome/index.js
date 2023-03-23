let myItems = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

let itemsFromLocalStorage = JSON.parse(localStorage.getItem("myItems"))
// Check if itemsFromLocalStorage is truthy 
if (itemsFromLocalStorage) {
    myItems = itemsFromLocalStorage
    renderItems()
}

inputBtn.addEventListener("click", function() {
    myItems.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myItems", JSON.stringify(myItems))
    renderItems()
    console.log(localStorage.getItem("myItems"))
})

function renderItems() {
    let listItems = ""
    for (let i=0; i < myItems.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myItems[i] + "'>" + myItems[i] + "</a></li>"
        listItems += `<li>
                        <a target="_blank" href="${myItems[i]}">
                            ${myItems[i]}
                        </a>
                      </li>
        `
    }
    ulEl.innerHTML = listItems
}
