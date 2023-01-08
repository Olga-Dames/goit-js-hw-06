const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

inputRef.addEventListener('input', onInputRangeChange)

function onInputRangeChange() {
  textRef.style.fontSize = inputRef.value + 'px'
}

