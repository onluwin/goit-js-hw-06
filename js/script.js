
// TASK 1 //



// const categoryItemsRefs = document.querySelectorAll('.item')

//     console.log('Number of categories:', categoryItemsRefs.length);
//     categoryItemsRefs.forEach(item => {
//         console.log('Category:', item.querySelector('h2').textContent);
//         console.log('Elements:', item.querySelectorAll('li').length);
//     })



// TASK 2 //



// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// const listRef = document.querySelector('#ingredients')

// const markup = ingredients.map(item => {
//   const ingredientItemRef = document.createElement('li');
//   ingredientItemRef.classList.add('item');
//   ingredientItemRef.textContent = item;
//   return ingredientItemRef
// });
// listRef.append(...markup)



// TASK 3 //



// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// const listRef = document.querySelector('.gallery')

// const markup =
//   images.map(item => `<li><img alt="${item.alt}" width=200 src="${item.url}"></li>`
//   )

// listRef.insertAdjacentHTML("afterbegin", markup)



// TASK 4 //



// const refs = {
//   decrementBtn: document.querySelector('button[data-action="decrement"]'),
//   incrementBtn: document.querySelector('button[data-action="increment"]'),
//   total: document.querySelector('#value'),
// }
// let value = 0
// function decrement() {
//     value -= 1
//     refs.total.textContent = value
// }
// function increment() {
//     value += 1
//     refs.total.textContent = value
//   }
// refs.decrementBtn.addEventListener('click', decrement)
// refs.incrementBtn.addEventListener('click', increment)



// TASK 5 //



const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange)
function onInputChange(event) { 
  const value = event.currentTarget.value.trim();
  if (value === '') {
    refs.output.textContent === 'Anonymous';
  } else {
    refs.output.textContent = value
  }
}
