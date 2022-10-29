const categoryItemsRefs = document.querySelectorAll('.item')

    console.log('Number of categories:', categoryItemsRefs.length);
    categoryItemsRefs.forEach(item => {
        console.log('Category:', item.querySelector('h2').textContent);
        console.log('Elements:', item.querySelectorAll('li').length);
    })