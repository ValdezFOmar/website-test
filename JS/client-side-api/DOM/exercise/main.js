const input = document.querySelector("input")
const button = document.querySelector("button")
const unList = document.querySelector("ul")

function addItemToList(input, listElement) {
  const text = input.value
  input.value = ""

  const item = document.createElement("li")
  const span = document.createElement("span")
  const itemButton = document.createElement("button")

  item.appendChild(span)
  item.appendChild(itemButton)

  span.textContent = text
  itemButton.textContent = "Delete"

  listElement.appendChild(item)

  itemButton.addEventListener("click", _ => item.remove())
  input.focus()
}

button.addEventListener("click", _ => addItemToList(input, unList))