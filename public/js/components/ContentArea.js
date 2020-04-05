import { LitElement, html } from "../lit-element.js";
import ContactsList from "./ContactsList.js";
import FavoritesList from "./FavoritesList.js";
import FormPopup from "./FormPopup.js";
class ContentArea extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      color: String,
      popupOpen: Boolean,
      togglePopup: Function,
      saveContact: Function,
      deleteContact: Function,
      allContacts: Array,
    };
  }

  _firstRendered() {}

  _render() {
    return html`
         <style>
            #content-area {
               background: #fcfdff;
               font-weight: 300;
               padding: 80px 50px;
            }
         </style>

            <section id="content-area">
               <form-popup 
                  popupOpen="${this.popupOpen}" 
                  togglePopup="${this.togglePopup}"
                  saveContact="${this.saveContact}" >
                </form-popup>
               <favorites-lists allContacts="${this.allContacts}"></favorites-lists>
               <contacts-lists allContacts="${this.allContacts}" deleteContact="${this.deleteContact}"></contacts-lists>
            </section>
         </div>
      `;
  }
}

export default ContentArea;

customElements.define("content-area", ContentArea);
