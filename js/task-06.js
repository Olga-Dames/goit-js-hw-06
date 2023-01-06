const inputRef = document.querySelector('#validation-input')
const validationLength = Number(inputRef.dataset.length)
inputRef.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length === validationLength) {
    inputRef.classList.add('valid')
    inputRef.classList.remove('invalid')
  } else {
    inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
  }
})
