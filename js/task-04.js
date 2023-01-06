const refs = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  span: document.querySelector('#value')
  }

let counterValue = 0;

refs.increment.addEventListener('click', onClickIncreaseValue);
refs.decrement.addEventListener('click', onClickDecreaseValue);

function onClickDecreaseValue() {
  counterValue -= 1;

  refs.span.textContent = counterValue
}
function onClickIncreaseValue() {
  counterValue += 1;

  refs.span.textContent = counterValue
}

