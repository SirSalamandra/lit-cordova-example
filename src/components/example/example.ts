import { LitElement, customElement, property, html, css } from "lit-element";

@customElement("lit-cordova-example")
class Example extends LitElement {

  @property() foo: string = "World";

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div>
        <p>This is a sample project</p>
        <p>Hello <span>${this.foo}</span></p>
      </div>
    `;
  }

  static get styles() {
    return css`
      span {
        font-weight: bold;
      }
    `;
  }
}