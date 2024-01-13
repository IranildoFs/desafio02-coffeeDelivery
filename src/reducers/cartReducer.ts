import { produce } from "immer";
import {
  ADD_COFFEE_TO_CART,
  CHANGE_CART_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  CLEAN_CART,
} from "./cartActions";

import { CooffeCardProps } from "../pages/Home/CoffeeCard";

export interface CartItem extends CooffeCardProps {
  quantity: number;
}

const cartReducer = (state: CartItem[], action: any) => {
  switch (action.type) {
    case ADD_COFFEE_TO_CART:
      const coffeeExistInCart = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      return produce(state, (draft) => {
        if (coffeeExistInCart < 0) {
          draft.push(action.payload);
        } else {
          draft[coffeeExistInCart].quantity += action.payload.quantity;
        }
      });

    case CHANGE_CART_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const coffeeExistInCart = state.findIndex(
          (cartItem) => cartItem.id === action.payload.cartItemId
        );
        if (coffeeExistInCart >= 0) {
          const item = draft[coffeeExistInCart];
          draft[coffeeExistInCart].quantity =
            action.payload.type === "increase"
              ? item.quantity + 1
              : item.quantity - 1;
        }
      });

    case REMOVE_CART_ITEM:
      return produce(state, (draft) => {
        const coffeeExistInCart = state.findIndex(
          (cartItem) => cartItem.id === action.payload
        );
        if (coffeeExistInCart >= 0) {
          draft.splice(coffeeExistInCart, 1);
        }
      });

    case CLEAN_CART:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
