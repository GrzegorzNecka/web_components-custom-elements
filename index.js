// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class Greeting extends HTMLElement {
  static get observedAttributes() {
    return ["name"];
  }
  constructor() {
    super();
    this.innerText = `Hello, ${this.getAttribute("name")}`;
  }
  connectedCallback() {
    console.log("dodano");
  }
  disconnectedCallback() {
    console.log("usunięto");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.innerText = `Hello, ${newValue}`;
  }
}

window.customElements.define("my-greeting", Greeting);
