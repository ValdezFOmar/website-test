const myImage = document.querySelector("img")

//Change image by clicking it
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "images/reimu.png") {
        myImage.setAttribute("src", "images/marisa.png")
        myImage.setAttribute("alt", "Osana Marisa eating.")
    } else {
        myImage.setAttribute("src", "images/reimu.png")
        myImage.setAttribute("alt", "Osana Reimu eating.")
    }
}

let myButton = document.querySelector("button")
let myH1 = document.querySelector("h1")

// sets the user name for display on the title
setUserName = () => {
    const myName = prompt("Please enter your name.")
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myH1.textContent = `Web dev is cool, ${myName}`
    }
}

// if the user name hasn't been set, set it
if (!localStorage.getItem("name")) {
    setUserName()
} else {
    const storedName = localStorage.getItem("name")
    myH1.textContent = `Web dev is cool, ${storedName}`
}

myButton.onclick = () => {setUserName()}