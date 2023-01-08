
const refs = {
  inputValue: document.querySelector('input[type="number"]'),
  createBtnRef: document.querySelector('[data-create]'),
  destroyBtnRef: document.querySelector('[data-destroy]'),
  boxesContainerRef: document.querySelector('#boxes')
}

refs.createBtnRef.addEventListener('click', () => {
  const collection = createBoxes(Number(refs.inputValue.value))
  refs.boxesContainerRef.append(...collection)
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {

  const elementsToPush = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    const size = 30 + i * 10;
    newBox.style.width = size + 'px';
    newBox.style.height = size + 'px';
    newBox.style.backgroundColor = getRandomHexColor()
    elementsToPush.push(newBox)
  }
  return elementsToPush
}

refs.destroyBtnRef.addEventListener('click', onClickClear)

function onClickClear() {
  refs.boxesContainerRef.innerHTML = '';
}
