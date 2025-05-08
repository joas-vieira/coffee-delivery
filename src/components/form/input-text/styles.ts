import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const InputTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-button']};
  background: ${({ theme }) => theme['base-input']};

  transition: all 0.2s;

  &:focus-within {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }

  span {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme['base-label']};
    font-style: italic;
  }
`;

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`;
