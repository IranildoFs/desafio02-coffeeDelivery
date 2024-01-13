import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { PaymentMethodContainer, ContentContainer } from "./styles";

type PaymentInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode; // ReactNode pode aceitar qualquer elemento React, como ícones
  label: string;
};

export const PaymentInput = forwardRef<HTMLInputElement, PaymentInputProps>(
  ({ icon, label, id, ...props }, ref) => {
    return (
      <PaymentMethodContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
    );
  }
);
