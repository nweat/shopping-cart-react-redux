import { ADD_TO_CART, REMOVE_ITEM, SUBTRACT_QUANTITY } from "../actions/types"

const initState = {
  items: [
    {
      id: 1,
      title: "Lemon Chicken",
      sku: "#4216441",
      desc: "200 kcal",
      price: 10.5,
      img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 2,
      title: "Roast Chicken",
      sku: "#4216442",
      desc: "300kcal",
      price: 15.0,
      img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
    },
    {
      id: 3,
      title: "Grilled Chicken",
      sku: "#4216443",
      desc: "250kcal",
      price: 12,
      img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MjB9&auto=format&fit=crop&w=1055&q=80"
    },
    {
      id: 4,
      title: "Chicken Momo",
      sku: "#4216444",
      desc: "160 kcal",
      price: 8,
      img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 5,
      title: "Egg sandwich",
      sku: "#4216445",
      desc: "183 kcal",
      price: 6,
      img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Tacos",
      sku: "#4216446",
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
      let addedItem = state.items.find(item => item.id === action.payload)
      let existingItem = state.addedItems.find(item => item.id === action.payload)
      if (existingItem) {
        existingItem.qty += 1
        existingItem.subtotal += addedItem.price

        return {
          ...state,
          total: state.total + addedItem.price
        }
      } else {
        return {
          ...state,
          addedItems: [
            ...state.addedItems,
            { id: addedItem.id, sku: addedItem.sku, title: addedItem.title, qty: 1, subtotal: addedItem.price, img: addedItem.img }
          ],
          total: state.total + addedItem.price
        }
      }

    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find(item => item.id === action.payload)
      let newItemList = state.addedItems.filter(item => item.id !== action.payload)
      let newTotal = state.total - itemToRemove.subtotal

      return {
        ...state,
        addedItems: newItemList,
        total: newTotal
      }

    case SUBTRACT_QUANTITY:
      let item = state.items.find(item => item.id === action.payload)
      let itemFromCart = state.addedItems.find(item => item.id === action.payload)

      if (itemFromCart.qty >= 1) {
        itemFromCart.qty -= 1
        itemFromCart.subtotal -= item.price
        let newTotal = state.total - item.price
        return {
          ...state,
          total: newTotal
        }
      } else {
        return { ...state }
      }

    default:
      return state
  }
}

export default cartReducer
