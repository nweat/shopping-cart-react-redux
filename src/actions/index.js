import { ADD_TO_CART, REMOVE_ITEM, SUBTRACT_QUANTITY } from "./types"

export const addToCart = id => {
  return { type: ADD_TO_CART, payload: id }
}

export const removeItem = id => {
  return { type: REMOVE_ITEM, payload: id }
}

export const subtractQuantity = id => {
  return { type: SUBTRACT_QUANTITY, payload: id }
}
