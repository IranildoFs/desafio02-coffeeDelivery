import { CheckoutCoffes } from "./CheckoutCoffes";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutContainer } from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCarts";
import { useEffect } from "react";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  bairro: zod.string().min(1, "Informe o Bairro"),
  cidade: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe o UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type CheckoutData = zod.infer<typeof confirmOrderFormValidationSchema>;
type ConfirmCheckoutFormData = CheckoutData;

export function Checkout() {
  const confirmCheckoutForm = useForm<ConfirmCheckoutFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });
  const { handleSubmit, reset } = confirmCheckoutForm;
  const navigate = useNavigate();
  const { cleanCart, cartItems } = useCart();

  function handleConfirmCheckout(data: ConfirmCheckoutFormData) {
    navigate("/success", { state: data });
    cleanCart();

    reset();
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <FormProvider {...confirmCheckoutForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmCheckout)}
      >
        <CheckoutForm />
        <CheckoutCoffes />
      </CheckoutContainer>
    </FormProvider>
  );
}
