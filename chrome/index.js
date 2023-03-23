let myItems = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")

const itemsFromLocalStorage = JSON.parse(localStorage.getItem("myItems"))
// Check if itemsFromLocalStorage is truthy 
if (itemsFromLocalStorage) {
    myItems = itemsFromLocalStorage
    render(myItems)
}

function render(items) {
    let listItems = ""
    for (let i=0; i < items.length; i++) {
        listItems += `<li>
                        <a target="_blank" href="${items[i]}">
                            ${items[i]}
                        </a>
                      </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myItems.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myItems", JSON.stringify(myItems))
    render(myItems)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myItems.push(tabs[0].url)
        localStorage.setItem("myItems", JSON.stringify(myItems))
        render(myItems)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myItems = []
    render(myItems)
})