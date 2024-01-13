import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useReducer,
} from "react";

import { CooffeCardProps } from "../pages/Home/CoffeeCard";

import cartReducer from "../reducers/cartReducer";
import {
  addCoffeeToCartAction,
  changeCartItemQuantityAction,
  removeCartItemAction,
  cleanCartAction,
} from "../reducers/cartActions";

export interface CartItem extends CooffeCardProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemTotal: number;
  addCooffeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    CartItemId: string,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (CartItemId: string) => void;
  cleanCart: () => void;
}

interface CardContextProvider {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CardContextProvider) {
  const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
  const initialState = storedCartItems ? JSON.parse(storedCartItems) : [];

  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  function addCooffeToCart(coffee: CartItem) {
    dispatch(addCoffeeToCartAction(coffee));
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: "increase" | "decrease"
  ) {
    dispatch(changeCartItemQuantityAction(cartItemId, type));
  }

  function cleanCart() {
    dispatch(cleanCartAction());
  }

  function removeCartItem(cartItemId: string) {
    dispatch(removeCartItemAction(cartItemId));
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity: cartItems.length,
        cartItemTotal: cartItems.reduce((total, cartItem) => {
          return total + cartItem.price * cartItem.quantity;
        }, 0),
        addCooffeToCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
