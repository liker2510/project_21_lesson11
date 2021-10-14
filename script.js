const btn = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.querySelector('#circle');
const eBtn = document.querySelector('#e_btn').style.display ="none";
const range = document.querySelector('#range');
const span = document.querySelector('#range-span');

const logger = function(event) {
    span.textContent = event.target.value
    circle.style.height  = event.target.value + '%';
    circle.style.width  = event.target.value + '%';
}

range.addEventListener('input', logger);
range.addEventListener('change', logger);

console.log(circle.style);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    square.style.backgroundColor = text.value;
      text.value = '';
  });




