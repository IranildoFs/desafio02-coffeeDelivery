import { Minus, Plus } from "phosphor-react";
import { InputMaxMinContainer, IconWrapper } from "./styles";

interface InputMaxMinProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function InputMaxMin({
  onIncrease,
  onDecrease,
  quantity,
}: InputMaxMinProps) {
  return (
    <InputMaxMinContainer>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </InputMaxMinContainer>
  );
}
