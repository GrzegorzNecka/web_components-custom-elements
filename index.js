/**
 * https://przeprogramowani.elms.pl/szkolenie.html?tid=2&lid=38
 */

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

/**
 * przekazywanie i odczytywanie  złożonego elemntu
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

/**
 * eventy w custom elements
 */

class EventsTest extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent("something-has-changed"));
    }, 10000);
  }
}

window.customElements.define("my-event", EventsTest);

//--- pobanie w konsoli
// const el = document.querySelector("my-event");
// el.addEventListener("something-has-changed", () => {
//   console.log("test");
// });
