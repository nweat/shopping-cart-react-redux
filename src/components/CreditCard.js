import React from "react"

class CreditCard extends React.Component {
  render() {
    return (
      <div className="credit-card light-blue darken-4 z-depth-3">
        <div className="row">
          <span className="col s6 m6 right">
            <img className="faded" alt="" src="https://image.flaticon.com/icons/svg/179/179457.svg"></img>
          </span>
        </div>
        <div className="row">
          <div className="col s12 m12">
            <span className="card-number center">....</span>
            <span className="card-number center">....</span>
            <span className="card-number center">....</span>
            <span className="card-number center">....</span>
          </div>
        </div>
        <div className="row">
          <div className="col s6 m7">
            <p className="card-name">Nikki Wetterpants</p>
          </div>
          <div className="col s6 m5">
            <p className="card-expiry center">12 / 18</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CreditCard
