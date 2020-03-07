import React from "react"
import { connect } from "react-redux"
import { addToCart } from "../actions/index"

class ShoppingItems extends React.Component {
  handleAddToCartClick = id => {
    this.props.addToCart(id)
  }

  renderItems() {
    return this.props.items.map(item => {
      return (
        <div className="col s12 m4" key={item.id}>
          <div className="card">
            <div className="card-image">
              <img src={item.img} alt={item.title} />
              <span className="card-title"></span>
              <span
                onClick={() => this.handleAddToCartClick(item.id)}
                className="btn-floating halfway-fab waves-effect waves-light deep-orange darken-1"
              >
                <i className="material-icons">add</i>
              </span>
            </div>

            <div className="card-content">
              <p>
                <b>{item.title}</b>
              </p>
              <p className="desc">{item.desc}</p>
              <p>
                <b className="right">${item.price}</b>
              </p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container" id="items">
        <div className="row">{this.renderItems()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { items: state.cart.items }
}

export default connect(mapStateToProps, { addToCart })(ShoppingItems)
