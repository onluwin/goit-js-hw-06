const refs = {
    controls: document.querySelector('#controls'),
    inputBoxesAmount: controls.querySelector('input'),
    createBoxesBtn: controls.querySelector('[data-create]'),
    destroyBoxesBtn: controls.querySelector('[data-destroy]'),
    outputBoxes: document.querySelector('#boxes'),
}
let boxesAmount = 0

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onInputNumber = (event) => {
    boxesAmount = Number(event.currentTarget.value)
}

const addMarkupToDocument = (string) => {
    refs.outputBoxes.innerHTML = string;
}

const createBoxes = (boxesAmount) => {
    let boxSize = 30
    let markup = ''
    for (let i = 0; i < boxesAmount; i += 1) {
        const color = getRandomHexColor();
        boxSize += 10
        markup += `<div style="background-color: ${color}; width: ${boxSize}px; height: ${boxSize}px">fff</div>`;
    }
    addMarkupToDocument(markup)
}
refs.inputBoxesAmount.addEventListener('input', onInputNumber)
refs.createBoxesBtn.addEventListener('click', createBoxes)
refs.destroyBoxesBtn.addEventListener('click', () => {refs.outputBoxes.innerHTML = ''})