import { createContext, ReactNode, useEffect, useState } from "react";
import { CooffeCardProps } from "../pages/Home/CoffeeCard";
import { produce } from "immer";

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
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });
  const cartQuantity = cartItems.length;
  const cartItemTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCooffeToCart(coffee: CartItem) {
    const coffeeExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );
    const newCart = produce(cartItems, (draft) => {
      if (coffeeExistInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeExistInCart].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id == cartItemId
      );
      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart];
        draft[coffeeExistInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  function removeCartItem(cartItemId: string) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (coffeeExistInCart >= 0) {
        draft.splice(coffeeExistInCart, 1);
      }
    });
    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemTotal,
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
