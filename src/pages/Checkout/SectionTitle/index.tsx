import { ReactNode } from "react";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </SectionTitleContainer>
  );
}
