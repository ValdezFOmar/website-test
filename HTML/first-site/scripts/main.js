changeImage = (image_element) => {
    const mySrc = image_element.getAttribute("src")
    if (mySrc === "images/reimu.png") {
        image_element.setAttribute("src", "images/marisa.png")
        image_element.setAttribute("alt", "Osana Marisa eating.")
    } else {
        image_element.setAttribute("src", "images/reimu.png")
        image_element.setAttribute("alt", "Osana Reimu eating.")
    }
}

setUserName = (heading) => {
    const myName = prompt("Please enter your name.")
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        heading.textContent = `Web dev is cool, ${myName}`
    }
}

// if the user name hasn't been set, set it
checkUserIsSet = (heading) => {
    if (!localStorage.getItem("name")) {
        setUserName(heading)
    } else {
        const storedName = localStorage.getItem("name")
        heading.textContent = `Web dev is cool, ${storedName}`
    }
}

//Change image by clicking it
const myImage = document.querySelector("img")
myImage.onclick = () => {changeImage(myImage)}

// sets the user name for display on the title
let myButton = document.querySelector("button")
let myH1 = document.querySelector("h1")
myButton.onclick = () => {setUserName(myH1)}

checkUserIsSet(myH1)
