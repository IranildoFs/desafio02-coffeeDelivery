import { ReactNode } from "react";
import { useCart } from "../../../hooks/useCarts";
import { CheckoutCoffesCart } from "../CheckoutCoffesCart";
import { Title } from "../CheckoutForm/styles";
import { CheckoutValues } from "../CheckoutValues";
import { CheckoutCofeesContainer, DetailsContainer } from "./styles";

export function CheckoutCoffes() {
  const { cartItems } = useCart();
  return (
    <CheckoutCofeesContainer>
      <Title>Cafés selecionados</Title>
      <DetailsContainer>
        {cartItems.map((item) => (
          <CheckoutCoffesCart key={item.id} coffee={item} />
        ))}

        <CheckoutValues />
      </DetailsContainer>
    </CheckoutCofeesContainer>
  );
}
