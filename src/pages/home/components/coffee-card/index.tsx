import { ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { InputNumber } from '../../../../components/form/input-number';
import { Coffee } from '../../../../contracts/coffee';
import {
  Actions,
  CoffeeCardContainer,
  CoffeeImage,
  Description,
  Footer,
  Price,
  ShoppingCartButton,
  Tags,
  Title
} from './styles';
import { formatPrice } from '../../../../utils/format-price';

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const theme = useTheme();

  return (
    <CoffeeCardContainer>
      <CoffeeImage src={coffee.image} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Footer>
        <Price>
          <span>R$</span>
          <span>{formatPrice(coffee.price)}</span>
        </Price>

        <Actions>
          <InputNumber
            quantity={0}
            onIncrement={() => {}}
            onDecrement={() => {}}
          />

          <ShoppingCartButton>
            <ShoppingCart size={22} weight="fill" color={theme['base-card']} />
          </ShoppingCartButton>
        </Actions>
      </Footer>
    </CoffeeCardContainer>
  );
}
