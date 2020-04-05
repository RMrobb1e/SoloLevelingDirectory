import { LitElement, html } from "../lit-element.js";
import mockContacts from "../../mockData/Contacts.js";
import ContentArea from "./ContentArea.js";
import SideMenu from "./SideMenu.js";

class MainApp extends LitElement {
  constructor() {
    super();
    this.togglePopup = this.togglePopup.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.popupOpen = false;
    this.allContacts = mockContacts;
  }

  static get properties() {
    return {
      togglePopup: Function,
      popupOpen: Boolean,
      allContacts: Array,
    };
  }

  _firstRendered() {}

  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }

  saveContact(contact) {
    function immutablePush(arr, newEntry) {
      return [...arr, newEntry];
    }

    let newArray = immutablePush(this.allContacts, {
      ...contact,
      img_url: "../../img/contact.png",
    });
    this.allContacts = newArray;
    this.togglePopup();
  }

  deleteContact(contactIndex) {
    this.allContacts = this.allContacts
      .slice(0, contactIndex)
      .concat(this.allContacts.slice(contactIndex + 1));
  }

  _render() {
    return html`
      <style>
        .main-page {
          display: grid;
          grid-template-columns: 250px 1fr;
        }
      </style>

      <div class="main-page">
        <side-menu togglePopup="${this.togglePopup}"></side-menu>
        <content-area
          saveContact="${this.saveContact}"
          popupOpen="${this.popupOpen}"
          togglePopup="${this.togglePopup}"
          allContacts="${this.allContacts}"
          deleteContact="${this.deleteContact}"
        ></content-area>
      </div>
    `;
  }
}

customElements.define("main-app", MainApp);
