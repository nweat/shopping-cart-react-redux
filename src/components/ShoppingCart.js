import React from "react"

class ShoppingCart extends React.Component {
  render() {
    return (
      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-0">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src="https://materializecss.com/images/office.jpg" alt="" class="circle responsive-img" />
            </div>
            <div class="col s3">
              <div className="black-text">Chicken Momo</div>
              <div className="grey-text text-lighten-1">#456793</div>
            </div>

            <div class="col s3">
              <span class="col s1">
                <i class="tiny material-icons">add</i>
              </span>
              <input type="text"></input>
              <span class="col s1">
                <i class="tiny material-icons">remove</i>
              </span>
            </div>

            <div class="col s1">
              <div className="black-text center-align">$12.50</div>
            </div>
            <div class="col s2">
              <div class="black-text">
                <i class="material-icons">close</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingCart
