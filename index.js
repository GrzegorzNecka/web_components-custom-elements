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
  }
  connectedCallback() {
    console.log("dodano");
  }
  disconnectedCallback() {
    console.log("usunięto");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom element attributes changed.");
    console.log(attributes);
  }
}

window.customElements.define("my-greeting", Greeting);
