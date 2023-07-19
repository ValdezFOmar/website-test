// Modifieing elements
const link = document.querySelector("a")
link.textContent = "Mozilla Developer Network"
link.href = "https://developer.mozilla.org"

// Creating and appending elements
const sect = document.querySelector("section")
const para = document.createElement("p")
para.textContent = "We hope you enjoyed the ride."
sect.appendChild(para)

// Creating text nodes and appending them to a <p> element
const text = document.createTextNode(" — the premier source for web development knowledge.")
const linkPara = document.querySelector("p")
linkPara.appendChild(text)

// cloning and appending a element
const newLinkPara = linkPara.cloneNode(true)
sect.appendChild(newLinkPara)

// Removing elements
// sect.removeChild(linkPara)
// linkPara.remove()


// applying CSS styles

// inline styles
function CSSStyles() {
  para.style.color = "white";
  para.style.backgroundColor = "black";
  para.style.padding = "10px";
  para.style.width = "250px";
  para.style.textAlign = "center";
}

// applying a class
para.setAttribute("class", "highlight");
