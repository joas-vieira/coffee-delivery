import { Trash } from '@phosphor-icons/react';
import { InputNumber } from '../../../../components/form/input-number';
import { toMoney } from '../../../../utils/to-money';
import {
  Actions,
  CoffeeCardContainer,
  Price,
  RemoveButton,
  Title
} from './styles';
import { useTheme } from 'styled-components';

export function CoffeeCard() {
  const theme = useTheme();

  return (
    <CoffeeCardContainer>
      <div>
        <img src="/images/coffees/expresso.png" />

        <div>
          <Title>Expresso Tradicional</Title>

          <Actions>
            <InputNumber
              onIncrement={() => {}}
              onDecrement={() => {}}
              quantity={1}
            />

            <RemoveButton>
              <Trash color={theme.purple} />
              <span>Remover</span>
            </RemoveButton>
          </Actions>
        </div>
      </div>

      <Price>{toMoney(9.99)}</Price>
    </CoffeeCardContainer>
  );
}
