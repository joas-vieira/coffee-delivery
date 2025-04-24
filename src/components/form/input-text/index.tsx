import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { ErrorMessage, InputTextContainer, Label } from './styles';
import { FieldError } from 'react-hook-form';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  containerProps?: HTMLAttributes<HTMLDivElement>;
  optional?: boolean;
  error?: FieldError;
}

export function InputText({
  containerProps,
  optional,
  error,
  ...props
}: InputTextProps) {
  return (
    <InputTextContainer {...containerProps}>
      <Label>
        <input type="text" {...props} />

        {optional && <span>Opcional</span>}
      </Label>

      {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputTextContainer>
  );
}
