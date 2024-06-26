import { setLocalStorage } from "../Controllers";
import { initialState } from "./initialState";
import {
  ADD_TO_SHOPPINGCARD,
  DELETE_ITEM,
  FORM_EVENT,
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
      copy.filtered = action.data;
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

    case FORM_EVENT: {
      return { ...state, [action.e.target.id]: action.e.target.value };
    }

    case REMEMBER_SHOPPING: {
      console.log(action);
      return {
        ...state,
        shoppingCard: action.storedShoppingCart,
        products: action.storedData,
      };
    }

    case ADD_TO_SHOPPINGCARD: {
      let copy = [...state.products];
      let _shoppingCard = [...state.shoppingCard];
      const indexOf = copy.findIndex((product) => {
        return product.id === action.id;
      });

      if (indexOf !== -1) {
        const selectedProduct = copy[indexOf];
        selectedProduct.Quantity = 1;
        _shoppingCard = [..._shoppingCard, selectedProduct];
      }
      copy[indexOf].inCard = !copy[indexOf].inCard;
      setLocalStorage("shoppingCard", _shoppingCard);
      setLocalStorage("data", copy);
      return { ...state, products: copy, shoppingCard: _shoppingCard };
    }

    case VIEW_SHOPPING_CARD: {
      let _viewShoppingCard = { ...state };
      _viewShoppingCard.viewShoppingCard = !_viewShoppingCard.viewShoppingCard;
      return { ...state, viewShoppingCard: _viewShoppingCard.viewShoppingCard };
    }
    case DELETE_ITEM: {
      let _shoppingCard = [...state.shoppingCard];
      let copy = [...state.products];
      const indexCard = _shoppingCard.findIndex((product) => {
        return product.id === action.id;
      });

      const indexProduct = copy.findIndex((product) => {
        return product.id === action.id;
      });

      _shoppingCard.splice(indexCard, 1);
      copy[indexProduct].inCard = !copy[indexProduct].inCard;
      setLocalStorage("shoppingCard", _shoppingCard);
      setLocalStorage("data", copy);
      console.log(copy);
      return { ...state, products: copy, shoppingCard: _shoppingCard };
    }
    default:
      return state;
  }
}
