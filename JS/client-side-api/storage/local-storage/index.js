const rememberDiv = document.querySelector('.remember')
const forgetDiv = document.querySelector('.forget')
const form = document.querySelector('form')
const nameInput = document.querySelector('#enter-name')
const submitBtn = document.querySelector('#submit-name')
const forgetBtn = document.querySelector('#forget-name')

const h1 = document.querySelector('h1')
const personalGreeting = document.querySelector('.personal-greeting')

// Stop the form from submitting itself when the button is pressed
form.addEventListener('submit', ev => ev.preventDefault())

function nameDisplayCheck() {
  if (localStorage.getItem('name')) {
    const name = localStorage.getItem('name')
    h1.textContent = `Welcome, ${name}`
    personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`

    forgetDiv.style.display = 'block'
    rememberDiv.style.display = 'none'
  } else {
    h1.textContent = 'Welcome to our website '
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.'

    forgetDiv.style.display = 'none'
    rememberDiv.style.display = 'block'
  }
}

submitBtn.addEventListener('click', _ => {
  localStorage.setItem('name', nameInput.value)
  nameDisplayCheck()
})

forgetBtn.addEventListener('click', _ => {
  localStorage.removeItem('name')
  nameDisplayCheck()
})

nameDisplayCheck()