import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo">
            <i className="large material-icons heading-icon">local_bar</i> Food Paradise
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
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
