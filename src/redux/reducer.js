import { initialState } from "./initialState";
import { SET_PRODUCTS, TOGGLE_DESCRIPTION } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS: {
      const copy = { ...state };
      copy.products = action.data;
      return copy;
    }
    case TOGGLE_DESCRIPTION: {
      const copy = [...state.products];
      const indexOf = copy.findIndex((product) => {
        return product.id === action.id;
      });
      copy[indexOf].viewDescription = !copy[indexOf].viewDescription;
      return { ...state, products: copy };
    }
    default:
      return state;
  }
}
