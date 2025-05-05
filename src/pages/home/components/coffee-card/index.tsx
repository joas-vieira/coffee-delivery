import { CheckFat, ShoppingCart } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { InputNumber } from '../../../../components/form/input-number';
import { useCart } from '../../../../contexts/cart';
import { Coffee } from '../../../../contracts/coffee';
import { formatPrice } from '../../../../utils/format-price';
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

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const theme = useTheme();
  const { addItem } = useCart();

  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  function handleAddCoffee() {
    addItem({
      ...coffee,
      quantity
    });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

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
            quantity={quantity}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
          />

          <ShoppingCartButton
            disabled={isItemAdded}
            onClick={handleAddCoffee}
            $itemAdded={isItemAdded}
          >
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} color={theme['base-card']} />
            ) : (
              <ShoppingCart
                size={22}
                weight="fill"
                color={theme['base-card']}
              />
            )}
          </ShoppingCartButton>
        </Actions>
      </Footer>
    </CoffeeCardContainer>
  );
}
