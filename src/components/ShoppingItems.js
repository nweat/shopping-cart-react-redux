import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addToCart } from "../actions/index"

class ShoppingItems extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

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
              <span className="card-title">{item.title}</span>
              <span onClick={() => this.handleAddToCartClick(item.id)} className="btn-floating halfway-fab waves-effect waves-light pink">
                <i className="material-icons">add</i>
              </span>
            </div>

            <div className="card-content">
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderItems()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { items: state.cart.items }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingItems)
