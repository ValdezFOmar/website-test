const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesList = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg"
]

/* Declaring the alternative text for each image file */
const altList = [
  "Closeup of a human eye",
  "Closeup of a seashell",
  "Closeup of diverse of flowers",
  "Mural of ancient egyptian art",
  "A butterfly posing on a leaf"
]

/* Looping through images */
for (let i = 0; i < imagesList.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imagesList[i]}`);
  newImage.setAttribute('alt', altList[i]);
  thumbBar.appendChild(newImage);
}

/* Changing image on click */
thumbBar.addEventListener("click", (event) => {
  displayedImage.setAttribute('src', event.target.src)
  displayedImage.setAttribute('alt', event.target.alt)
})

/* Wiring up the Darken/Lighten button */
let overlayState = false

btn.addEventListener('click', () => {
  if (overlayState) {
    overlay.style.backgroundColor = 'rgb(0, 0, 0, 0)'
    btn.textContent = 'Darken'
  } else {
    overlay.style.backgroundColor = 'rgb(0, 0, 0, 0.5)'
    btn.textContent = 'Lighten'
  }
  overlayState = !overlayState
})
