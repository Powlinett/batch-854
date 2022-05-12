import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button", "link"]

  disable(event) {
    this.buttonTarget.innerText = 'Bingo!';
    this.buttonTarget.setAttribute('disabled', '');

    this.linkTarget.classList.remove('d-none');
  }

  reset(event) {
    event.preventDefault();

    this.buttonTarget.innerText = 'Click me!'
    this.buttonTarget.disabled = false;

    this.linkTarget.classList.add('d-none');
  }
}
