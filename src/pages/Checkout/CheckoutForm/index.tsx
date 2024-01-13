import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { CheckoutAddressForm } from "../CheckoutAddressForm";
import { PaymentMethods } from "../PaymentMethods";
import { SectionTitle } from "../SectionTitle";
import { CheckoutFormContainer, Title, FormArticleContainer } from "./styles";

export function CheckoutForm() {
  const color = useTheme();
  return (
    <CheckoutFormContainer>
      <Title>Complete seu pedido</Title>
      <FormArticleContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={color["yellow-500"]} size={22} />}
        />
        <CheckoutAddressForm />
      </FormArticleContainer>
      <FormArticleContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={color["purple-300"]} size={22} />}
        />
        <PaymentMethods />
      </FormArticleContainer>
    </CheckoutFormContainer>
  );
}
