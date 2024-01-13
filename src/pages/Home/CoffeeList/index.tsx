import { CoffeeListContainer, Title, CoffeeListContent } from "./styles";

import { CoffeeCard } from "../CoffeeCard";

import { COOFFES } from "../../../utils/coofees";

export function CoffeeList() {
  return (
    <CoffeeListContainer className="container">
      <Title>Nossos Cafés</Title>
      <CoffeeListContent>
        {COOFFES.map((coffee) => {
          return (
            <CoffeeCard
              id={coffee.id}
              imgUrl={coffee.imgUrl}
              type={coffee.type}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
            />
          );
        })}
      </CoffeeListContent>
    </CoffeeListContainer>
  );
}
