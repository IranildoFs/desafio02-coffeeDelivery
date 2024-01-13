import React from "react";
import { PaymentInput } from "../../../components/PaymentInput";
import { PaymentMethodsContainer } from "./styles";
import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
  credit: { label: "Cartão de Crédito", icon: <CreditCard size={16} /> },
  debit: { label: "Cartão de Débito", icon: <Bank size={16} /> },
  money: { label: "Dinheiro", icon: <Money size={16} /> },
};

export function PaymentMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;
  return (
    <PaymentMethodsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodError && <p>{paymentMethodError}</p>}
    </PaymentMethodsContainer>
  );
}
