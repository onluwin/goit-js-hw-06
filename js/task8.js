const form = document.querySelector('.login-form');
const formBtn = document.querySelector('.login-form > button');
const inputName = form.querySelector('input[name="email"]');
const inputPassword = form.querySelector('input[name="password"]')
const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    if (inputName.value === '' || inputPassword.value === '') {
        alert('все поля должны быть заполнены.')
    } else {
        const formDataValues = Object.fromEntries(formData.entries())
        console.log(formDataValues);
        formReset()
    }
}
const formReset = () => {
    inputName.value = '';
    inputPassword.value = '';
}
form.addEventListener('submit', onFormSubmit);
