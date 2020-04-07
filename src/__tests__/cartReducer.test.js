import cartReducer from "../reducers/cartReducer"
import { ADD_TO_CART } from "../actions/types"

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

describe("cart reducer", () => {
  it("should return the initial state", () => {
    expect(cartReducer(undefined, {})).toEqual(initState)
  })

  it("should add item to addedItems list and update total", () => {
    expect(cartReducer(undefined, { type: ADD_TO_CART, payload: 1 })).toEqual({
      ...initState,
      addedItems: [
        ...initState.addedItems,
        {
          id: 1,
          title: "Lemon Chicken",
          sku: "#4216441",
          qty: 1,
          subtotal: 10.5,
          img:
            "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        }
      ],
      total: 10.5
    })
  })

  it("should update cart item quantity, subtotal and total", () => {
    const state = {
      items: [
        {
          id: 1,
          title: "Lemon Chicken",
          sku: "#4216441",
          desc: "200 kcal",
          price: 10.5,
          img:
            "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          img:
            "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0MjB9&auto=format&fit=crop&w=1055&q=80"
        },
        {
          id: 4,
          title: "Chicken Momo",
          sku: "#4216444",
          desc: "160 kcal",
          price: 8,
          img:
            "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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
          img:
            "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        }
      ],
      addedItems: [
        {
          id: 1,
          title: "Lemon Chicken",
          sku: "#4216441",
          qty: 1,
          subtotal: 10.5,
          img:
            "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        }
      ],
      total: 10.5
    }

    expect(cartReducer(state, { type: ADD_TO_CART, payload: 1 })).toEqual({
      ...state,
      total: 21
    })
  })
})
