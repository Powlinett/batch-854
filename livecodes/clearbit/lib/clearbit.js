const authorization = "Bearer sk_***";

// TODO

// selectionner le form

const form = document.querySelector('#clearbitForm');

// ajouter un event listener sur le 'submit' du form

form.addEventListener('submit', (event) => {
  //// récupérer la donnée dans l'input text
  const input = form.querySelector('#clearbitEmail');
  const email = input.value;

  //// fetch l'api clearbit

  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data);
      //// avec la réponse, on va ajouter de l'HTML

      if (data.person) {
        const userName = data.person.name.fullName;
        const userLocation = data.person.location;
        const userBio = data.person.bio;
        const userEmail = email;
  
        const userNameElement = document.getElementById('userName');
        userNameElement.innerText = userName;
  
        const userLocationElement = document.getElementById('userLocation');
        userLocationElement.innerText = userLocation;
  
        const userBioElement = document.getElementById('userBio');
        userBioElement.innerText = userBio;
  
        const userEmailElement = document.getElementById('userEmail');
        userEmailElement.innerText = userEmail;
      } else {
        const unknownEmailElement = document.querySelector('#unknownEmail')
        unknownEmailElement.innerText= "Doesn't exist";
      }
    });
});

