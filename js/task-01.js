const categoriesItemEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach(element => {
  const titleText = element.querySelector('h2')
  console.log(`Category: ${titleText.textContent}`);

  const elementNumber = element.querySelectorAll('li');
  console.log(`Elements: ${elementNumber.length}`)
  }
)
