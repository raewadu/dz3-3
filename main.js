let number = 0;

const p = document.querySelector('p');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');
incrementBtn.addEventListener('click', () => {
  number += 1;
  p.textContent = number;
  p.style.color = 'green';
});
decrementBtn.addEventListener('click', () => {
  number -= 1;
  p.textContent = number;
  p.style.color = 'red';
  if (number < 0) {
    alert('Negative value!');
    p.textContent = 0;
    number = 0;
  }
});
const block = document.querySelector('.block');
block.addEventListener('mousemove', (event) => {
  const rect = block.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`X: ${x}, Y: ${y}`);
});

let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
const input = document.querySelector('.input input');
input.addEventListener('input', () => {
  const value = input.value.toLowerCase();
  if (colors.includes(value)) {
    document.body.style.backgroundColor = value;
  } else {
    document.body.style.backgroundColor = 'white';
  }
});