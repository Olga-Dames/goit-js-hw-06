const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientRef = document.querySelector('#ingredients');

const itemCreate =  ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  console.log(ingredientEl)
  return ingredientEl;
})
ingredientRef.append(...itemCreate);
console.log(itemCreate)





// ingredients.forEach(ingredient => {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add('item');
//   ingredientRef.appendChild(ingredientEl);
//   console.log(ingredientEl)
// })


