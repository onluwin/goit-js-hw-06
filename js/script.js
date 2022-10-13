
// TASK 1 //



// const categoryItemsRefs = document.querySelectorAll('.item')

//     console.log('Number of categories:', categoryItemsRefs.length);
//     categoryItemsRefs.forEach(item => {
//         console.log('Category:', item.querySelector('h2').textContent);
//         console.log('Elements:', item.querySelectorAll('li').length);
//     })



// TASK 2 //



const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector('#ingredients')
const makeMarkup = function (array) {
    const ingredientItemRef = document.createElement('li')
    console.log(ingredientItemRef);
    for (let i = 0; i < array.length; i += 1) {
        ingredientItemRef.textContent = ingredients[i]
    }
    ingredientItemRef.classList.add('item')
    listRef.append(ingredientItemRef)
}
const markup = ingredients.map(makeMarkup)
console.log(makeMarkup(ingredients));