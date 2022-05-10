// PLAYERS


const list = document.querySelector('#players');
// console.log(list);

list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");
list.insertAdjacentHTML("afterbegin", '<li>Yoda</li>');


const anakin = list.querySelector('.red');
// console.log(anakin.innerText);


// FIFA

const wins = document.querySelector('#fifa-wins');
// console.log(wins);

const countries = wins.querySelectorAll("li");
// console.log(countries);

countries.forEach((country) => {
  console.log('country:', country.innerText);
});

wins.insertAdjacentHTML("beforeend", '<li>France (2 wins)</li>');

wins.style.display = "none";

// INPUT

const input = document.querySelector('#email');
// console.log(input.value);

const link = document.querySelector('#home');
console.log('href value:', link.attributes.href);
console.log('link text:', link.innerText);
console.log('link inner html:', link.innerHTML);

link.innerText = 'Batch-854 rocks';

link.addEventListener('click', (event) => {
  console.log(event.currentTarget);
});


// EVENT LISTENERS

const image = document.getElementById('romain');
// debugger;

image.addEventListener('mouseover', (event) => {
  console.log('event', event);
  console.log('currentTarget', event.currentTarget);
  event.currentTarget.style.borderRadius = '50%';

  const homeLink = document.querySelector('#home');
  homeLink.innerText = 'HELLO';
});
