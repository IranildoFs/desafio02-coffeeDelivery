import { HeaderContainer, NavButton } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";

import logoCofeeDelivery from "../../assets/logo-coffee_delivery.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCarts";

export function Header() {
  const { cartQuantity } = useCart();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCofeeDelivery} alt="" />
        </NavLink>
        <nav>
          <NavButton variant="purple">
            <MapPin size={20} weight="fill" />
            Fronteira, MG
          </NavButton>
          <NavLink to="/checkout">
            <NavButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </NavButton>
          </NavLink>
        </nav>
      </div>

      {/* <nav>
        <div title="Localização">
          <MapPin size={20} weight="fill" />
          <span>Fronteira, MG</span>
        </div>
        <NavLink to="/Checkout" title="Checkout">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </nav> */}
    </HeaderContainer>
  );
}
