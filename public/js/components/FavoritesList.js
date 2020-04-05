import { LitElement, html } from "../lit-element.js";
class FavoritesList extends LitElement {
  constructor() {
    super();
    this.displayAllFavorites = this.displayAllFavorites.bind(this);
  }

  static get properties() {
    return {
      color: String,
      background: String,
      fontWeight: String,
      allContacts: Array,
    };
  }

  _firstRendered() {}

  displayAllFavorites() {
    return this.allContacts.map((contact) => {
      if (contact.favorites === "yes") {
        return html`
          <div class="card">
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
          </div>
        `;
      }
    });
  }

  _render() {
    return html`
         <style>
            .favorites {
               max-width: 800px;
               display: grid;
               grid-template-columns: 1fr 1fr 1fr;
               grid-gap: 20px;
            }
            h2 {
               color: #3e4162;
               font-weight: 300;
               grid-column: 1/4;
            }
            .card {
               width: 100%;
               display: grid;
               grid-template-columns: 1fr 1fr;
               color: #3d4060;
               padding: 15px 0 0 0;
               border-radius: 10px;
               transition: all .4s ease-in-out;
               cursor: pointer;
               webkit-box-shadow: 0px 4px 77px -17px rgba(0, 0, 0, 0.36);
               -moz-box-shadow: 0px 4px 77px -17px rgba(0, 0, 0, 0.36);
               box-shadow:  0px 4px 77px -17px rgba(0, 0, 0, 0.36);
            }
            .card:hover {
               -webkit-box-shadow: 0px 4px 77px -17px rgba(0, 0, 0, 0.36);
               -moz-box-shadow: 0px 4px 77px -17px rgba(0, 0, 0, 0.36);
               box-shadow:  0px 4px 77px -17px rgba(0, 0, 0, 0.36);
            }
            .user-img {
               height: 80px;
               width: 80px;
               background-size: cover;
               background-position: center center;
               border-radius: 50%;
               align-self: center;
               justify-self: center;
               grid-column: 1/3;
            }
            .card .fullname {
               color: #3d4060;
               font-weight: 700;
               text-transform: capitalize;
               grid-column: 1/3;
               padding: 20px;
               border-bottom: 1px solid rgba(0,0,0, .1);
            }
            .card .number {
               font-weight: 500;
               grid-column: 1/3;
               border-bottom: 1px solid rgba(0,0,0, .1);
               padding: 20px;
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
            .category {
              border-left: 1px solid rgba(0,0,0, .1);

            }
            .fullname, .user-img, .category, .city, .number {
               font-weight: 500;
               font-size: 1.3rem;
               padding: 15px;
            }

         </style>

               <section class="favorites">
                  <h2>Favorites</h2>
                  ${this.displayAllFavorites()}
               </section>
         </div>
      `;
  }
}

export default FavoritesList;

customElements.define("favorites-lists", FavoritesList);
