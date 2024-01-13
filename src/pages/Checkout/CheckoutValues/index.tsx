import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useCart } from "../../../hooks/useCarts";
import { CheckoutCoffesCart } from "../CheckoutCoffesCart";
import { Title } from "../CheckoutForm/styles";
import { CheckoutValuesContainer } from "./styles";
import { formatCurrency } from "../../../utils/formartCurrency";

const DELIVERY_PRICE = 3.5;

export function CheckoutValues() {
  const { cartQuantity, cartItemTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemTotal;
  return (
    <CheckoutValuesContainer>
      <div>
        <h1>Total de itens</h1>
        <h1> {formatCurrency(cartItemTotal)}</h1>
      </div>
      <div>
        <h1>Entrega</h1>
        <h1> {formatCurrency(DELIVERY_PRICE)}</h1>
      </div>
      <div>
        <h2>Total</h2>
        <h2> {formatCurrency(cartTotal)}</h2>
      </div>
      {/* <NavLink to="/success"> */}
      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
      {/* </NavLink> */}
    </CheckoutValuesContainer>
  );
}
