import React from "react"
import CreditCard from "./CreditCard"

class CreditCardDetails extends React.Component {
  render() {
    return (
      <div className="credit-card-details-box grey darken-4 z-depth-5">
        <h6>Card Details</h6>
        <span className="label">Card type</span>
        <div className="row">
          <div className="col s12 m8">
            <CreditCard />
          </div>
          <div className="col s12 m4">
            <div className="row"></div>
            <div className="row"></div>
            <img className="card-type" src="https://image.flaticon.com/icons/svg/196/196561.svg"></img>
          </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div>
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use
          effectively. I am similar to what is called a panel in other frameworks. I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use
          effectively. I am similar to what is called a panel in other frameworks.
        </div>
      </div>
    )
  }
}

export default CreditCardDetails
