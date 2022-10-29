const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector('#ingredients')

const markup = ingredients.map(item => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.classList.add('item');
  ingredientItemRef.textContent = item;
  return ingredientItemRef
});
listRef.append(...markup)