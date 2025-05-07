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
import { ItemCart } from '../../../../contracts/item-cart';
import { useCart } from '../../../../contexts/cart';

interface CoffeeCardProps {
  item: ItemCart;
}

export function CoffeeCard({ item }: CoffeeCardProps) {
  const theme = useTheme();
  const { removeItem, incrementItemQuantity, decrementItemQuantity } =
    useCart();

  function handleRemoveItem() {
    removeItem(item.id);
  }

  function handleIncrementItem() {
    incrementItemQuantity(item.id);
  }

  function handleDecrementItem() {
    decrementItemQuantity(item.id);
  }

  return (
    <CoffeeCardContainer>
      <div>
        <img src={item.image} />

        <div>
          <Title>{item.title}</Title>

          <Actions>
            <InputNumber
              onIncrement={handleIncrementItem}
              onDecrement={handleDecrementItem}
              quantity={item.quantity}
            />
            <RemoveButton onClick={handleRemoveItem}>
              <Trash color={theme.purple} />
              <span>Remover</span>
            </RemoveButton>
          </Actions>
        </div>
      </div>

      <Price>{toMoney(item.price)}</Price>
    </CoffeeCardContainer>
  );
}
