function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
    changeColorBtn: document.querySelector('.change-color'),
    output: document.querySelector('.color'),
}
const changeBackgroundColorOnClick = () => {
    const backgroundColor = getRandomHexColor()
    document.body.style.backgroundColor = backgroundColor
    refs.output.textContent = backgroundColor
}
refs.changeColorBtn.addEventListener('click', changeBackgroundColorOnClick)