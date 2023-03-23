let myItems = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
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
    console.log(localStorage.getItem("myItems"))
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myItems = []
    render(myItems)
})