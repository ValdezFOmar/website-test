const verseChoose = document.querySelector('select')
const poemDisplay = document.querySelector('pre')

function updateDisplay(verse) {
  verse = verse.replace(' ', '').toLowerCase()
  const url = `verses/${verse}.txt`

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      return response.text()
    })
    .then(text => {
      poemDisplay.textContent = text
    })
    .catch(error => {
      poemDisplay.textContent = `Could not fetch verse: ${error}`
    })
}

verseChoose.addEventListener('change', _ => {
  const verse = verseChoose.value
  updateDisplay(verse)
})

const initialValue = "Verse 1"
updateDisplay(initialValue)
verseChoose.value = initialValue