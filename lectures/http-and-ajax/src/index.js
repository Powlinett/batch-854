// RAPPEL DOM AND EVENTS

// const button = document.querySelector('#click-me');
// button.addEventListener('click', (event) => {
//   event.currentTarget.innerText = 'Wait...';
//   event.currentTarget.setAttribute('disabled', '');
// });


// HTTP AND AJAX

const list = document.querySelector('#results');

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  list.innerHTML = '';

  const input = document.querySelector('#search-input');
  const title = input.value;

  const apiUrl = `http://www.omdbapi.com/?s=${title}&apikey=adf1f2d7`;
  fetch(apiUrl)
    .then(response => response.json())
    .then((data) => {
    // console.log(data.Search); // data['Search']

      data.Search.forEach((movie) => {
        const html = `
        <li>
          ${movie.Title}
          <hr>
          <img src="${movie.Poster}" />
        </li>
      `;
        list.insertAdjacentHTML('beforeend', html);
      });
    });
});


const userForm = document.querySelector("#user-form");
userForm.addEventListener('submit', (event) => {
  const email = userForm.querySelector('#email');
  const username = userForm.querySelector('#username');

  event.preventDefault();

  const url = 'https://reqres.in/api/users';
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value, name: username.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
});
