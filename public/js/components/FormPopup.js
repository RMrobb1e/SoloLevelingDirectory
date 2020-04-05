import { LitElement, html } from "../lit-element.js";
import ContactsList from "./ContactsList.js";
import FavoritesList from "./FavoritesList.js";
class FormPopup extends LitElement {
  constructor() {
    super();
    this.formData = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static get properties() {
    return {
      color: String,
      popupOpen: Boolean,
      formData: Object,
      saveContact: Function,
    };
  }

  _firstRendered() {}

  onSubmit(event) {
    event.preventDefault();
    this.saveContact(this.formData);
    this.formData = {};
    var elements = this._root.querySelectorAll("input");
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      element.value = "";
    }
  }

  onChange(event) {
    let formData = {};
    let name = event.target.name;
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    formData[name] = value;
    this.formData = Object.assign(this.formData, formData);
  }

  _render() {
    return html`
         <style>
            @import '/css/global.css';
            .form-popup {
              background: #2b304c;
              height: 100vh;
              width: 100vw;
              position: fixed;
              top: 0;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all .4s ease-in-out;
              visibility: hidden;
            }
            .form-popup.active {
              visibility: visible;
            }
            form {
              width: 400px;
              background: white;
              padding: 20px;
              border-radius: 10px;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-gap: 20px;
            }
            h2 {
              font-size: 1.4rem;
              font-weight: 500;
              grid-column: 1/4;
            }
            .form-group {
              padding: 0;
              position: relative;
            }
            label {
              font-size: .7rem;
              background: white;
              position: absolute;
              top: -3px;
              display: inline-block;

            }
            input[type="text"] {
              padding: 10px;
              display: block;
              width: 100%;
            }
            .first-name {
              grid-column: 1/3;
            }
            .last-name {
              grid-column: 3/5;
            }
            .address-1 {
              grid-column: 1/5;
            }
            .address-2 {
              grid-column: 1/5;
            }
            .city {
              grid-column: 1/3;
            }
            .button {
              justify-self: end;
              grid-column: 4/5;
            }
            .button button {
              border: 1px solid rgba(0, 0, 0, 1);
              text-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
              border-radius: 5px;
              cursor: pointer;
              padding: 10px 25px;
              background: rgb(59, 103, 158);
              border: none;
              color: white;
            }
            .closing-btn {
              position: absolute;
              z-index: 3;
              right: 20px;
              top: 0;
              padding: 20px;
              font-size: 2rem;
              color: teal;
              cursor: pointer;
            }
            .closing-btn i{
              width: 18px;
              height: 18px;
              fill: white;
            }
         </style>
            <section className="${this.popupOpen ? " form-popup active" : "form-popup"}">
              <form on-submit="${this.onSubmit}">
                <div class="closing-btn" on-click="${this.togglePopup}">
                 x
                </div>
                <h2>Add a new contact</h2>
                <div class="form-group first-name">
                  <label for="first_name">First Name</label>
                  <input type="text" name="first_name" autocomplete="off" on-keyup="${
                    this.onChange
                  }" >
                </div>

                <div class="form-group last-name">
                  <label for="last_name">Last Name</label>
                  <input type="text" name="last_name" autocomplete="off" on-keyup="${
                    this.onChange
                  }" >
                </div>

                <div class="form-group address-1">
                  <label for="address1">Address #1</label>
                  <input type="text" name="address1" autocomplete="off" on-keyup="${this.onChange}">
                </div>

                <div class="form-group address-2">
                  <label for="address2">Address #2</label>
                  <input type="text" name="address2" autocomplete="off" on-keyup="${
                    this.onChange
                  }" >
                </div>

                <div class="form-group city">
                  <label for="city">City</label>
                  <input type="text"  name="city" autocomplete="off" on-keyup="${this.onChange}">
                </div>

                <div class="form-group state">
                  <label for="state">State</label>
                  <input type="text" name="state" autocomplete="off" on-keyup="${this.onChange}" >
                </div>

                <div class="form-group zipcode">
                  <label for="zipcode">Zipcode</label>
                  <input type="text" name="zipcode" autocomplete="off" on-keyup="${this.onChange}" >
                </div>

                <div class="form-group phone_number">
                  <label for="phone_number">Phone Number</label>
                  <input type="text" name="phone_number" autocomplete="off" on-keyup="${
                    this.onChange
                  }" >
                </div>

                <div class="form-group category">
                  <label for="category">Hunter Rank</label>
                  <input type="text" name="category" autocomplete="off" on-keyup="${
                    this.onChange
                  }" >
                </div>

                <div class="form-group favorites">
                  <label for="favorites">Favorites</label>
                  <input type="text" name="favorites" autocomplete="off" on-keyup="${
                    this.onChange
                  }" >
                </div>

                <div class="form-group button">
                  <button type="submit">Add</button>
                </div>
              </form>
            </section>
         </div>
      `;
  }
}

export default FormPopup;

customElements.define("form-popup", FormPopup);
