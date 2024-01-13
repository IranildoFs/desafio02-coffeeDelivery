import {
  BannerContainer,
  BannerContent,
  Title,
  SubTitle,
  Items,
} from "./styles";
import { useTheme } from "styled-components";
import { IconText } from "../../../components/IconText";
import imagemBanner from "../../../assets/imagem-banner.svg";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export function Banner() {
  const color = useTheme();
  return (
    <BannerContainer>
      <BannerContent className="container">
        <div>
          <article>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <SubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </SubTitle>
          </article>
          <Items>
            <IconText
              icon={<ShoppingCart weight="fill" />}
              backgroundColor={color["yellow-500"]}
              text="Compra simples e segura"
            />
            <IconText
              icon={<Package weight="fill" />}
              backgroundColor={color["gray-900"]}
              text="Embalagem mantém o café intacto"
            />
            <IconText
              icon={<Timer weight="fill" />}
              backgroundColor={color["yellow-300"]}
              text="Entrega rápida e rastreada"
            />
            <IconText
              icon={<Coffee weight="fill" />}
              backgroundColor={color["purple-500"]}
              text="O café chega fresquinho até você"
            />
          </Items>
        </div>
        <img src={imagemBanner}></img>
      </BannerContent>
    </BannerContainer>
  );
}
