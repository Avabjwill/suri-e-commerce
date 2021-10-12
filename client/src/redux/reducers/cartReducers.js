import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;  
      const existItem = state.cartItems.find((a) => a.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((a) =>
            a.product === existItem.product ? item : a
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((a) => a.product !== action.payload),
      };
    default:
      return state;
  }
};