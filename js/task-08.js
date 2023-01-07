
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();

  const {elements: { email, password }} = event.currentTarget;

  if(email.value === '' || password.value === '') {
    return alert('You need to fill in all information! ')
  }

  const filledForm = {
    email: email.value,
    password: password.value
  }
console.log(filledForm );

event.currentTarget.reset();
}
