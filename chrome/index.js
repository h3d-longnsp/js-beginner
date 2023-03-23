let myItems = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myItems.push(inputEl.value)
    inputEl.value = ""
    renderItems()
})

function renderItems() {
    let listItems = ""
    for (let i=0; i < myItems.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myItems[i] + "'>" + myItems[i] + "</a></li>"
        listItems += `
                        <li>
                            <a target="_blank" href="${myItems[i]}">
                                ${myItems[i]}
                            </a>
                        </li>`
    }
    ulEl.innerHTML = listItems
}
