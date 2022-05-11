// TODO: get apiKey from clearbit

const authorization = "Bearer sk_***";
// TODO

const setUserInfo = (data) => {
    // 4. Read the json returned and display the results in a div/table/ul
    const userName = document.querySelector('#userName');
    userName.innerText = data.name ? data.name.fullName : '';

    const userEmail = document.querySelector('#userEmail');
    userEmail.innerText = data.email ? data.email : '';

    const userBio = document.querySelector('#userBio');
    userBio.innerText = data.bio ? data.bio : '';

    const userLocation = document.querySelector('#userLocation');
    userLocation.innerText = data.location ? data.location : '';
};

const callClearbitApi = (email) => {
  const apiUrl = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  })
    .then((response) => response.json())
    .then((data) => setUserInfo(data.person));
};

// 1. Add listener on the form
const form = document.querySelector('#clearbitForm');
form.addEventListener('submit', (event) => {
  // 2. Prevent the submission of the form with .preventDefault()
  event.preventDefault();

  const textInput = form.querySelector('#clearbitEmail');
  const email = textInput.value;

  // 3. Send an AJAX request to the Clearbit API using the fetch API
  callClearbitApi(email);
});

