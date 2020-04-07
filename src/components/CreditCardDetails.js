import React from "react"
import CreditCard from "./CreditCard"
import M from "materialize-css/dist/js/materialize.min.js"

class CreditCardDetails extends React.Component {
  componentDidMount() {
    this.initializeMaterializeCSSFormPlugin()
  }

  initializeMaterializeCSSFormPlugin() {
    const elems = document.querySelectorAll("select")
    let options = {}
    M.FormSelect.init(elems, options)
  }

  render() {
    return (
      <div className="credit-card-details-box grey darken-3 z-depth-5">
        <h6>Card Details</h6>
        <label>Card type</label>
        <div className="row">
          <div className="col s12 m8">
            <CreditCard />
          </div>
          <div className="col s12 m4">
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <img className="card-type" alt="" src="https://image.flaticon.com/icons/svg/196/196561.svg"></img>
          </div>
        </div>

        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>

        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Name on Card</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="card-number" type="text" className="validate" />
            <label htmlFor="text">Card Number</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s4">
            <select>
              <option value="" disabled selected>
                mm
              </option>
              <option value="1">Jan</option>
            </select>
            <label>Expiration Date</label>
          </div>
          <div className="input-field col s4">
            <select>
              <option value="" disabled selected>
                yyyy
              </option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div className="input-field col s4">
            <input id="cvv" type="text" className="validate" />
            <label htmlFor="cvv">CVV</label>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <button class="btn waves-effect waves-light">Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreditCardDetails
