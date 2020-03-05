import { ADD_TO_CART } from "../actions/types"

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: "https://materializecss.com/images/sample-1.jpg"
    },
    {
      id: 2,
      title: "Adidas",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: "https://materializecss.com/images/sample-1.jpg"
    },
    {
      id: 3,
      title: "Vans",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: "https://materializecss.com/images/sample-1.jpg"
    },
    {
      id: 4,
      title: "White",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: "https://materializecss.com/images/sample-1.jpg"
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: "https://materializecss.com/images/sample-1.jpg"
    },
    {
      id: 6,
      title: "Blues",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: "https://materializecss.com/images/sample-1.jpg"
    }
  ],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find(item => item.id === action.payload)
      let final = {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: state.total + addedItem.price
      }
      console.log(final)
      return final
    default:
      return state
  }
}

export default cartReducer
