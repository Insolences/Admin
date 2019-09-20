let btnPlus = document.getElementById('plus');
let btnMinus = document.getElementById('minus');
let result = document.getElementById('result');

let counter = parseInt(result.innerText);

btnPlus.addEventListener('click', () => {
  result.innerText = ++counter;
});

btnMinus.addEventListener('click', () => {
  result.innerText= --counter;
});







