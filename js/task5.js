const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange)
function onInputChange(event) {
  const value = refs.input.value.trim();
  const text = value ? value : 'Anonymous';
  refs.output.textContent = text;
  }