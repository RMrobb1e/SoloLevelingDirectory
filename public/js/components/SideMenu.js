import { LitElement, html } from "../lit-element.js";
class SideMenu extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      color: String,
      togglePopup: Function,
    };
  }

  _firstRendered() {}

  _render() {
    return html`
      <style>
        #side-menu {
          background: #221e3f;
          height: 100vh;
          padding: 50px 25px;
        }
        .logo {
          text-align: center;
        }
        .logo img {
          width: 100px;
        }
        .title {
          font-weight: 700;
          color: #ccced7;
          margin-bottom: 1rem;
        }
        #side-menu nav a {
          color: #ccced7;
          text-decoration: none;
          text-transform: uppercase;
          display: block;
          padding: 10px 10px 10px 0;
        }
        #side-menu nav a span.icon {
          padding: 10px 10px 10px 0;
        }
      </style>

      <section id="side-menu">
        <div class="logo">
          <img src="../../img/logo.png" />
        </div>
        <div class="menu">
          <div class="title">Contacts</div>
          <nav>
            <a href="#" on-click="${this.togglePopup}"><span class="icon">+</span>Add Contact</a>
          </nav>
        </div>
      </section>
    `;
  }
}
export default SideMenu;

customElements.define("side-menu", SideMenu);
