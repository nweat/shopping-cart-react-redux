import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class ShoppingItems extends React.Component {
  componentDidMount() {
    console.log(this.props.items)
  }

  renderItems() {
    return this.props.items.map(item => {
      return (
        <div className="col s12 m4" key={item.id}>
          <div className="card">
            <div className="card-image">
              <img src={item.img} alt={item.title} />
              <span className="card-title">{item.title}</span>
              <Link to="/" className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </Link>
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

function mapStateToProps({ cart }) {
  return { items: cart.items }
}

export default connect(mapStateToProps)(ShoppingItems)
