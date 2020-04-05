import { LitElement, html } from "../lit-element.js";
class ContactsList extends LitElement {
  constructor() {
    super();
    this.displayAllContacts = this.displayAllContacts.bind(this);
  }

  static get properties() {
    return {
      allContacts: Array,
      deleteContact: Function,
    };
  }

  _firstRendered() {}

  displayAllContacts() {
    console.log(this.allContacts);
    return this.allContacts.map(
      (contact, index) =>
        html`
          <div class="contact">
            <img class="user-img" src="${contact.img_url}"></img>
            <div class="fullname">
              <span class="text">${contact.first_name + " " + contact.last_name}</span
              ><span class="sub">Full Name</span>
            </div>
            <div class="number">
              <span class="text">${contact.phone_number}</span><span class="sub">Phone Number</span>
            </div>
            <div class="city">
              <span class="text">${contact.city}</span><span class="sub">City</span>
            </div>
            <div class="category">
              <span class="text">${contact.category}</span><span class="sub">Hunter Rank</span>
            </div>
            <div class="delete-btn" on-click="${this.deleteContact.bind(null, index)}">Delete</div>
          </div>
        `
    );
  }

  _render() {
    return html`
      <style>
        .contacts {
           max-width: 800px;
        }
        h2 {
           color: #3e4162;
           font-weight: 300;
        }
        .contact {
           width: 100%;
           display: grid;
           grid-template-columns: 1fr 2fr 3fr 1fr 1fr;
           padding: 20px;
           color: #3d4060;
           border-radius: 10px;
           transition: all .4s ease-in-out;
           cursor: pointer;
           position: relative;
           overflow: hidden;
        }
        .contact:hover {
           -webkit-box-shadow: 0px 4px 77px -17px rgba(0, 0, 0, 0.36);
           -moz-box-shadow: 0px 4px 77px -17px rgba(0, 0, 0, 0.36);
           box-shadow:  0px 4px 77px -17px rgba(0, 0, 0, 0.36);
        }
        .contact .user-img {
           height: 40px;
           width: 40px;
           background-size: cover;
           background-position: center center;
           border-radius: 10px;
        }
        .contact .fullname {
           color: #3d4060;
           font-weight: 700;
           text-transform: capitalize;
           font-size: 1.4rem;
        }
        .contact .number {
           color: #3d4060;
           font-weight
        }
        .text {
           display: block;
           text-align: center;
        }
        .sub {
           display: block;
           font-weight: 300;
           font-size: .8rem;
           color: #b4b5c4;
           text-align: center;
           margin: 5px 0;
        }
        .fullname, .user-img, .category, .city, .number {
           font-weight: 500;
           font-size: 1.4rem;
        }
        .delete-btn {
           position: absolute;
           right: -10px;
           height: 100%;
           padding: 20px;
           color: white;
           background: #221e3f;
           display: flex;
           justify-content: center;
           align-items: center;
           vertical-align: middle;
           -webkit-border-top-right-radius: 10px;
           -webkit-border-bottom-right-radius: 10px;
           -moz-border-radius-topright: 10px;
           -moz-border-radius-bottomright: 10px;
           border-top-right-radius: 10px;
           border-bottom-right-radius: 10px;
           transform: translate3d(100%, 0, 0);
           transition: all .4s ease-in-out;
        }
        .contact:hover .delete-btn{
           transform: translate3d(0, 0, 0);
        }
      </style>

      <section class="contacts">
        <h2>Contacts</h2>
        ${this.displayAllContacts()}
      </section>
    `;
  }
}

export default ContactsList;

customElements.define("contacts-lists", ContactsList);
