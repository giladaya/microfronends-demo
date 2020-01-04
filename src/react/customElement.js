class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    
    style = document.createElement('style');
    style.textContent = `
    * {
      color: blue;
    }
    `;
    this.shadow.appendChild(style);

    this.content = document.createElement("span");
    this.shadow.appendChild(this.content)
  }

  connectedCallback() {
    this.log("connected");
    this.render();
  }

  render() {
    const count = this.getAttribute("count");
    this.content.innerHTML = `
      custom component: ${count}
    `;
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.log("attributeChanged", attr, oldValue, newValue);
    this.render();
  }

  disconnectedCallback() {
    this.log("disconnected");
  }

  log(...args) {
    console.log("custom-component", ...args);
  }
}
window.customElements.define("custom-component", CustomElement);
