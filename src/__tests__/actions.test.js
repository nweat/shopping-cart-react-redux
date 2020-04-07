import * as actions from "../actions/index"
import * as types from "../actions/types"

describe("actions", () => {
  it("should create addToCart action", () => {
    const payload = 1
    const expectedAction = {
      type: types.ADD_TO_CART,
      payload
    }
    expect(actions.addToCart(payload)).toEqual(expectedAction)
  })

  it("should create removeItem action", () => {
    const payload = 1
    const expectedAction = {
      type: types.REMOVE_ITEM,
      payload
    }
    expect(actions.removeItem(payload)).toEqual(expectedAction)
  })

  it("should create subtractQuantity action", () => {
    const payload = 1
    const expectedAction = {
      type: types.SUBTRACT_QUANTITY,
      payload
    }
    expect(actions.subtractQuantity(payload)).toEqual(expectedAction)
  })
})
