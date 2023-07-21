const price = document.querySelector('#price')
const output = document.querySelector('.price-output')

output.textContent = price.value

price.addEventListener('input', _ => {
  output.textContent = price.value
})