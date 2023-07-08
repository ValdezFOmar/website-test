const firstWord = document.getElementById("firstWord")
const secondWord = document.getElementById("secondWord")
const checkBtn = document.getElementById("checkAnagram")
const anagramResult = document.getElementById("anagramResult")

function isAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }
    const splitWord1 = word1.split("").sort()
    const splitWord2 = word2.split("").sort()
    for (let i = 0; i < splitWord1.length; i++) {
        if (splitWord1[i] !== splitWord2[i]) {
            return false
        }
    }
    return true
}

function displayResult(condition, paragraph) {
    let textResult
    if (condition) {
        paragraph.style.borderColor = "olivedrab"
        paragraph.style.color = "olivedrab"
        textResult = "They are Anagrams! :)"
    } else {
        paragraph.style.borderColor = "sienna"
        paragraph.style.color = "sienna"
        textResult = "They are not anagrams :("
    }
    paragraph.textContent = textResult
}

checkBtn.addEventListener("click", () => {
    if (!firstWord.value || !secondWord.value) {
        alert("You must enter 2 words")
    } else {
        const cond = isAnagram(firstWord.value.toLowerCase(), secondWord.value.toLowerCase())
        displayResult(cond, anagramResult)
    }
})