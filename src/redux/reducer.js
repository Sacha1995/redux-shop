import { getIndex, setLocalStorage } from "../Controllers";
import { initialState } from "./initialState";
import {
  CHANGE_CONTENT_SHOPPINGCARD,
  DECREMENT,
  FORM_EVENT,
  INCREMENT,
  REMEMBER_SHOPPING,
  SET_PRODUCTS,
  TOGGLE_DESCRIPTION,
  VIEW_SHOPPING_CARD,
} from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS: {
      const copy = { ...state };
      copy.products = action.data;
      console.log(copy);
      return copy;
    }
    case TOGGLE_DESCRIPTION: {
      const copy = [...state.products];
      const indexOf = getIndex(copy, action.id);
      copy[indexOf].viewDescription = !copy[indexOf].viewDescription;
      return { ...state, products: copy };
    }

    case FORM_EVENT: {
      return { ...state, [action.e.target.id]: action.e.target.value };
    }

    case REMEMBER_SHOPPING: {
      return {
        ...state,
        products: action.storedData,
      };
    }

    case CHANGE_CONTENT_SHOPPINGCARD: {
      let copy = [...state.products];
      const indexOf = getIndex(copy, action.id);

      copy[indexOf].inCard = !copy[indexOf].inCard;
      if (copy[indexOf].inCard) {
        copy[indexOf].quantity = 1;
      }

      setLocalStorage("data", copy);
      return { ...copy, products: copy };
    }
    case VIEW_SHOPPING_CARD: {
      let copy = { ...state };
      copy.viewShoppingCard = !copy.viewShoppingCard;
      return { ...copy };
    }
    case DECREMENT: {
      let copy = [...state.products];
      const indexProduct = getIndex(copy, action.id);

      if (indexProduct !== -1) {
        copy[indexProduct].quantity = copy[indexProduct].quantity - 1;
        if (copy[indexProduct].quantity === 0) {
          copy[indexProduct].inCard = false;
        }
      }

      setLocalStorage("data", copy);
      return { ...state, products: copy };
    }
    case INCREMENT: {
      let copy = [...state.products];
      const indexProduct = getIndex(copy, action.id);

      if (indexProduct !== -1) {
        copy[indexProduct].quantity = copy[indexProduct].quantity + 1;
      }

      setLocalStorage("data", copy);
      return { ...state, products: copy };
    }
    default:
      return state;
  }
}
