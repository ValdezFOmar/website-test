const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


// Animation using callbacks (callback hell)
function callbackHell() {
  const promise1 = alice1.animate(aliceTumbling, aliceTiming).finished
  promise1.then(_ => {
    console.log('First Alice')
    const promise2 = alice2.animate(aliceTumbling, aliceTiming).finished
    
    promise2.then(_ => {
      console.log('Second Alice')
      const promise3 = alice3.animate(aliceTumbling, aliceTiming).finished
      
      promise3.then(_ => {
        console.log('Animations finished.')
      })
    })
  })
}

// callbackHell()


// Animation using a 'promised chain'
function promisedChain() {
  alice1.animate(aliceTumbling, aliceTiming).finished
    .then(_ => alice2.animate(aliceTumbling, aliceTiming).finished)
    .then(_ => alice3.animate(aliceTumbling, aliceTiming))
}

// promisedChain()


// Animation using async and await
async function asyncAwait() {
  await alice1.animate(aliceTumbling, aliceTiming).finished
  await alice2.animate(aliceTumbling, aliceTiming).finished
  await alice3.animate(aliceTumbling, aliceTiming).finished
  console.log('Animations finished (Using async and await).')
}

asyncAwait()