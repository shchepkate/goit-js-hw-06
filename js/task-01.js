const categoriesArr = document.querySelectorAll('.item');
console.log ("Number of categories:", categoriesArr.length);

categoriesArr.forEach((elem) => {
    console.log ('Category: ', elem.querySelector("h2").textContent);
    console.log ('Elements: ', elem.querySelectorAll('li').length);
})

