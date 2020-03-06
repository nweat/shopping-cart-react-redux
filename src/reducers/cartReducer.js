import { ADD_TO_CART } from "../actions/types"

const initState = {
  items: [
    {
      id: 1,
      title: "Lemon Chicken",
      sku: "#4216448",
      desc: "200 kcal",
      price: 10.5,
      img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 2,
      title: "Roast Chicken",
      desc: "300kcal",
      price: 15.0,
      img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
    },
    {
      id: 3,
      title: "Grilled Chicken",
      desc: "250kcal",
      price: 12,
      img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MjB9&auto=format&fit=crop&w=1055&q=80"
    },
    {
      id: 4,
      title: "Chicken Momo",
      desc: "160 kcal",
      price: 8,
      img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 5,
      title: "Egg sandwich",
      desc: "183 kcal",
      price: 6,
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Tacos",
      desc: "250kcal",
      price: 10,
      img: "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    }
  ],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let currState = {}
      let addedItem = state.items.find(item => item.id === action.payload)
      let existingItem = state.addedItems.find(item => item.id === action.payload)
      if (existingItem) {
        existingItem.qty += 1
        existingItem.subtotal += addedItem.price

        currState = {
          ...state,
          total: state.total + addedItem.price
        }
        console.log("existing item update in cart: ")
        console.log(currState)
      } else {
        addedItem.qty = 1
        addedItem.subtotal = addedItem.price
        currState = {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: state.total + addedItem.price
        }
        console.log("new item added to cart: ")
        console.log(currState)
      }
      return currState
    default:
      return state
  }
}

export default cartReducer
