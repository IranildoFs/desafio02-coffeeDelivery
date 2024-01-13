import { useCart } from "../../hooks/useCarts";
import { Banner } from "./Banner";
import { CoffeeList } from "./CoffeeList";

import { HomeContainer } from "./styles";

export function Home() {
  const { cartItems } = useCart();
  return (
    <HomeContainer>
      <Banner />
      <CoffeeList />
    </HomeContainer>
  );
}
