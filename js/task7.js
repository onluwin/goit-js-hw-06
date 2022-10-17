const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');
output.style.fontSize = `${input.value}px`
const onInputChange = () => {
    output.style.fontSize = `${input.value}px`
}
input.addEventListener('input', onInputChange)