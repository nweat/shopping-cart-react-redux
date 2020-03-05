import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper orange darken-2">
          <Link to="/" className="brand-logo">
            <i className="large material-icons heading-icon">local_dining</i> HealthyBites
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/cart">
                <i className="material-icons heading-icon">
                  <small className="notification-badge">{this.props.numItems}</small> shopping_basket
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return { numItems: state.cart.addedItems.length }
}

export default connect(mapStateToProps)(Header)
