import { HTMLAttributes } from 'react';
import { SeparatorContainer } from './styles';

export function Separator({ ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <SeparatorContainer {...props} />;
}
