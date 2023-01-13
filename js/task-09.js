function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const bcgColorName = document.querySelector('span.color');
const button = document.querySelector('.change-color');
body.classList.add('background-color');


function bodyChangeColor (event) {
  const randomBackgroundColor = getRandomHexColor();
  bcgColorName.textContent = randomBackgroundColor;
  console.log(bcgColorName.textContent);
  body.style.backgroundColor = randomBackgroundColor;
  console.log(body.style.backgroundColor);
}

button.addEventListener('click', bodyChangeColor);








