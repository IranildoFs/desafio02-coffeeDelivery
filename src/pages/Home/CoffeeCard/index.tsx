import {
  CoffeeCardContent,
  AddCartWrapper,
  Price,
  ShowArea,
  ShoopArea,
} from "./styles";
import { ShoppingCartSimple } from "phosphor-react";
import { InputMaxMin } from "../../../components/InputMaxMin";
import { useCart } from "../../../hooks/useCarts";
import { useState } from "react";

import { formatCurrency } from "../../../utils/formartCurrency";

export interface CooffeCardProps {
  id: string;
  imgUrl: string;
  type: string[];
  name: string;
  description: string;
  price: number;
}

export function CoffeeCard(coffe: CooffeCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addCooffeToCart } = useCart();
  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffe,
      quantity,
    };
    addCooffeToCart(coffeeToAdd);
  }

  return (
    <CoffeeCardContent>
      <img src={coffe.imgUrl} alt="" />
      <ShowArea>
        <div>
          {coffe.type.map((tag) => (
            <span key={`${coffe.id}${tag}`}>{tag}</span>
          ))}
        </div>
        <h1>{coffe.name}</h1>
        <strong>{coffe.description}</strong>
      </ShowArea>

      <ShoopArea>
        <Price>
          <span>R$</span>
          <strong>{coffe.price}</strong>
        </Price>
        <AddCartWrapper>
          <InputMaxMin
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </AddCartWrapper>
      </ShoopArea>
    </CoffeeCardContent>
  );
}
