export const ADD_COFFEE_TO_CART = "ADD_COFFEE_TO_CART";
export const CHANGE_CART_ITEM_QUANTITY = "CHANGE_CART_ITEM_QUANTITY";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CLEAN_CART = "CLEAN_CART";

import { CooffeCardProps } from "../pages/Home/CoffeeCard";

export interface CartItem extends CooffeCardProps {
  quantity: number;
}

export const addCoffeeToCartAction = (coffee: CartItem) => ({
  type: ADD_COFFEE_TO_CART,
  payload: coffee,
});

export const changeCartItemQuantityAction = (
  cartItemId: string,
  type: "increase" | "decrease"
) => ({
  type: CHANGE_CART_ITEM_QUANTITY,
  payload: { cartItemId, type },
});

export const removeCartItemAction = (cartItemId: string) => ({
  type: REMOVE_CART_ITEM,
  payload: cartItemId,
});

export const cleanCartAction = () => ({
  type: CLEAN_CART,
});
