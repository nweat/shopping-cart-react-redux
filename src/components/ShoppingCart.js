import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, removeItem, subtractQuantity } from "../actions/index"

class ShoppingCart extends React.Component {
  handleAddQuantity(id) {
    this.props.addToCart(id)
  }

  handleSubtractQuantity(id) {
    this.props.subtractQuantity(id)
  }

  handleRemoveItemFromCart(id) {
    this.props.removeItem(id)
  }

  renderShoppingCart() {
    return this.props.cart.map(item => {
      return (
        <div className="col s12 m12" key={item.id}>
          <div className="card-panel z-depth-0">
            <div className="row valign-wrapper">
              <div className="col s3">
                <img src={item.img} alt={item.title} className="circle" />
              </div>

              <div className="col s5">
                <div className="black-text">{item.title}</div>
                <div className="grey-text text-lighten-1">{item.sku}</div>
              </div>

              <div className="col s3">
                <span className="col s1">
                  <i className="tiny material-icons click" onClick={() => this.handleAddQuantity(item.id)}>
                    add
                  </i>
                </span>
                <span className="col s1">{item.qty}</span>
                <span className="col s1">
                  <i className="tiny material-icons click" onClick={() => this.handleSubtractQuantity(item.id)}>
                    remove
                  </i>
                </span>
              </div>

              <div className="col s1">
                <span className="black-text">
                  <p>${item.subtotal}</p>
                </span>
              </div>

              <div className="col s1">
                <div className="black-text">
                  <i className="material-icons click" onClick={() => this.handleRemoveItemFromCart(item.id)}>
                    close
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  renderTotalRow() {
    return (
      <div className="row">
        <div className="col s6">
          <Link to="/" className="waves-effect waves-light btn-small">
            <i className="material-icons left">arrow_back</i>Continue Shopping
          </Link>
        </div>
        <div className="col s6">
          {this.props.total >= 0 ? (
            <span className="flow-text right valign-wrapper">
              <p className="grey-text text-lighten-1 subtotal-label">Total: </p>
              <p className="subtotal-currency">$</p>
              <p className="subtotal">{this.props.total}</p>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container" id="cart">
        <h5>{this.props.cart.length > 0 ? "Shopping Cart" : "Shopping Cart is empty"}</h5>
        {this.renderShoppingCart()}
        {this.renderTotalRow()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { cart: state.cart.addedItems, total: state.cart.total }
}

export default connect(mapStateToProps, { addToCart, removeItem, subtractQuantity })(ShoppingCart)
