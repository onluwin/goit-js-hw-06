const input = document.querySelector('#validation-input');
const changeClass = (oldClass, newClass) => {
    input.classList.remove(oldClass);
    input.classList.add(newClass);
}
const onInputValidation = (event) => {
    event.currentTarget.value.length === Number(input.dataset.length) ? changeClass('invalid', 'valid') : changeClass('valid', 'invalid')
}
input.addEventListener('blur', onInputValidation)