import { InputHTMLAttributes } from 'react';
import { RadioContainer } from './styles';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  isSelected: boolean;
}

export function Radio({ isSelected, children, ...props }: RadioProps) {
  return (
    <RadioContainer data-state={isSelected}>
      <input type="radio" {...props} />
      {children}
    </RadioContainer>
  );
}
