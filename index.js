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
    console.log("dodano my-greeting");
  }
  disconnectedCallback() {
    console.log("usunięto my-greeting");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.innerText = `Hello , ${newValue}`;
  }
}

window.customElements.define("my-greeting", Greeting);

//----------------------------------------------------------
/**
 * https://przeprogramowani.elms.pl/szkolenie.html?tid=2&lid=38
 */

class Advanced extends HTMLElement {
  set profile(value) {
    this._profile = value;
    this._render();
  }

  constructor() {
    super();
    this._profile = { firstName: "test", lastName: "Works" };
    this._render();
  }
  connectedCallback() {
    console.log("dodano");
  }
  disconnectedCallback() {
    console.log("usunięto");
  }

  _render() {
    this.innerText = `Hi, ${this._profile.firstName} ${this._profile.lastName}`;
  }
}

window.customElements.define("advnaced-ce", Advanced);


//--- pobanie w konsoli 
// const el = document.querySelector('advnaced-ce')
// el.profile = { firstName: 'przemek', lastName: 'S'}

