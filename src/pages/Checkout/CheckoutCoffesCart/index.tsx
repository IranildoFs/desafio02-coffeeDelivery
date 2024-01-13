import { Trash } from "phosphor-react";
import { ReactNode } from "react";
import { InputMaxMin } from "../../../components/InputMaxMin";
import { CartItem } from "../../../contexts/CartContext";
import { useCart } from "../../../hooks/useCarts";
import { Title } from "../CheckoutForm/styles";
import { formatCurrency } from "../../../utils/formartCurrency";
import {
  CheckoutCoffesCartContainer,
  IncremetInputContainer,
  RemoveCoffeButton,
} from "./styles";
interface CooffeCardProps {
  coffee: CartItem;
}

export function CheckoutCoffesCart({ coffee }: CooffeCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  return (
    <CheckoutCoffesCartContainer>
      <div>
        <img src={coffee.imgUrl} />
        <div>
          <h1>{coffee.name}</h1>
          <IncremetInputContainer>
            <InputMaxMin
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveCoffeButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveCoffeButton>
          </IncremetInputContainer>
        </div>
      </div>
      <p> {formatCurrency(coffeeTotal)}</p>
    </CheckoutCoffesCartContainer>
  );
}
