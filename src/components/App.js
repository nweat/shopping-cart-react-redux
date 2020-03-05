import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import ShoppingItems from "./ShoppingItems"
import ShoppingCart from "./ShoppingCart"
import Header from "./Header"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={ShoppingItems} exact />
          <Route path="/cart" component={ShoppingCart} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
