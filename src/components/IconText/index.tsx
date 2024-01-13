import { ReactNode } from "react";
import { IconWithIconContainer, IconContainer } from "./styles";

interface IconWithIconContainer {
  icon: ReactNode;
  text: string | ReactNode;
  backgroundColor: string;
}

export function IconText({
  icon,
  text,
  backgroundColor,
}: IconWithIconContainer) {
  return (
    <IconWithIconContainer>
      <IconContainer backgroundColor={backgroundColor}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </IconWithIconContainer>
  );
}
