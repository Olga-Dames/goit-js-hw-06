const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

inputRef.addEventListener('input', onInputRangeChange)

function onInputRangeChange(event) {
  textRef.style.fontSize = inputRef.value + 'px'
}

