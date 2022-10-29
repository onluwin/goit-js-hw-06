const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  total: document.querySelector('#value'),
}
let value = 0
function decrement() {
    value -= 1
    refs.total.textContent = value
}
function increment() {
    value += 1
    refs.total.textContent = value
  }
refs.decrementBtn.addEventListener('click', decrement)
refs.incrementBtn.addEventListener('click', increment)