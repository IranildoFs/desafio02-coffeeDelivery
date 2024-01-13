import { Input } from "../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function CheckoutAddressForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorsType;
  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")} // Add registration for "street" field
        error={errors.street?.message} // Add error handling for "street" field
      />
      <Input
        placeholder="Número"
        type="number"
        {...register("number")} // Add registration for "number" field
        error={errors.number?.message} // Add error handling for "number" field
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")} // Add registration for "complement" field
        error={errors.complement?.message} // Add error handling for "complement" field
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register("bairro")} // Add registration for "bairro" field
        error={errors.bairro?.message} // Add error handling for "bairro" field
      />
      <Input
        placeholder="Cidade"
        {...register("cidade")} // Add registration for "cidade" field
        error={errors.cidade?.message} // Add error handling for "cidade" field
      />
      <Input
        placeholder="UF"
        {...register("uf")} // Add registration for "uf" field
        error={errors.uf?.message} // Add error handling for "uf" field
      />
    </AddressFormContainer>
  );
}
