const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(item => {
  const ingredientsElem = document.createElement('li');
  ingredientsElem.classList.add('item');
  ingredientsElem.textContent = item;
  return ingredientsElem;

});

console.log(ingredientsArr);

ingredientsList.append(...ingredientsArr);