import { Minus, Plus } from '@phosphor-icons/react';
import { InputNumberContainer } from './styles';

interface InputNumberProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function InputNumber({
  quantity,
  onIncrement,
  onDecrement
}: InputNumberProps) {
  return (
    <InputNumberContainer>
      <button onClick={onDecrement}>
        <Minus size={14} />
      </button>

      <span>{quantity}</span>

      <button onClick={onIncrement}>
        <Plus size={14} />
      </button>
    </InputNumberContainer>
  );
}
