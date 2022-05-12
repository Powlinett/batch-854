import { Controller } from "@hotwired/stimulus"

const garageName = 'loutre'
const garageUrl = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`

export default class extends Controller {
  static targets = ["carsList", "brand", "model", "plate", "owner"]

  _insertCar(car) {
    const carHTML = `
      <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <a href="#" data-id="${car.id}" data-action="click->garage#deleteCar">supprimer</a>
        <p><strong>Owner:</strong>${car.owner}</p>
        <p><strong>Plate:</strong>${car.plate}</p>
      </div>
    </div>`;
    this.carsListTarget.insertAdjacentHTML("beforeend", carHTML);
  }

  _fetchCars() {
    this.carsListTarget.innerHTML = '';
  
    fetch(garageUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((car) => this._insertCar(car))
    })
  }

  connect() {
    this._fetchCars();
  }

  createCar(event) {
    event.preventDefault();

    const carData = {
      brand: this.brandTarget.value,
      model: this.modelTarget.value,
      plate: this.plateTarget.value,
      owner: this.ownerTarget.value,
    };

    fetch(garageUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData)
    })
    .then((response) => response.json())
    .then((data) => this._insertCar(data))
  }

  deleteCar(event) {
    event.preventDefault()

    const carId = event.currentTarget.dataset.id
    const url = `https://wagon-garage-api.herokuapp.com/cars/${carId}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => this._fetchCars())
  } 
}
