import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <i className="large material-icons heading-icon">local_dining</i> FastBites
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/cart">
                <i className="material-icons heading-icon">shopping_basket</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
