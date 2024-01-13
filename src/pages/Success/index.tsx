import { Title } from "../Home/Banner/styles";
import { OrderSuccessContainer, OrderDetailsContainer } from "./styles";
import successMotors from "./../../assets/motorSucess.svg";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { IconText } from "../../components/IconText";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckoutData } from "../Checkout";
import { paymentMethods } from "../Checkout/PaymentMethods";
import { useEffect } from "react";

interface LocationType {
  state: CheckoutData;
}

export function Success() {
  const color = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderSuccessContainer className="container">
      <div>
        <h1>Uhu! pedido confimado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </div>
      <section>
        <OrderDetailsContainer>
          <IconText
            icon={<MapPin weight="fill" />}
            backgroundColor={color["purple-500"]}
            text={
              <h3>
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.bairro} - {state.cidade}, {state.uf}
              </h3>
            }
          />
          <IconText
            icon={<Clock weight="fill" />}
            backgroundColor={color["yellow-300"]}
            text={
              <h3>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </h3>
            }
          />
          <IconText
            icon={<CurrencyDollar weight="fill" />}
            backgroundColor={color["yellow-500"]}
            text={
              <h3>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </h3>
            }
          />
        </OrderDetailsContainer>
        <img src={successMotors} />
      </section>
    </OrderSuccessContainer>
  );
}
